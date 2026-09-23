// Busuanzi offset - baseline reset on 2026-09-22 using current live values
(function () {
  var OFFSET_UV = 209;
  var OFFSET_PV = 329;

  function adjustCount(id, offset) {
    var el = document.getElementById(id);
    if (!el) return;
    var observer = new MutationObserver(function () {
      var val = parseInt(el.innerText, 10);
      if (!isNaN(val)) {
        observer.disconnect();
        el.innerText = Math.max(val - offset, 0);
      }
    });
    observer.observe(el, { childList: true, characterData: true, subtree: true });
  }

  adjustCount('busuanzi_value_site_uv', OFFSET_UV);
  adjustCount('busuanzi_value_site_pv', OFFSET_PV);
})();
