(function () {
  'use strict';

  const STORAGE_KEY = 'mosque_lang';
  const DEFAULT_LANG = 'bs';
  const LANGS = ['bs', 'sq', 'de', 'it'];

  function t(lang, key) {
    const pack = MosqueI18n[lang] || MosqueI18n[DEFAULT_LANG];
    const fallback = MosqueI18n[DEFAULT_LANG];
    return pack[key] ?? fallback[key] ?? '';
  }

  function applyLang(lang) {
    if (!MosqueI18n[lang]) lang = DEFAULT_LANG;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (!val) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const val = t(lang, key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', on);
      if (btn.classList.contains('btn')) {
        btn.classList.toggle('btn-outline-dark', !on);
        btn.classList.toggle('btn-primary', on);
      }
    });

    const titleKey = document.body.getAttribute('data-page-title-key');
    if (titleKey) {
      document.title = t(lang, titleKey) + ' | ' + t(lang, 'footerSiteName');
    }
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  window.MosqueApplyLang = applyLang;
  window.MosqueT = t;

  document.addEventListener('DOMContentLoaded', function () {
    initLangSwitcher();
    var saved = localStorage.getItem(STORAGE_KEY);
    applyLang(LANGS.includes(saved) ? saved : DEFAULT_LANG);

    var form = document.getElementById('contactForm');
    if (form) {
      form.querySelector('button[type="button"]')?.addEventListener('click', function () {
        var lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        alert(t(lang, 'contactAlert'));
      });
    }
  });
})();
