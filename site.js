/* Footer year + live visitor count.
   Replace MYCODE with your GoatCounter code (same one used in the HTML). */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var GOATCOUNTER_CODE = 'MYCODE'; // <-- change this

  var el = document.getElementById('visitor-count');
  if (!el || GOATCOUNTER_CODE === 'MYCODE') return;

  fetch('https://' + GOATCOUNTER_CODE + '.goatcounter.com/counter/TOTAL.json')
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) { if (d && d.count) el.textContent = d.count; })
    .catch(function () {});
})();
