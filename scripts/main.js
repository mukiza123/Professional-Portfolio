/* ==========================================================================
   Site behaviour

   Plain DOM, no framework and no animation library. Every block guards on
   the elements it needs so the same file can load on all five pages.
   ========================================================================== */

(function () {
  'use strict';

  /* --- Motion preference -------------------------------------------------
     Read once up front. The reveal code below needs to know before it hides
     anything, otherwise a reader who has asked for no motion gets a page of
     permanently invisible elements. */

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = motionQuery.matches;

  function syncMotionFlag(matches) {
    reduceMotion = matches;
    document.documentElement.classList.toggle('reduced-motion', matches);
  }

  syncMotionFlag(motionQuery.matches);

  if (typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', function (event) {
      syncMotionFlag(event.matches);
    });
  }

  /* --- Nav ---------------------------------------------------------------- */

  var nav = document.querySelector('.nav');

  if (nav) {
    var lastKnownScroll = -1;
    var scrollQueued = false;

    var applyNavState = function () {
      nav.classList.toggle('nav--scrolled', lastKnownScroll > 8);
      scrollQueued = false;
    };

    window.addEventListener('scroll', function () {
      lastKnownScroll = window.scrollY;
      if (scrollQueued) return;
      scrollQueued = true;
      window.requestAnimationFrame(applyNavState);
    }, { passive: true });

    lastKnownScroll = window.scrollY;
    applyNavState();
  }

  /* --- Mobile menu -------------------------------------------------------- */

  var burger = document.querySelector('.nav__burger');
  var navLinks = document.querySelector('.nav__links');

  if (burger && navLinks) {
    var setMenu = function (open) {
      navLinks.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    };

    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });

    document.addEventListener('click', function (event) {
      if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        setMenu(false);
      }
    });
  }

  /* --- Journey reveal -----------------------------------------------------
     Stops are 300 viewBox units apart, so scrolling brings them into range
     one at a time on its own. Each is unobserved once shown - the reveal is
     a one-way transition, not something to replay on the way back up. */

  var journeyMap = document.querySelector('.journey__map');
  var journeyStops = document.querySelectorAll('.journey__stop');

  if (journeyMap && journeyStops.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      journeyMap.classList.add('is-drawn');
      Array.prototype.forEach.call(journeyStops, function (stop) {
        stop.classList.add('is-visible');
      });
    } else {
      var roadObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-drawn');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.02 });

      roadObserver.observe(journeyMap);

      var stopObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.45, rootMargin: '0px 0px -60px 0px' });

      Array.prototype.forEach.call(journeyStops, function (stop) {
        stopObserver.observe(stop);
      });
    }
  }

  /* --- Generic reveal -----------------------------------------------------
     Opt-in via data-reveal so nothing is hidden unless the markup asks. */

  var revealTargets = document.querySelectorAll('[data-reveal]');

  if (revealTargets.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(revealTargets, function (element) {
        element.classList.add('is-revealed');
      });
    } else {
      Array.prototype.forEach.call(revealTargets, function (element, index) {
        element.classList.add('will-reveal');
        element.style.transitionDelay = Math.min(index % 6, 5) * 70 + 'ms';
      });

      var revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

      Array.prototype.forEach.call(revealTargets, function (element) {
        revealObserver.observe(element);
      });
    }
  }

  /* --- In-page anchors ---------------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      var id = anchor.getAttribute('href');
      if (!id || id === '#') return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
})();
