(function () {
  'use strict';
  // Both languages are real static pages, so navigation works without JavaScript.
  // Keep the selected section when switching language, including in the blog iframe.
  document.querySelectorAll('[data-language]').forEach(function (link) {
    var base = link.getAttribute('href');
    function updateSection() {
      link.setAttribute('href', base + window.location.hash);
    }
    updateSection();
    window.addEventListener('hashchange', updateSection);
  });
  var printButton = document.getElementById('print-resume');
  if (printButton) {
    printButton.addEventListener('click', function () { window.print(); });
  }
}());
