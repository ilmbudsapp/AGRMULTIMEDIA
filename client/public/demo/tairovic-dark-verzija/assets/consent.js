(function () {
  var KEY = "tairovic-cookie-consent";

  function getConsent() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(choice) {
    var record = { choice: choice, updatedAt: new Date().toISOString() };
    localStorage.setItem(KEY, JSON.stringify(record));
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = true;
    window.dispatchEvent(
      new CustomEvent("tairovic-consent-change", { detail: record })
    );
  }

  function init() {
    if (getConsent()) {
      var banner = document.getElementById("cookie-banner");
      if (banner) banner.hidden = true;
      return;
    }
    var banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = false;
    var essential = document.getElementById("cookie-essential");
    var all = document.getElementById("cookie-all");
    if (essential) essential.addEventListener("click", function () { setConsent("essential"); });
    if (all) all.addEventListener("click", function () { setConsent("all"); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
