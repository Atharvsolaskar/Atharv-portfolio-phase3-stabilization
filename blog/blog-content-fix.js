(function(){
  var DATA = {
    "why-clarity-beats-creativity-in-web-design.html": {
      category: "Design Strategy",
      date: "Aug 5, 2026",
      author: "Atharv Yadav",
      title: "Why Most Business Websites Look Fine and Convert Nothing",
      subtitle: "A clean site and a working site are not the same thing. Here\u2019s the gap most builds miss.",
      sections: [
        {h:"Introduction", p:"A site can look sharp in every screenshot and still fail the one job it has, moving a visitor toward a decision. Clarity of design and clarity of purpose are different problems, and most builds only solve the first one. I\u2019ve seen this gap up close building sites for clients who came to me after paying someone else for something that looked good and did nothing."},
        {h:"1. A Homepage Is Not a Portfolio", p:"Your homepage isn\u2019t there to show off design range. It\u2019s there to answer one question fast: what does this business actually do, and why should someone care right now. Every extra second spent figuring that out is a visitor who leaves before they even see what you\u2019re offering."},
        {h:"2. Every Page Needs One Job", p:"If a page is trying to inform, sell, and impress all at once, it does none of them well. Pick the one action you want someone to take on that page, and build everything on it toward that single outcome. Multiple goals on one page usually means zero goals get met."},
        {h:"3. Speed Is a Feature, Not a Detail", p:"A slow site loses people before the message even lands. Fast load times aren\u2019t polish, they\u2019re the actual difference between someone staying long enough to read your pitch or bouncing in the first three seconds. I treat load time as a design requirement, not an afterthought for the dev phase."},
        {h:"4. Systems Outlast Designs", p:"A beautiful site with no way to update it, track it, or grow it becomes dead weight in six months. The build has to work as a system that can evolve with the business, not just a launch-day snapshot that gets frozen in place."},
        {h:"Final Thought", p:"A website that looks good and does nothing is still a failed website. I build for the outcome first. The polish comes from getting the fundamentals right, not from adding more of it on top of a shaky foundation."}
      ]
    },
    "what-to-look-for-in-a-premium-framer-template.html": {
      category: "Branding",
      date: "Aug 20, 2026",
      author: "Atharv Yadav",
      title: "What Actually Breaks When You Build Fast",
      subtitle: "Speed and shortcuts aren\u2019t the same thing. Here\u2019s where fast builds usually fall apart.",
      sections: [
        {h:"Introduction", p:"Building fast is a real advantage, clients notice it and it matters when timelines are tight. But building fast by skipping the parts that quietly matter later is how you end up rebuilding the same thing twice, at twice the cost in time. Here\u2019s what actually holds up under speed, and what doesn\u2019t."},
        {h:"1. Structure Before Style", p:"Get the actual architecture right first, how pages connect, where content lives, how data moves, before touching how anything looks visually. Style built on top of a shaky structure has to be redone the moment something in the business changes, and something always changes."},
        {h:"2. Mobile Isn\u2019t an Afterthought", p:"Most traffic hits mobile first, not desktop. If the mobile version is just an awkward shrink of the desktop build, that\u2019s not a minor gap to fix later, that\u2019s the majority of your visitors getting a worse experience by default from day one."},
        {h:"3. What Breaks Silently", p:"Broken links, dead paths, and missing content don\u2019t announce themselves the way a crashed page does. They just quietly cost you visitors who never say anything, they just leave and don\u2019t come back. I check for these specifically before calling any build done."},
        {h:"4. Build for the Next Change", p:"The first version of anything is never the last version. A build that can\u2019t be easily updated becomes a bottleneck the moment the business needs something new, a new page, a new feature, a new integration. I build assuming change is coming, because it always does."},
        {h:"Final Thought", p:"Fast doesn\u2019t have to mean fragile. The builds that actually last are the ones where speed came from clear decisions made early, not from skipping the parts that are hard to notice until they break in front of a client."}
      ]
    },
    "why-motion-design-makes-your-website-feel-alive.html": {
      category: "Social Media",
      date: "Sep 5, 2026",
      author: "Atharv Yadav",
      title: "The Difference Between Automated and Actually Useful",
      subtitle: "Not every automation saves time. Some just move the busywork somewhere else.",
      sections: [
        {h:"Introduction", p:"Automation gets sold as a universal win, but a badly built automation just relocates the manual work instead of removing it. I\u2019ve built and used automation tools long enough to know the real test isn\u2019t whether something runs on its own, it\u2019s whether it actually gives you time back."},
        {h:"1. Automate the Repeat, Not the Rare", p:"If something happens once a month, automating it usually isn\u2019t worth the setup cost or the maintenance it demands later. Automate what repeats often enough that the time saved actually adds up week over week, not the one-off tasks that feel automatable but rarely are worth it."},
        {h:"2. A Tool Nobody Checks Is Dead Weight", p:"An automated system that runs quietly but nobody ever looks at isn\u2019t working, it\u2019s just generating noise in the background. Good automation surfaces what actually matters when it matters, it doesn\u2019t bury useful signal under constant activity."},
        {h:"3. Simple Beats Clever", p:"An automation that\u2019s hard to explain in one sentence is an automation that\u2019s hard to fix the day it breaks. The systems I build are ones anyone on the team could understand quickly, because complexity nobody understands becomes a liability, not an asset."},
        {h:"4. It Should Fail Loudly", p:"Silent failures are worse than having no automation at all, because you don\u2019t find out something broke until real damage is already done. A good system tells you the moment something\u2019s wrong, instead of quietly doing the wrong thing for weeks."},
        {h:"Final Thought", p:"Automation isn\u2019t the goal, time back is the goal. If a system doesn\u2019t measurably reduce the actual work, it\u2019s just complexity wearing a productivity label. I build automation to be checked rarely, not constantly, because that\u2019s when you know it\u2019s actually working."}
      ]
    }
  };

  function currentKey(){
    var path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\/+$/, "");
    var parts = path.split("/");
    var last = parts[parts.length - 1];
    if (last.indexOf(".html") === -1) last = last + ".html";
    return last;
  }

  function escapeHtml(s){
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function setText(el, text){
    if (el && el.textContent.trim() !== text) el.textContent = text;
  }

  function slugOf(href){
    if (!href) return "";
    var h = href.split("?")[0].split("#")[0].replace(/\/index\.html$/, "/").replace(/\/+$/, "");
    var parts = h.split("/");
    var last = parts[parts.length - 1];
    if (last.slice(-5) === ".html") last = last.slice(0, -5);
    return last;
  }

  function leafSet(scope, selector, text, nth){
    var els = scope.querySelectorAll(selector);
    var seen = 0;
    for (var i = 0; i < els.length; i++){
      if (els[i].children.length !== 0) continue;
      if (seen === nth){ setText(els[i], text); return true; }
      seen++;
    }
    return false;
  }

  // Keeps blog cards (homepage "Latest Insights", /blog.html listing and the
  // in-article "More insights" rail) in sync with the same DATA the articles
  // use. Only runs when Framer client-navigation re-renders the original
  // template markup; the static HTML already matches, so it writes nothing.
  function fixCards(){
    var links = document.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++){
      var a = links[i];
      var data = DATA[slugOf(a.getAttribute("href")) + ".html"];
      if (!data) continue;
      leafSet(a, "p.framer-styles-preset-1wmoqk3", data.category, 0);
      leafSet(a, "p.framer-styles-preset-1wmoqk3", data.date, 1);
      leafSet(a, "p.framer-styles-preset-186rn72", data.subtitle, 0);
      leafSet(a, "h3.framer-styles-preset-1uhvlif", data.title, 0);
      leafSet(a, "h4.framer-styles-preset-1ly7ufl", data.title, 0);
    }
  }

  function apply(){
    try { fixCards(); } catch(e) {}
    var data = DATA[currentKey()];
    if (!data) return;

    var header = document.querySelector('[data-framer-name="Header"]') || document.querySelector("main");
    if (!header) return;

    var titleWrap = header.querySelector('[data-framer-name="Blog Header Title"]');
    if (titleWrap){
      var h1 = titleWrap.querySelector("h1");
      setText(h1, data.title);
    }

    var subWrap = header.querySelector('[data-framer-name="Blog Header Description"]');
    if (subWrap){
      var subP = subWrap.querySelector("p");
      setText(subP || subWrap, data.subtitle);
    }

    var authorWrap = header.querySelector('[data-framer-name="Blog Header Author Text"]');
    if (authorWrap){
      var authorP = authorWrap.querySelector("p");
      setText(authorP, data.author);
    }

    var badgeEls = header.querySelectorAll("p.framer-styles-preset-1wmoqk3");
    if (badgeEls.length > 0) setText(badgeEls[0], data.category);
    for (var b = 1; b < badgeEls.length; b++) setText(badgeEls[b], data.date);

    var timeEls = header.querySelectorAll("time");
    for (var t = 0; t < timeEls.length; t++) setText(timeEls[t], data.date);

    var bodyWrap = document.querySelector('[data-framer-name="Blog Content Text"]');
    if (bodyWrap && bodyWrap.getAttribute("data-static-applied") !== "true"){
      var html = "";
      for (var i = 0; i < data.sections.length; i++){
        var s = data.sections[i];
        html += '<h3 class="framer-text framer-styles-preset-1uhvlif">' + escapeHtml(s.h) + "</h3>";
        html += '<p class="framer-text framer-styles-preset-9ooz4b">' + escapeHtml(s.p) + "</p>";
      }
      bodyWrap.innerHTML = html;
      bodyWrap.setAttribute("data-static-applied", "true");
    }

    if (document.title.indexOf(data.title) !== 0) {
      document.title = data.title + " - ATHARV";
    }
  }

  apply();
  var attempts = 0;
  var CAP = 100; // 100 x 300ms = 30s capped repair window (was 30 ticks / ~9s)
  var interval = setInterval(function(){
    apply();
    attempts++;
    if (attempts > CAP) clearInterval(interval);
  }, 300);
  setTimeout(apply, 15000);
  setTimeout(apply, 20000);
  setTimeout(apply, 30000);
  window.addEventListener("pageshow", function(){
    apply();
    var extra = 0;
    var iv2 = setInterval(function(){ apply(); if (++extra > 6) clearInterval(iv2); }, 300);
  });

  document.addEventListener("DOMContentLoaded", apply);
  window.addEventListener("load", apply);

  if (window.MutationObserver){
    var pending = false;
    var observer = new MutationObserver(function(){
      if (pending) return;
      pending = true;
      setTimeout(function(){ pending = false; apply(); }, 150);
    });
    var target = document.getElementById("main") || document.body;
    observer.observe(target, {childList: true, subtree: true, characterData: true});
  }
})();

