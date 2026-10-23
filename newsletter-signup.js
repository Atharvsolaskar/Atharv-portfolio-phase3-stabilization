// Netlify newsletter transport for the Home and About footers only.
(function () {
  'use strict';
  var FORM_NAME = 'atharv-newsletter';
  var SITE_HOST = 'atharv-contact-preview.netlify.app';
  var pending = false, message = '', accepted = new Set();
  function attr(node, name, value) {
    if (node.getAttribute(name) !== value) node.setAttribute(name, value);
  }
  function prepare(form) {
    attr(form, 'name', FORM_NAME);
    attr(form, 'method', 'POST');
    attr(form, 'action', '/');
    attr(form, 'data-netlify', 'true');
    attr(form, 'data-netlify-honeypot', 'website');
    attr(form, 'aria-busy', String(pending));
    var name = form.querySelector('input[name="form-name"]');
    if (!name) {
      name = document.createElement('input');
      name.type = 'hidden'; name.name = 'form-name'; form.appendChild(name);
    }
    if (name.value !== FORM_NAME) name.value = FORM_NAME;
    var email = form.querySelector('input[name="Email"]');
    if (email) { attr(email, 'type', 'email'); attr(email, 'required', ''); }
    form.querySelectorAll('button').forEach(function (button) {
      attr(button, 'type', 'submit');
      if (button.disabled !== pending) button.disabled = pending;
      attr(button, 'aria-disabled', String(pending));
    });
    var status = form.querySelector('#atharv-newsletter-status');
    if (!status && message) {
      status = document.createElement('p'); status.id = 'atharv-newsletter-status';
      status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
      status.setAttribute('aria-atomic', 'true');
      status.className = 'framer-text';
      status.style.cssText = 'margin:0;font-family:Geist,"Geist Placeholder",sans-serif;font-size:14px;line-height:1.5;color:#999';
      form.appendChild(status);
    }
    if (status) {
      attr(form, 'aria-describedby', status.id);
      if (status.textContent !== message) status.textContent = message;
      status.hidden = !message;
    }
  }
  function apply() { document.querySelectorAll('footer form').forEach(prepare); }
  function feedback(value) { message = value; apply(); }
  async function submit(form) {
    if (pending) return;
    prepare(form);
    var email = form.querySelector('input[name="Email"]');
    if (!email) return;
    email.setCustomValidity(email.value.trim() ? '' : 'Please enter your email address.');
    if (!form.reportValidity()) return;
    var host = location.hostname;
    if (location.protocol !== 'https:' || (host !== SITE_HOST && !host.endsWith('--' + SITE_HOST))) {
      feedback('Sign-up not sent. Please try again on our Netlify site.'); return;
    }
    var trap = form.querySelector('input[name="website"]');
    if (!trap || trap.value) { feedback('Your sign-up could not be submitted.'); return; }
    var address = email.value.trim();
    if (accepted.has(address.toLowerCase())) { feedback('This email address has already been submitted.'); return; }
    var payload = new URLSearchParams({'form-name': FORM_NAME, Email: address, website: ''});
    pending = true; feedback('Submitting your sign-up…');
    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 15000);
    try {
      var response = await fetch('/', {
        method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: payload.toString(), signal: controller.signal
      });
      if (!response.ok) {
        feedback(response.status === 429 ? 'Too many attempts. Please wait before trying again.' : 'Your sign-up could not be submitted. Please try again.');
        return;
      }
      accepted.add(address.toLowerCase());
      feedback('Your sign-up was submitted. Thank you.');
    } catch (error) {
      feedback('We couldn’t confirm your sign-up. Please try again later.');
    } finally { clearTimeout(timer); pending = false; apply(); }
  }
  function formFor(event) { return event.target.closest && event.target.closest('footer form'); }
  function intercept(event, form) { event.preventDefault(); event.stopImmediatePropagation(); submit(form); }
  document.addEventListener('submit', function (event) {
    var form = formFor(event); if (form) intercept(event, form);
  }, true);
  document.addEventListener('click', function (event) {
    var form = formFor(event); if (form && event.target.closest('button')) intercept(event, form);
  }, true);
  document.addEventListener('keydown', function (event) {
    var form = formFor(event);
    if (form && event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') intercept(event, form);
  }, true);
  document.addEventListener('input', function (event) {
    if (formFor(event) && event.target.name === 'Email') {
      event.target.setCustomValidity(''); if (!pending) feedback('');
    }
  }, true);
  // Framer replaces the exported footer during hydration. Restore registration
  // and state without replacing any of its fields or visual components.
  var scheduled = false;
  new MutationObserver(function () {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; apply(); });
  }).observe(document.getElementById('main'), {
    subtree: true, childList: true, attributes: true,
    attributeFilter: ['name', 'method', 'action', 'disabled', 'type']
  });
  addEventListener('pageshow', apply);
  apply();
})();
