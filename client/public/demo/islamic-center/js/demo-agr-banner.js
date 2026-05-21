(function () {
  if (document.getElementById("agr-demo-banner")) return;

  var bar = document.createElement("div");
  bar.id = "agr-demo-banner";
  bar.setAttribute("role", "note");
  bar.innerHTML =
    '<span class="agr-demo-label">Demo</span>' +
    '<a href="https://agrmultimedia.eu/" rel="noopener" title="AGR MULTIMEDIA">AGR</a>';

  document.body.classList.add("has-agr-demo-banner");
  document.body.appendChild(bar);

  function syncOffset() {
    var h = bar.offsetHeight || 22;
    document.documentElement.style.setProperty("--agr-banner-h", h + "px");
  }

  syncOffset();
  window.addEventListener("resize", syncOffset);
})();
