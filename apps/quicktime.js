/* ============================================================
   QUICKTIME 7 PLAYER — NevOS Module
   ============================================================ */
(function () {
  'use strict';

  var QT_PLAYLIST = [
    { title: 'decentralisation.mov', src: 'assets/images/decentralisation.mp4' },
  ];

  function fmtTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  NevOS.registerApp('quicktime', {
    build: function (config) {
      var frag = document.createDocumentFragment();

      // Video viewer area
      var viewer = document.createElement('div');
      viewer.className = 'qt7-viewer';

      var video = document.createElement('video');
      video.preload = 'auto';
      if (config.mediaSrc) {
        video.src = config.mediaSrc;
        video.autoplay = true;
        video.muted = true;
        video.addEventListener('playing', function () { video.muted = false; }, { once: true });
      }
      video.addEventListener('error', function () {
        viewer.innerHTML = '<div class="quicktime-placeholder">File not found<br><small>' + (config.mediaSrc || '') + '</small></div>';
      });

      // Route through audio normalisation compressor
      if (NevOS.api && NevOS.api.connectMediaToCompressor) {
        video.addEventListener('playing', function () {
          if (!video._nevConnected) {
            NevOS.api.connectMediaToCompressor(video);
            video._nevConnected = true;
          }
        }, { once: true });
      }
      viewer.appendChild(video);
      frag.appendChild(viewer);

      // Playlist drawer
      var playlistDrawer = document.createElement('div');
      playlistDrawer.className = 'qt7-playlist-drawer';
      QT_PLAYLIST.forEach(function (item, idx) {
        var row = document.createElement('div');
        row.className = 'qt7-playlist-item';
        if (config.mediaSrc === item.src) row.classList.add('qt7-playlist-item--active');
        row.textContent = item.title;
        row.addEventListener('click', function () {
          video.src = item.src;
          video.play();
          playlistDrawer.querySelectorAll('.qt7-playlist-item').forEach(function (r, i) {
            r.classList.toggle('qt7-playlist-item--active', i === idx);
          });
        });
        playlistDrawer.appendChild(row);
      });
      frag.appendChild(playlistDrawer);

      // Transport bar
      var transport = document.createElement('div');
      transport.className = 'qt7-transport';

      // ROW 1: LCD box with scrubber
      var lcdBox = document.createElement('div');
      lcdBox.className = 'itunes-header__display';
      var scrubRow = document.createElement('div');
      scrubRow.className = 'itunes-display__progress-row';

      var qtElapsed = document.createElement('span');
      qtElapsed.className = 'itunes-display__elapsed';
      qtElapsed.textContent = '0:00';
      scrubRow.appendChild(qtElapsed);

      var scrubTrack = document.createElement('div');
      scrubTrack.className = 'itunes-display__progress qt7-scrub-track';
      var scrubFill = document.createElement('div');
      scrubFill.className = 'itunes-display__progress-fill';
      scrubTrack.appendChild(scrubFill);
      var scrubHandle = document.createElement('div');
      scrubHandle.className = 'qt7-scrub-handle';
      scrubTrack.appendChild(scrubHandle);
      scrubRow.appendChild(scrubTrack);

      var qtRemaining = document.createElement('span');
      qtRemaining.className = 'itunes-display__remaining';
      qtRemaining.textContent = '0:00';
      scrubRow.appendChild(qtRemaining);

      lcdBox.appendChild(scrubRow);
      transport.appendChild(lcdBox);

      // ROW 2: Controls
      var ctrlRow = document.createElement('div');
      ctrlRow.className = 'qt7-ctrl-row';

      // Volume
      var volWrap = document.createElement('div');
      volWrap.className = 'qt7-vol';
      var volIcon = document.createElement('span');
      volIcon.className = 'qt7-vol-icon';
      volIcon.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="#555"><path d="M2 5h3l4-4v14l-4-4H2a1 1 0 01-1-1V6a1 1 0 011-1z"/></svg>';
      volWrap.appendChild(volIcon);
      var volSlider = document.createElement('input');
      volSlider.type = 'range'; volSlider.min = '0'; volSlider.max = '100'; volSlider.value = '40';
      volSlider.className = 'qt7-vol-slider';
      video.volume = 0.4;
      volSlider.addEventListener('input', function () { video.volume = volSlider.value / 100; });
      volWrap.appendChild(volSlider);
      ctrlRow.appendChild(volWrap);

      // Transport buttons
      var btns = document.createElement('div');
      btns.className = 'qt7-btns';

      var btnSkipBack = document.createElement('button');
      btnSkipBack.className = 'qt7-btn'; btnSkipBack.title = 'Skip Back';
      btnSkipBack.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="2" height="12"/><path d="M14 2L5 8l9 6z"/></svg>';
      btnSkipBack.addEventListener('click', function () { video.currentTime = 0; });

      var btnRew = document.createElement('button');
      btnRew.className = 'qt7-btn'; btnRew.title = 'Rewind';
      btnRew.innerHTML = '<svg width="12" height="10" viewBox="0 0 20 16" fill="currentColor"><path d="M10 1L1 8l9 7z"/><path d="M19 1l-9 7 9 7z"/></svg>';
      btnRew.addEventListener('click', function () { video.currentTime = Math.max(0, video.currentTime - 10); });

      var btnPlay = document.createElement('button');
      btnPlay.className = 'qt7-btn qt7-btn--play'; btnPlay.title = 'Play';
      var qtPlaySvg = '<svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M2 1l11 7-11 7z"/></svg>';
      var qtPauseSvg = '<svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor"><rect x="1" y="1" width="3" height="12"/><rect x="8" y="1" width="3" height="12"/></svg>';
      btnPlay.innerHTML = qtPlaySvg;
      btnPlay.addEventListener('click', function () {
        if (video.paused) { video.play(); } else { video.pause(); }
      });

      var btnFwd = document.createElement('button');
      btnFwd.className = 'qt7-btn'; btnFwd.title = 'Fast Forward';
      btnFwd.innerHTML = '<svg width="12" height="10" viewBox="0 0 20 16" fill="currentColor"><path d="M1 1l9 7-9 7z"/><path d="M10 1l9 7-9 7z"/></svg>';
      btnFwd.addEventListener('click', function () { video.currentTime = Math.min(video.duration || 0, video.currentTime + 10); });

      var btnSkipFwd = document.createElement('button');
      btnSkipFwd.className = 'qt7-btn'; btnSkipFwd.title = 'Next';
      btnSkipFwd.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2l9 6-9 6z"/><rect x="13" y="2" width="2" height="12"/></svg>';
      btnSkipFwd.addEventListener('click', function () {
        var currentIdx = -1;
        QT_PLAYLIST.forEach(function (item, idx) {
          if (video.src && video.src.indexOf(item.src) !== -1) currentIdx = idx;
        });
        var nextIdx = (currentIdx + 1) % QT_PLAYLIST.length;
        video.src = QT_PLAYLIST[nextIdx].src;
        video.play();
        playlistDrawer.querySelectorAll('.qt7-playlist-item').forEach(function (r, i) {
          r.classList.toggle('qt7-playlist-item--active', i === nextIdx);
        });
      });

      btns.appendChild(btnSkipBack);
      btns.appendChild(btnRew);
      btns.appendChild(btnPlay);
      btns.appendChild(btnFwd);
      btns.appendChild(btnSkipFwd);
      ctrlRow.appendChild(btns);

      // Playlist toggle
      var btnPlaylist = document.createElement('button');
      btnPlaylist.className = 'qt7-btn'; btnPlaylist.title = 'Playlist';
      btnPlaylist.innerHTML = '<svg width="10" height="8" viewBox="0 0 16 12" fill="currentColor"><rect y="0" width="16" height="2"/><rect y="5" width="16" height="2"/><rect y="10" width="16" height="2"/></svg>';
      btnPlaylist.addEventListener('click', function () {
        playlistDrawer.classList.toggle('qt7-playlist--open');
      });
      ctrlRow.appendChild(btnPlaylist);

      transport.appendChild(ctrlRow);
      frag.appendChild(transport);

      // Click to scrub
      scrubTrack.addEventListener('click', function (e) {
        if (!video.duration) return;
        var rect = scrubTrack.getBoundingClientRect();
        var pct = (e.clientX - rect.left) / rect.width;
        video.currentTime = pct * video.duration;
      });

      // Drag handle to scrub
      scrubHandle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var onMove = function (ev) {
          if (!video.duration) return;
          var rect = scrubTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
          video.currentTime = pct * video.duration;
        };
        var onUp = function () {
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });

      // Time updates
      video.addEventListener('timeupdate', function () {
        if (!video.duration) return;
        var pct = (video.currentTime / video.duration) * 100;
        scrubFill.style.width = pct + '%';
        scrubHandle.style.left = pct + '%';
        qtElapsed.textContent = fmtTime(video.currentTime);
        qtRemaining.textContent = '-' + fmtTime(video.duration - video.currentTime);
      });

      video.addEventListener('play', function () { btnPlay.innerHTML = qtPauseSvg; });
      video.addEventListener('pause', function () { btnPlay.innerHTML = qtPlaySvg; });
      video.addEventListener('ended', function () { btnPlay.innerHTML = qtPlaySvg; });

      return frag;
    },

    destroy: function (windowId) {
      var entry = NevOS.api.getOpenWindows().get(windowId);
      if (entry) {
        var video = entry.el.querySelector('video');
        if (video) { video.pause(); video.src = ''; }
      }
    }
  });
})();
