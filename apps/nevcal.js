/* ============================================================
   NEVCAL — iCal Snow Leopard Booking App — NevOS Module
   ============================================================ */
(function () {
  'use strict';

  // Register window config
  NevOS.registerWindow('nevcal', {
    title: 'nevCal',
    type: 'nevcal',
    width: 540,
    height: 520,
    icon: 'assets/icons/ical.png'
  });

  // ---- Helpers ----
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  function dateStr(y, m, d) { return y + '-' + pad2(m + 1) + '-' + pad2(d); }

  function calAPI(method, url, body, onSuccess, onError) {
    // Offline demo copy — no booking backend is connected
    setTimeout(function () { onError('Booking is disabled in this demo copy'); }, 300);
  }

  function formatSlotTime(slotStart, dateString) {
    // Parse as AEST (UTC+10)
    var aestDate = new Date(dateString + 'T' + slotStart + ':00+10:00');
    // Format in user's local timezone
    var localStr = aestDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    var aestStr = slotStart.replace(/^0/, '');
    return { local: localStr, aest: aestStr + ' AEST' };
  }

  function formatDateNice(dateString) {
    var d = new Date(dateString + 'T12:00:00+10:00');
    return DAY_NAMES[d.getDay()] + ', ' + MONTH_SHORT[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  // ---- View management ----
  function showView(views, name) {
    for (var key in views) {
      if (views[key]) {
        views[key].classList.toggle('ical-view--active', key === name);
      }
    }
  }

  function makeLoading(text) {
    var el = document.createElement('div');
    el.className = 'ical-loading';
    el.innerHTML = '<div class="ical-spinner"></div> ' + (text || 'Loading...');
    return el;
  }

  function makeError(msg, onRetry) {
    if (typeof playSFX === 'function') playSFX('funk');
    var el = document.createElement('div');
    el.className = 'ical-error';
    var msgEl = document.createElement('div');
    msgEl.className = 'ical-error__msg';
    msgEl.textContent = msg;
    el.appendChild(msgEl);
    if (onRetry) {
      var btn = document.createElement('button');
      btn.className = 'ical-error__retry';
      btn.textContent = 'Try Again';
      btn.addEventListener('click', onRetry);
      el.appendChild(btn);
    }
    return el;
  }

  // ---- App registration ----
  NevOS.registerApp('nevcal', {
    build: function () {
      var frag = document.createDocumentFragment();

      // ---- State ----
      var calPasscode = (window._nevcalPasscode || '').trim();
      var calBookingTypes = [];
      var calSchedule = {};
      var calTimezone = 'Australia/Brisbane';
      var calMinNotice = 24;
      var calMaxAdvance = 30;
      var calSelectedType = null;
      var calCurrentMonth = new Date();
      var calSelectedDate = null;
      var calSlots = [];

      // ---- Leather header ----
      var header = document.createElement('div');
      header.className = 'ical-header';

      var headerLeft = document.createElement('div');
      var headerTitle = document.createElement('div');
      headerTitle.className = 'ical-header__title';
      headerTitle.textContent = 'nevCal';
      var headerSub = document.createElement('div');
      headerSub.className = 'ical-header__subtitle';
      headerSub.textContent = 'Book a time';
      headerLeft.appendChild(headerTitle);
      headerLeft.appendChild(headerSub);
      header.appendChild(headerLeft);

      var navWrap = document.createElement('div');
      navWrap.className = 'ical-nav';
      navWrap.style.display = 'none';
      var btnPrev = document.createElement('button');
      btnPrev.className = 'ical-nav-btn';
      btnPrev.innerHTML = '&#9664;';
      btnPrev.addEventListener('click', function () {
        calCurrentMonth.setMonth(calCurrentMonth.getMonth() - 1);
        renderMonth();
      });
      var btnNext = document.createElement('button');
      btnNext.className = 'ical-nav-btn';
      btnNext.innerHTML = '&#9654;';
      btnNext.addEventListener('click', function () {
        calCurrentMonth.setMonth(calCurrentMonth.getMonth() + 1);
        renderMonth();
      });
      navWrap.appendChild(btnPrev);
      navWrap.appendChild(btnNext);
      header.appendChild(navWrap);

      frag.appendChild(header);

      // ---- Views container ----
      var viewsEl = document.createElement('div');
      viewsEl.className = 'ical-views';

      // Create view containers
      var views = {};
      var viewNames = ['passcode', 'types', 'calendar', 'slots', 'form', 'confirm', 'loading', 'error'];
      viewNames.forEach(function (name) {
        var v = document.createElement('div');
        v.className = 'ical-view';
        v.dataset.view = name;
        views[name] = v;
        viewsEl.appendChild(v);
      });

      frag.appendChild(viewsEl);

      // ============================================================
      //  PASSCODE VIEW
      // ============================================================
      (function buildPasscodeView() {
        var wrap = document.createElement('div');
        wrap.className = 'ical-passcode';

        var icon = document.createElement('img');
        icon.className = 'ical-passcode__icon';
        icon.src = 'assets/icons/ical.png';
        icon.alt = 'nevCal';
        wrap.appendChild(icon);

        var title = document.createElement('div');
        title.className = 'ical-passcode__title';
        title.textContent = 'Enter your booking code';
        wrap.appendChild(title);

        var desc = document.createElement('div');
        desc.className = 'ical-passcode__desc';
        desc.textContent = 'You need a code to book a time. If you don\'t have one, ask Nev.';
        wrap.appendChild(desc);

        var inputWrap = document.createElement('div');
        inputWrap.className = 'ical-passcode__input-wrap';
        var input = document.createElement('input');
        input.className = 'ical-passcode__input';
        input.type = 'text';
        input.placeholder = 'BOOKING CODE';
        input.autocomplete = 'off';
        input.spellcheck = false;
        inputWrap.appendChild(input);

        var btn = document.createElement('button');
        btn.className = 'ical-passcode__btn';
        btn.textContent = 'Enter';
        inputWrap.appendChild(btn);
        wrap.appendChild(inputWrap);

        var errorEl = document.createElement('div');
        errorEl.className = 'ical-passcode__error';
        wrap.appendChild(errorEl);

        function submit() {
          var code = input.value.trim();
          if (!code) { errorEl.textContent = 'Please enter a code'; return; }
          calPasscode = code;
          validatePasscode();
        }

        btn.addEventListener('click', submit);
        input.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') submit();
        });

        views.passcode.appendChild(wrap);
      })();

      // ============================================================
      //  TYPE SELECTION VIEW
      // ============================================================
      function buildTypesView() {
        views.types.innerHTML = '';
        var wrap = document.createElement('div');
        wrap.className = 'ical-types';

        var title = document.createElement('div');
        title.className = 'ical-types__title';
        title.textContent = 'Choose a booking type';
        wrap.appendChild(title);

        calBookingTypes.forEach(function (bt) {
          var card = document.createElement('div');
          card.className = 'ical-type-card';

          var dot = document.createElement('div');
          dot.className = 'ical-type-card__dot';
          dot.style.background = bt.color || '#3580d4';
          card.appendChild(dot);

          var info = document.createElement('div');
          info.className = 'ical-type-card__info';
          var name = document.createElement('div');
          name.className = 'ical-type-card__name';
          name.textContent = bt.name;
          info.appendChild(name);
          var meta = document.createElement('div');
          meta.className = 'ical-type-card__meta';
          meta.textContent = bt.duration + ' min' + (bt.description ? ' \u2014 ' + bt.description : '');
          info.appendChild(meta);
          card.appendChild(info);

          card.addEventListener('click', function () {
            calSelectedType = bt;
            headerSub.textContent = bt.name + ' \u2014 ' + bt.duration + ' min';
            navWrap.style.display = 'flex';
            calCurrentMonth = new Date();
            showView(views, 'calendar');
            renderMonth();
          });

          wrap.appendChild(card);
        });

        views.types.appendChild(wrap);
      }

      // ============================================================
      //  CALENDAR MONTH VIEW
      // ============================================================
      function renderMonth() {
        views.calendar.innerHTML = '';

        var year = calCurrentMonth.getFullYear();
        var month = calCurrentMonth.getMonth();

        // Update header
        headerTitle.textContent = MONTHS[month] + ' ' + year;

        // Clamp navigation
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        var maxMonth = new Date(today.getFullYear(), today.getMonth() + Math.ceil(calMaxAdvance / 30), 1);
        btnPrev.disabled = year <= minMonth.getFullYear() && month <= minMonth.getMonth();
        btnNext.disabled = year >= maxMonth.getFullYear() && month >= maxMonth.getMonth();
        btnPrev.style.opacity = btnPrev.disabled ? '0.3' : '1';
        btnNext.style.opacity = btnNext.disabled ? '0.3' : '1';

        var wrap = document.createElement('div');
        wrap.className = 'ical-calendar';

        // Back button
        var back = document.createElement('button');
        back.className = 'ical-back';
        back.innerHTML = '&#9664; Back';
        back.addEventListener('click', function () {
          navWrap.style.display = 'none';
          headerTitle.textContent = 'nevCal';
          headerSub.textContent = 'Book a time';
          if (calBookingTypes.length > 1) {
            showView(views, 'types');
          } else {
            showView(views, 'passcode');
          }
        });
        wrap.appendChild(back);

        var grid = document.createElement('div');
        grid.className = 'ical-grid';

        // Day headers
        DAY_NAMES.forEach(function (d) {
          var hdr = document.createElement('div');
          hdr.className = 'ical-day-header';
          hdr.textContent = d;
          grid.appendChild(hdr);
        });

        var firstDay = new Date(year, month, 1).getDay();
        var daysInMonth = new Date(year, month + 1, 0).getDate();

        // Max bookable date
        var maxDate = new Date(today);
        maxDate.setDate(maxDate.getDate() + calMaxAdvance);

        // Empty cells
        for (var i = 0; i < firstDay; i++) {
          var empty = document.createElement('div');
          empty.className = 'ical-day ical-day--empty';
          grid.appendChild(empty);
        }

        // Day cells
        for (var d = 1; d <= daysInMonth; d++) {
          var cell = document.createElement('div');
          cell.className = 'ical-day';

          var numSpan = document.createElement('span');
          numSpan.textContent = d;
          cell.appendChild(numSpan);

          var cellDate = new Date(year, month, d);
          var ds = dateStr(year, month, d);
          var dayKey = DAY_KEYS[cellDate.getDay()];

          var isToday = cellDate.getTime() === today.getTime();
          var isPast = cellDate < today;
          var isBeyond = cellDate > maxDate;
          var isScheduled = calSchedule[dayKey];

          if (isToday) cell.classList.add('ical-day--today');

          if (isPast || isBeyond || !isScheduled) {
            cell.classList.add(isPast ? 'ical-day--past' : 'ical-day--unavailable');
          } else {
            cell.classList.add('ical-day--available');
            cell.dataset.date = ds;

            var dot = document.createElement('div');
            dot.className = 'ical-day__dot';
            cell.appendChild(dot);

            cell.addEventListener('click', (function (cellEl, dateVal) {
              return function () {
                // Remove previous selection
                var prev = grid.querySelector('.ical-day--selected');
                if (prev) prev.classList.remove('ical-day--selected');
                cellEl.classList.add('ical-day--selected');
                calSelectedDate = dateVal;
                loadSlots(dateVal);
              };
            })(cell, ds));
          }

          grid.appendChild(cell);
        }

        wrap.appendChild(grid);
        views.calendar.appendChild(wrap);
      }

      // ============================================================
      //  TIME SLOTS VIEW
      // ============================================================
      function loadSlots(dateVal) {
        views.slots.innerHTML = '';
        showView(views, 'loading');
        views.loading.innerHTML = '';
        views.loading.appendChild(makeLoading('Loading available times...'));

        var url = '/api/calendar/availability?type=' + encodeURIComponent(calSelectedType.id) +
          '&date=' + encodeURIComponent(dateVal) +
          '&passcode=' + encodeURIComponent(calPasscode);

        calAPI('GET', url, null, function (data) {
          calSlots = data.slots || [];
          renderSlots(dateVal);
        }, function (err) {
          views.loading.innerHTML = '';
          views.loading.appendChild(makeError(err, function () { loadSlots(dateVal); }));
        });
      }

      function renderSlots(dateVal) {
        views.slots.innerHTML = '';

        var wrap = document.createElement('div');
        wrap.className = 'ical-slots-wrap';

        var back = document.createElement('button');
        back.className = 'ical-back';
        back.innerHTML = '&#9664; ' + formatDateNice(dateVal);
        back.addEventListener('click', function () {
          showView(views, 'calendar');
        });
        wrap.appendChild(back);

        if (calSlots.length === 0) {
          var noSlots = document.createElement('div');
          noSlots.style.cssText = 'text-align:center;color:#888;font-size:13px;padding:40px 0;';
          noSlots.textContent = 'No available times on this date. Try another day.';
          wrap.appendChild(noSlots);
          views.slots.appendChild(wrap);
          showView(views, 'slots');
          return;
        }

        var dateTitle = document.createElement('div');
        dateTitle.className = 'ical-slots-date';
        dateTitle.textContent = calSlots.length + ' available time' + (calSlots.length !== 1 ? 's' : '');
        wrap.appendChild(dateTitle);

        calSlots.forEach(function (s) {
          var slotEl = document.createElement('div');
          slotEl.className = 'ical-slot';

          var times = formatSlotTime(s.start, dateVal);
          var timeEl = document.createElement('span');
          timeEl.className = 'ical-slot__time';
          timeEl.textContent = times.local;
          slotEl.appendChild(timeEl);

          var tzEl = document.createElement('span');
          tzEl.className = 'ical-slot__tz';
          tzEl.textContent = times.aest;
          slotEl.appendChild(tzEl);

          slotEl.addEventListener('click', function () {
            showBookingForm(dateVal, s);
          });

          wrap.appendChild(slotEl);
        });

        views.slots.appendChild(wrap);
        showView(views, 'slots');
      }

      // ============================================================
      //  BOOKING FORM VIEW
      // ============================================================
      function showBookingForm(dateVal, slot) {
        views.form.innerHTML = '';

        var wrap = document.createElement('div');
        wrap.className = 'ical-form';

        var back = document.createElement('button');
        back.className = 'ical-back';
        back.innerHTML = '&#9664; Change time';
        back.addEventListener('click', function () {
          renderSlots(dateVal);
        });
        wrap.appendChild(back);

        // Summary
        var summary = document.createElement('div');
        summary.className = 'ical-form__summary';
        var times = formatSlotTime(slot.start, dateVal);
        summary.innerHTML = '<strong>' + calSelectedType.name + '</strong> \u2014 ' +
          calSelectedType.duration + ' min<br>' +
          formatDateNice(dateVal) + ' at ' + times.local +
          ' <span style="color:#888">(' + times.aest + ')</span>';
        wrap.appendChild(summary);

        // Name
        var nameGroup = document.createElement('div');
        nameGroup.className = 'ical-form__group';
        var nameLabel = document.createElement('label');
        nameLabel.className = 'ical-form__label';
        nameLabel.textContent = 'Your name *';
        nameGroup.appendChild(nameLabel);
        var nameInput = document.createElement('input');
        nameInput.className = 'ical-form__input';
        nameInput.type = 'text';
        nameInput.placeholder = 'Jane Smith';
        nameInput.autocomplete = 'name';
        nameGroup.appendChild(nameInput);
        wrap.appendChild(nameGroup);

        // Email
        var emailGroup = document.createElement('div');
        emailGroup.className = 'ical-form__group';
        var emailLabel = document.createElement('label');
        emailLabel.className = 'ical-form__label';
        emailLabel.textContent = 'Email *';
        emailGroup.appendChild(emailLabel);
        var emailInput = document.createElement('input');
        emailInput.className = 'ical-form__input';
        emailInput.type = 'email';
        emailInput.placeholder = 'jane@example.com';
        emailInput.autocomplete = 'email';
        emailGroup.appendChild(emailInput);
        wrap.appendChild(emailGroup);

        // Notes
        var notesGroup = document.createElement('div');
        notesGroup.className = 'ical-form__group';
        var notesLabel = document.createElement('label');
        notesLabel.className = 'ical-form__label';
        notesLabel.textContent = 'What\'s this about? (optional)';
        notesGroup.appendChild(notesLabel);
        var notesInput = document.createElement('textarea');
        notesInput.className = 'ical-form__textarea';
        notesInput.placeholder = 'Quick intro, project discussion, etc.';
        notesGroup.appendChild(notesInput);
        wrap.appendChild(notesGroup);

        // Error message area
        var formError = document.createElement('div');
        formError.className = 'ical-passcode__error';
        wrap.appendChild(formError);

        // Actions
        var actions = document.createElement('div');
        actions.className = 'ical-form__actions';

        var cancelBtn = document.createElement('button');
        cancelBtn.className = 'ical-form__cancel';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', function () {
          renderSlots(dateVal);
        });
        actions.appendChild(cancelBtn);

        var submitBtn = document.createElement('button');
        submitBtn.className = 'ical-form__submit';
        submitBtn.textContent = 'Book';
        submitBtn.addEventListener('click', function () {
          var nameVal = nameInput.value.trim();
          var emailVal = emailInput.value.trim();
          var notesVal = notesInput.value.trim();

          // Validate
          nameInput.classList.remove('ical-form__input--error');
          emailInput.classList.remove('ical-form__input--error');
          formError.textContent = '';

          if (!nameVal) {
            nameInput.classList.add('ical-form__input--error');
            formError.textContent = 'Please enter your name';
            nameInput.focus();
            return;
          }
          if (!emailVal || emailVal.indexOf('@') === -1) {
            emailInput.classList.add('ical-form__input--error');
            formError.textContent = 'Please enter a valid email';
            emailInput.focus();
            return;
          }

          // Submit
          submitBtn.disabled = true;
          submitBtn.textContent = 'Booking...';

          calAPI('POST', '/api/calendar/book', {
            passcode: calPasscode,
            bookingType: calSelectedType.id,
            date: dateVal,
            slot: slot.start,
            name: nameVal,
            email: emailVal,
            notes: notesVal
          }, function (data) {
            if (data.success) {
              showConfirmation(data.booking);
            } else {
              formError.textContent = data.error || 'Booking failed';
              if (typeof playSFX === 'function') playSFX('funk');
              submitBtn.disabled = false;
              submitBtn.textContent = 'Book';
            }
          }, function (err) {
            formError.textContent = err;
            if (typeof playSFX === 'function') playSFX('funk');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Book';
          });
        });
        actions.appendChild(submitBtn);
        wrap.appendChild(actions);

        views.form.appendChild(wrap);
        showView(views, 'form');
        nameInput.focus();
      }

      // ============================================================
      //  CONFIRMATION VIEW
      // ============================================================
      function showConfirmation(booking) {
        views.confirm.innerHTML = '';
        navWrap.style.display = 'none';
        headerTitle.textContent = 'nevCal';
        headerSub.textContent = 'Booked!';

        var wrap = document.createElement('div');
        wrap.className = 'ical-confirm';

        var check = document.createElement('div');
        check.className = 'ical-confirm__check';
        check.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M5 13l4 4L19 7"/></svg>';
        wrap.appendChild(check);

        var title = document.createElement('div');
        title.className = 'ical-confirm__title';
        title.textContent = 'You\'re booked!';
        wrap.appendChild(title);

        var detail1 = document.createElement('div');
        detail1.className = 'ical-confirm__detail';
        detail1.innerHTML = '<strong>' + (booking.type || '') + '</strong>';
        wrap.appendChild(detail1);

        var detail2 = document.createElement('div');
        detail2.className = 'ical-confirm__detail';
        detail2.textContent = booking.time + ' (' + booking.timezone + ')';
        wrap.appendChild(detail2);

        if (booking.date) {
          var detail3 = document.createElement('div');
          detail3.className = 'ical-confirm__detail';
          detail3.textContent = formatDateNice(booking.date);
          wrap.appendChild(detail3);
        }

        var emailNote = document.createElement('div');
        emailNote.className = 'ical-confirm__email';
        emailNote.textContent = 'A calendar invite will be sent to ' + (booking.email || 'your email');
        wrap.appendChild(emailNote);

        var closeBtn = document.createElement('button');
        closeBtn.className = 'ical-confirm__close';
        closeBtn.textContent = 'Done';
        closeBtn.addEventListener('click', function () {
          NevOS.api.closeWindow('nevcal');
        });
        wrap.appendChild(closeBtn);

        views.confirm.appendChild(wrap);
        showView(views, 'confirm');
      }

      // ============================================================
      //  PASSCODE VALIDATION (shared logic)
      // ============================================================
      function validatePasscode() {
        showView(views, 'loading');
        views.loading.innerHTML = '';
        views.loading.appendChild(makeLoading('Validating...'));

        calAPI('POST', '/api/calendar/passcode', { passcode: calPasscode }, function (data) {
          if (!data.valid) {
            // If came from deep link, show passcode view with error
            var errView = views.passcode.querySelector('.ical-passcode__error');
            if (errView) errView.textContent = data.error || 'Invalid code';
            if (typeof playSFX === 'function') playSFX('funk');
            var inp = views.passcode.querySelector('.ical-passcode__input');
            if (inp) inp.value = calPasscode;
            calPasscode = '';
            showView(views, 'passcode');
            return;
          }

          calBookingTypes = data.bookingTypes || [];
          calSchedule = data.schedule || {};
          calTimezone = data.timezone || 'Australia/Brisbane';
          calMinNotice = data.minNoticeHours || 24;
          calMaxAdvance = data.maxAdvanceDays || 30;

          if (calBookingTypes.length === 1) {
            // Auto-select if only one type
            calSelectedType = calBookingTypes[0];
            headerSub.textContent = calSelectedType.name + ' \u2014 ' + calSelectedType.duration + ' min';
            navWrap.style.display = 'flex';
            calCurrentMonth = new Date();
            showView(views, 'calendar');
            renderMonth();
          } else {
            buildTypesView();
            showView(views, 'types');
          }
        }, function (err) {
          views.loading.innerHTML = '';
          views.loading.appendChild(makeError(err, function () {
            if (calPasscode) { validatePasscode(); }
            else { showView(views, 'passcode'); }
          }));
        });
      }

      // ============================================================
      //  INITIAL STATE
      // ============================================================
      if (calPasscode) {
        validatePasscode();
      } else {
        showView(views, 'passcode');
      }

      return frag;
    },

    destroy: function () {
      window._nevcalPasscode = null;
    }
  });
})();
