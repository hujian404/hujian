(function () {
  'use strict';
  document.querySelectorAll('.language-switch').forEach(function (link) {
    var base = link.getAttribute('href');
    function update() { link.setAttribute('href', base + window.location.hash); }
    update();
    window.addEventListener('hashchange', update);
  });
}());