/* atharv-nav-root
   Framer's client router rewrites in-site nav hrefs relative to the current route depth, so on
   the nested blog routes "../" resolves to /blog/ instead of the site root and Home lands in the
   blog directory. Resolve nav/footer/logo destinations against the real site root, derived from
   THIS script's own URL, so it works under any subdirectory or host (nothing hardcoded).
   Home always resolves to the site root so the homepage renders from its own document.
   No .mjs / hydration changes, no observers. */
(function(){
  var SR=(function(){
    var s=(document.currentScript&&document.currentScript.src)||'';
    if(!s){var l=[].slice.call(document.scripts).filter(function(x){return /blog-content-fix\.js/.test(x.src||'')});s=l.length?l[l.length-1].src:''}
    try{return s?new URL('../',s).href:location.origin+'/'}catch(e){return location.origin+'/'}
  })();
  var MAP={home:'',index:'',about:'about.html',works:'works.html',work:'works.html',contact:'contact.html',blog:'blog.html',insights:'blog.html',waitlist:'waitlist.html',backtohome:'',backtohomebacktohome:''};
  // Canonicalize only the nine exported articles; reuse real document navigation.
  // Framer emits extensionless links, but every article also has a static .html file.
  var ARTICLE_SLUGS = ["how-fixing-your-website-s-ux-can-increase-conversion", "how-to-write-copy-that-fits-your-template", "social-media-design-that-stops-the-scroll", "the-power-of-branding-more-than-just-a-logo", "the-real-cost-of-a-bad-website", "what-to-look-for-in-a-premium-framer-template", "why-clarity-beats-creativity-in-web-design", "why-motion-design-makes-your-website-feel-alive", "why-your-first-website-should-use-a-template"];
  function articleURL(u) {
    var base = new URL(SR);
    if (u.origin !== base.origin) return null;
    var match = u.pathname.match(/\/blog\/([^/]+?)(?:\.html|\/index\.html|\/)?$/);
    if (!match || ARTICLE_SLUGS.indexOf(match[1]) < 0) return null;
    var result = new URL('blog/' + match[1] + '.html', SR);
    result.search = u.search; result.hash = u.hash;
    return result;
  }
  function is404(){return /(^|\/)404(\.html)?$/.test(location.pathname)||/404/.test(document.title||'');}
  function routeFor(a){
    if((a.getAttribute('data-framer-name')||'').toLowerCase()==='logo')return '';
    var t=(a.textContent||'').replace(/[^A-Za-z]/g,'').toLowerCase();
    return Object.prototype.hasOwnProperty.call(MAP,t)?MAP[t]:null;
  }
  function norm(p){return p.replace(/index\.html$/,'')}
  function inSite(u){try{var b=new URL(SR);return u.origin===b.origin&&u.pathname.indexOf(b.pathname)===0}catch(e){return false}}
  document.addEventListener('click',function(e){
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a)return;
    if(!(a.closest('nav')||a.closest('footer')||(a.getAttribute('data-framer-name')||'').toLowerCase()==='logo'||a.closest('#main')))return;
    if(a.target&&a.target!=='_self')return;
    var raw=a.getAttribute('href')||'';
    if(/^(mailto:|tel:|#|javascript:)/i.test(raw))return;
    var r=routeFor(a);
    var want,got;
    try{got=new URL(raw,location.href);want=(r===null)?got:new URL(r,SR)}catch(err){return}
    var article = r === null ? articleURL(got) : null;
    if(article){got=article;want=article;}
    if(!inSite(got)||!inSite(want))return;
    if(r===null&&!/(\.html$|\/$)/.test(want.pathname))return;
    // Framer's client router renders destinations from the compiled route chunks instead of
    // requesting the real exported document, which bypasses the page-local ATHARV fixers and
    // revives old template content. Force a real document load for in-site links; only skip
    // when the link points at the page we are already on.
    if(norm(want.pathname)===norm(location.pathname))return;
    e.preventDefault();e.stopPropagation();
    location.assign(want.href);
  },true);
})();

/* atharv-preloader-watchdog: hydration-stall recovery only.
   The About preloader normally exits three seconds after React mounts it.
   A preserved SSR boundary can prevent that timer from ever starting. Allow
   eight seconds per wrapper, then recover only an idle, hit-testable instance.
   Never remove React-owned nodes or change the native transition/navigation. */
(function(){
  'use strict';
  var HOST = '#main .framer-k8ngyk-container';
  var TIMEOUT = 8000, QUIET = 1500;
  var states = new WeakMap(), watchedHost = null, observer = null;
  var timer = null;

  function recover(wrapper) {
    // Instance-local recovery; healthy and newly mounted wrappers keep playing.
    if (wrapper.style.getPropertyValue('visibility') !== 'hidden' ||
        wrapper.style.getPropertyPriority('visibility') !== 'important') {
      wrapper.style.setProperty('visibility', 'hidden', 'important');
    }
    if (wrapper.style.getPropertyValue('pointer-events') !== 'none' ||
        wrapper.style.getPropertyPriority('pointer-events') !== 'important') {
      wrapper.style.setProperty('pointer-events', 'none', 'important');
    }
    if (!wrapper.hasAttribute('inert')) wrapper.setAttribute('inert', '');
  }

  function watch(host) {
    if (host === watchedHost) return;
    if (observer) observer.disconnect();
    watchedHost = host;
    if (!host) return;
    observer = new MutationObserver(function() {
      var now = performance.now();
      Array.prototype.forEach.call(host.children, function(wrapper) {
        var state = states.get(wrapper);
        if (!state) return;
        if (state.recovered) recover(wrapper);
        else state.changed = now;
      });
    });
    observer.observe(host, {subtree:true, childList:true, attributes:true,
      attributeFilter:['style', 'class', 'data-framer-name', 'inert']});
  }

  function check() {
    if (document.hidden) return;
    var host = document.querySelector(HOST);
    watch(host);
    if (!host) return;
    Array.prototype.forEach.call(host.children, function(wrapper) {
      if (!wrapper.querySelector('.framer-2Jgvj .framer-1g2hfjk[data-framer-name="BG"]')) return;
      var now = performance.now(), state = states.get(wrapper);
      if (!state) {
        state = {since:now, changed:now, recovered:false};
        states.set(wrapper, state);
      }
      if (state.recovered) { recover(wrapper); return; }
      if (now - state.since < TIMEOUT || now - state.changed < QUIET) return;
      var style = getComputedStyle(wrapper), rect = wrapper.getBoundingClientRect();
      if (style.position !== 'fixed' || style.display === 'none' ||
          style.visibility !== 'visible' || wrapper.hasAttribute('inert') ||
          rect.left > 1 || rect.top > 1 || rect.right < innerWidth - 1 ||
          rect.bottom < innerHeight - 1) return;
      // Late hydration may have started the normal animation: let it finish.
      if (wrapper.getAnimations({subtree:true}).some(function(animation) {
        return animation.pending || animation.playState === 'running';
      })) { state.changed = now; return; }
      var blocking = [[0.1,0.1], [0.5,0.5], [0.9,0.9]].some(function(point) {
        var hit = document.elementFromPoint(innerWidth * point[0], innerHeight * point[1]);
        return hit && wrapper.contains(hit);
      });
      if (!blocking) return;
      state.recovered = true;
      recover(wrapper);
    });
  }

  function resume() {
    // A restored, unrecovered wrapper gets a fresh grace period. Recovered
    // instances stay recovered; replacement nodes have independent deadlines.
    var host = document.querySelector(HOST), now = performance.now();
    if (host) Array.prototype.forEach.call(host.children, function(wrapper) {
      var state = states.get(wrapper);
      if (state && !state.recovered) state.since = state.changed = now;
    });
    check();
    if (timer === null) timer = setInterval(check, 500);
  }
  window.addEventListener('pagehide', function() {
    clearInterval(timer); timer = null;
    if (observer) observer.disconnect();
    watchedHost = null;
  });
  window.addEventListener('pageshow', resume);
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) resume();
  });
  resume();
})();

