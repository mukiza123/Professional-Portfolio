/* ==========================================================================
   Theme toggle

   The initial theme is applied by a small inline script in each page head so
   the correct ground colour is painted on the first frame. This file only
   owns the button and the system-preference listener.
   ========================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');

  var currentTheme = function () {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  };

  var applyTheme = function (theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      /* Label comes from the translation layer when it is loaded, so the
         button does not revert to English on click. */
      var key = theme === 'dark' ? 'theme.toLight' : 'theme.toDark';
      var fallback = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
      var label = typeof window.i18nText === 'function' ? window.i18nText(key) : null;
      toggle.setAttribute('aria-label', label || fallback);
    }
    if (persist) {
      try {
        localStorage.setItem('theme', theme);
      } catch (error) {
        /* Private mode blocks writes. The theme still applies for this page. */
      }
    }
  };

  applyTheme(currentTheme(), false);

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
    });
  }

  /* Relabel when the language changes, since the name is language-dependent. */
  document.addEventListener('languagechange', function () {
    applyTheme(currentTheme(), false);
  });

  /* Follow the OS only while the visitor has not made a choice of their own. */
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  if (typeof systemDark.addEventListener === 'function') {
    systemDark.addEventListener('change', function (event) {
      var stored = null;
      try {
        stored = localStorage.getItem('theme');
      } catch (error) {
        stored = null;
      }
      if (!stored) applyTheme(event.matches ? 'dark' : 'light', false);
    });
  }
})();
