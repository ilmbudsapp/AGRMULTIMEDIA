(function () {
  if (document.getElementById("agr-demo-banner")) return;
  var bar = document.createElement("div");
  bar.id = "agr-demo-banner";
  bar.setAttribute("role", "note");
  bar.innerHTML =
    '<span>Demo web stranica — <strong>AGR MULTIMEDIA</strong></span>' +
    '<a href="https://agrmultimedia.eu/" rel="noopener">← agrmultimedia.eu</a>';
  bar.style.cssText =
    "position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px;padding:8px 16px;background:#0a0a0f;color:#e8e8ec;font:500 13px/1.4 system-ui,sans-serif;border-bottom:1px solid rgba(255,255,255,.12);";
  var link = bar.querySelector("a");
  if (link) {
    link.style.cssText =
      "color:#5eead4;text-decoration:none;font-weight:600;";
    link.onmouseover = function () {
      link.style.textDecoration = "underline";
    };
    link.onmouseout = function () {
      link.style.textDecoration = "none";
    };
  }
  document.body.appendChild(bar);
  document.body.style.paddingTop =
    (parseInt(getComputedStyle(document.body).paddingTop, 10) || 0) +
    bar.offsetHeight +
    "px";
})();
