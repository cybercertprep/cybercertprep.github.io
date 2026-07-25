/* ============================================================
   Small site helpers: current year + live visitor count.

   The visitor count reads GoatCounter's public JSON endpoint.
   Replace MYCODE with your GoatCounter code (same one used in
   index.html). Your full dashboard — who, how many, which pages,
   referrers, countries — is at https://MYCODE.goatcounter.com
   ============================================================ */

(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var GOATCOUNTER_CODE = 'MYCODE'; // <-- change this

  var el = document.getElementById('visitor-count');
  if (!el || GOATCOUNTER_CODE === 'MYCODE') return; // stays as "—" until configured

  var url = 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/counter/TOTAL.json';
  fetch(url)
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (data) {
      if (data && data.count) el.textContent = data.count;
    })
    .catch(function () { /* leave placeholder on failure */ });
})();
