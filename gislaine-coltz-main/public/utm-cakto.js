/*
 * Repasse de UTMs para o checkout da Cakto (Cakto Analytics Pro).
 * 1) Guarda utm_*, src, sck e fbclid da URL de entrada (7 dias, por navegador).
 * 2) Acrescenta esses parâmetros em todo link ou window.open para *.cakto.com.br.
 * Não altera parâmetros que o link do checkout já tenha.
 */
(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'sck', 'fbclid'];
  var STORE = 'gc_utms';
  var TTL = 7 * 24 * 60 * 60 * 1000;

  function read() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (saved && Date.now() - saved.t < TTL) return saved.p;
    } catch (e) {}
    return null;
  }

  function save(p) {
    try { localStorage.setItem(STORE, JSON.stringify({ t: Date.now(), p: p })); } catch (e) {}
  }

  var query = new URLSearchParams(location.search);
  var current = {};
  var hasCurrent = false;
  KEYS.forEach(function (k) {
    var v = query.get(k);
    if (v) { current[k] = v; hasCurrent = true; }
  });
  if (hasCurrent) save(current);

  function params() { return hasCurrent ? current : (read() || {}); }

  function decorate(url) {
    try {
      var u = new URL(url, location.href);
      if (!/(^|\.)cakto\.com\.br$/.test(u.hostname)) return url;
      var p = params();
      Object.keys(p).forEach(function (k) {
        if (!u.searchParams.has(k)) u.searchParams.set(k, p[k]);
      });
      return u.toString();
    } catch (e) {
      return url;
    }
  }

  window.__gcDecorateCheckout = decorate;

  var nativeOpen = window.open;
  window.open = function (url) {
    if (typeof url === 'string' || url instanceof URL) arguments[0] = decorate(String(url));
    return nativeOpen.apply(window, arguments);
  };

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    var decorated = decorate(href);
    if (decorated !== href) a.setAttribute('href', decorated);
  }, true);
})();