/* atharv-home-preloader-watchdog: hydration-stall recovery only.
   Home shares the three-second React preloader but its exported End variant
   can retain a transparent, blocking wrapper when hydration stalls. Give each
   wrapper eight seconds and recover only an idle, hit-testable instance.
   Independent of the verified About watchdog; no native timing/nav changes. */
(function(){
  'use strict';
  var HOST = '#main .framer-w5yvcy-container';
  var TIMEOUT = 8000, QUIET = 1500;
  var states = new WeakMap(), watchedHost = null, observer = null;
  var timer = null;

  function recover(wrapper) {
    // Instance-local recovery; healthy and newly mounted wrappers keep playing.
    if (wrapper.style.getPropertyValue('visibility') !== 'hidden' ||
        wrapper.style.getPropertyPriority('visibility') !== 'important') {
      wrapper.style.setProperty('visibility', 'hidden', 'important');
    }
    if (wrapper.style.getPropertyValue('pointer-events') !== 'none' ||
        wrapper.style.getPropertyPriority('pointer-events') !== 'important') {
      wrapper.style.setProperty('pointer-events', 'none', 'important');
    }
    if (!wrapper.hasAttribute('inert')) wrapper.setAttribute('inert', '');
  }

  function watch(host) {
    if (host === watchedHost) return;
    if (observer) observer.disconnect();
    watchedHost = host;
    if (!host) return;
    observer = new MutationObserver(function() {
      var now = performance.now();
      Array.prototype.forEach.call(host.children, function(wrapper) {
        var state = states.get(wrapper);
        if (!state) return;
        if (state.recovered) recover(wrapper);
        else state.changed = now;
      });
    });
    observer.observe(host, {subtree:true, childList:true, attributes:true,
      attributeFilter:['style', 'class', 'data-framer-name', 'inert']});
  }

  function check() {
    if (document.hidden) return;
    var host = document.querySelector(HOST);
    watch(host);
    if (!host) return;
    Array.prototype.forEach.call(host.children, function(wrapper) {
      if (!wrapper.querySelector('.framer-19tu013-container .framer-2Jgvj .framer-1g2hfjk[data-framer-name="BG"]')) return;
      var now = performance.now(), state = states.get(wrapper);
      if (!state) {
        state = {since:now, changed:now, recovered:false};
        states.set(wrapper, state);
      }
      if (state.recovered) { recover(wrapper); return; }
      if (now - state.since < TIMEOUT || now - state.changed < QUIET) return;
      var style = getComputedStyle(wrapper), rect = wrapper.getBoundingClientRect();
      if (style.position !== 'fixed' || style.display === 'none' ||
          style.visibility !== 'visible' || wrapper.hasAttribute('inert') ||
          rect.left > 1 || rect.top > 1 || rect.right < innerWidth - 1 ||
          rect.bottom < innerHeight - 1) return;
      // Late hydration may have started the normal animation: let it finish.
      if (wrapper.getAnimations({subtree:true}).some(function(animation) {
        return animation.pending || animation.playState === 'running';
      })) { state.changed = now; return; }
      var blocking = [[0.1,0.1], [0.5,0.5], [0.9,0.9]].some(function(point) {
        var hit = document.elementFromPoint(innerWidth * point[0], innerHeight * point[1]);
        return hit && wrapper.contains(hit);
      });
      if (!blocking) return;
      state.recovered = true;
      recover(wrapper);
    });
  }

  function resume() {
    // A restored, unrecovered wrapper gets a fresh grace period. Recovered
    // instances stay recovered; replacement nodes have independent deadlines.
    var host = document.querySelector(HOST), now = performance.now();
    if (host) Array.prototype.forEach.call(host.children, function(wrapper) {
      var state = states.get(wrapper);
      if (state && !state.recovered) state.since = state.changed = now;
    });
    check();
    if (timer === null) timer = setInterval(check, 500);
  }
  window.addEventListener('pagehide', function() {
    clearInterval(timer); timer = null;
    if (observer) observer.disconnect();
    watchedHost = null;
  });
  window.addEventListener('pageshow', resume);
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) resume();
  });
  resume();
})();
