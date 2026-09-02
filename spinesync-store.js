/* SpineSync shared cross-surface store.
   One localStorage record read/written by the public site, patient portal and staff portal,
   so a booking made on one surface is visible on the others (spec §2 cross-surface linking). */
(function () {
  var KEY = 'spinesync_v1';
  var EMPTY = {
    bookings: [],     // { ref, patient, email, phone, dob, serviceId, serviceLabel, pracId, pracLabel, date, time, tz, status, deposit, createdAt, source, guardian }
    invoices: [],     // { id, patient, service, amount, paid, date, status, stripeRef }
    waitlist: [],     // { id, patient, email, phone, serviceId, serviceLabel, pracLabel, dayparts, joinedAt, expiresAt, status }
    enquiries: [],    // { id, name, email, subject, message, consent, createdAt, status }
    tasks: [],        // { id, ref, patient, type, label, due, status }
    session: null,    // { id, name, email, role, surface }
    audit: [],        // { id, at, actor, action, target }
  };

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(EMPTY));
      var d = JSON.parse(raw);
      for (var k in EMPTY) if (!(k in d)) d[k] = JSON.parse(JSON.stringify(EMPTY[k]));
      return d;
    } catch (e) { return JSON.parse(JSON.stringify(EMPTY)); }
  }
  function write(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
    try { window.dispatchEvent(new CustomEvent('spinesync:change', { detail: d })); } catch (e) {}
    return d;
  }
  function uid(p) { return (p || 'id') + '-' + Date.now().toString(36) + Math.floor(Math.random() * 1e3); }

  var Store = {
    KEY: KEY,
    data: read,
    reset: function () { return write(JSON.parse(JSON.stringify(EMPTY))); },

    nextRef: function () { return 'SS-' + Math.floor(10000 + Math.random() * 89999); },

    bookings: function () { return read().bookings; },
    addBooking: function (b) {
      var d = read();
      var rec = Object.assign({ ref: Store.nextRef(), status: 'Confirmed', createdAt: new Date().toISOString(), source: 'public' }, b);
      d.bookings.unshift(rec);
      d.audit.unshift({ id: uid('a'), at: rec.createdAt, actor: rec.patient || 'Patient', action: 'Appointment booked', target: rec.ref });
      write(d);
      return rec;
    },
    updateBooking: function (ref, patch) {
      var d = read();
      d.bookings = d.bookings.map(function (b) { return b.ref === ref ? Object.assign({}, b, patch) : b; });
      d.audit.unshift({ id: uid('a'), at: new Date().toISOString(), actor: 'System', action: 'Appointment updated', target: ref });
      write(d);
      return d.bookings;
    },

    waitlist: function () { return read().waitlist; },
    addWaitlist: function (w) {
      var d = read();
      var rec = Object.assign({ id: uid('wl'), joinedAt: new Date().toISOString(), status: 'Waiting' }, w);
      d.waitlist.unshift(rec); write(d); return rec;
    },
    removeWaitlist: function (id) {
      var d = read(); d.waitlist = d.waitlist.filter(function (w) { return w.id !== id; }); write(d);
    },

    invoices: function () { return read().invoices; },
    addInvoice: function (inv) {
      var d = read();
      var rec = Object.assign({ id: 'INV-' + Math.floor(2000 + Math.random() * 900), status: 'Sent' }, inv);
      d.invoices.unshift(rec); write(d); return rec;
    },
    updateInvoice: function (id, patch) {
      var d = read();
      var found = false;
      d.invoices = d.invoices.map(function (i) { if (i.id === id) { found = true; return Object.assign({}, i, patch); } return i; });
      if (!found) d.invoices.unshift(Object.assign({ id: id }, patch));
      d.audit.unshift({ id: uid('a'), at: new Date().toISOString(), actor: 'Patient', action: 'Invoice ' + String(patch.status || 'updated').toLowerCase(), target: id });
      write(d); return d.invoices;
    },

    enquiries: function () { return read().enquiries; },
    updateEnquiry: function (id, patch) {
      var d = read();
      d.enquiries = d.enquiries.map(function (e) { return e.id === id ? Object.assign({}, e, patch) : e; });
      write(d);
      return d.enquiries;
    },
    addEnquiry: function (e) {
      var d = read();
      var rec = Object.assign({ id: uid('enq'), createdAt: new Date().toISOString(), status: 'New' }, e);
      d.enquiries.unshift(rec); write(d); return rec;
    },

    tasks: function () { return read().tasks; },
    addTask: function (t) {
      var d = read();
      var rec = Object.assign({ id: uid('task'), status: 'Outstanding' }, t);
      d.tasks.unshift(rec); write(d); return rec;
    },
    completeTask: function (id) {
      var d = read();
      d.tasks = d.tasks.map(function (t) { return t.id === id ? Object.assign({}, t, { status: 'Completed' }) : t; });
      write(d); return d.tasks;
    },

    session: function () { return read().session; },
    setSession: function (u) { var d = read(); d.session = u; write(d); return u; },
    clearSession: function () { var d = read(); d.session = null; write(d); },

    audit: function () { return read().audit; },
    log: function (actor, action, target) {
      var d = read();
      d.audit.unshift({ id: uid('a'), at: new Date().toISOString(), actor: actor, action: action, target: target || '' });
      write(d);
    },

    /* fires fn(data) on same-tab mutations and on changes from other surfaces/tabs */
    subscribe: function (fn) {
      var h1 = function (e) { fn(e.detail || read()); };
      var h2 = function (e) { if (!e.key || e.key === KEY) fn(read()); };
      window.addEventListener('spinesync:change', h1);
      window.addEventListener('storage', h2);
      return function () { window.removeEventListener('spinesync:change', h1); window.removeEventListener('storage', h2); };
    },
  };

  window.SpineSyncStore = Store;
})();
