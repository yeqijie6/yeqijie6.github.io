/**
 * 语言切换按钮
 * 读取 <link rel="alternate" hreflang> （由 scripts/i18n.js 注入）跳转到对应语言页面。
 */
(function () {
  function start() {
    var current = document.documentElement.getAttribute('lang');
    var links = Array.prototype.slice.call(document.querySelectorAll('link[rel="alternate"][hreflang]'));
    var target = links.filter(function (l) { return l.getAttribute('hreflang') !== current; })[0];
    if (!target) return;

    var container = document.createElement('div');
    container.id = 'language-switcher';
    container.className = 'language-switcher';

    var a = document.createElement('a');
    a.className = 'lang-switcher-btn';
    a.href = target.getAttribute('href');
    a.setAttribute('hreflang', target.getAttribute('hreflang'));
    a.setAttribute('aria-label', 'Switch language');
    a.innerHTML = '<span class="lang-text">' + (target.getAttribute('title') || target.getAttribute('hreflang')) + '</span>';

    container.appendChild(a);

    var menusEl = document.getElementById('menus');
    var toggleMenu = document.getElementById('toggle-menu');
    if (menusEl && toggleMenu) {
      menusEl.insertBefore(container, toggleMenu);
    } else if (menusEl) {
      menusEl.appendChild(container);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
