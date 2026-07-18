/* ============================================================
   NEV OS — Desktop Window Manager (Round 3)
   ============================================================ */

(function () {
  'use strict';

  // ---- Window Registry ----
  var WINDOWS = {
    about: {
      title: 'About Me.txt \u2014 nevEdit',
      contentId: 'about-content',
      type: 'textedit',
      width: 560,
      height: 580,
      openOnLoad: true,
      offsetX: -80,
      offsetY: 30,
      icon: 'assets/icons/text-edit.png',
    },
    writing: {
      title: 'Writing',
      contentId: 'writing-content',
      type: 'finder',
      width: 580,
      height: 380,
      icon: 'assets/icons/folder.png',
    },
    projects: {
      title: 'Projects',
      type: 'finder',
      width: 640,
      height: 460,
      icon: 'assets/icons/folder.png',
    },
    'everyone-hates-crypto-what-now': {
      title: 'everyone hates crypto, what now?.txt \u2014 nevEdit',
      contentId: 'everyone-hates-crypto-what-now',
      type: 'article',
      width: 600,
      height: 500,
      icon: 'assets/icons/text-edit.png',
    },
    'beyond-the-10x-developer': {
      title: 'Beyond the 10x Developer.txt \u2014 nevEdit',
      contentId: 'beyond-the-10x-developer',
      type: 'article',
      width: 560,
      height: 400,
      icon: 'assets/icons/text-edit.png',
    },
    'what-happens-when-your-ai-agent-switches-models': {
      title: 'What Happens When Your AI Agent Switches Models.txt \u2014 nevEdit',
      contentId: 'what-happens-when-your-ai-agent-switches-models',
      type: 'article',
      width: 600,
      height: 400,
      icon: 'assets/icons/text-edit.png',
    },
    'why-bitcoin-isnt-crypto-anymore': {
      title: 'Why Bitcoin isn\u2019t crypto anymore.txt \u2014 nevEdit',
      contentId: 'why-bitcoin-isnt-crypto-anymore',
      type: 'article',
      width: 620,
      height: 520,
      icon: 'assets/icons/text-edit.png',
    },
    'how-your-space-can-improve-or-destroy-your-life': {
      title: 'How Your Space Can Improve (or Destroy) Your Life.txt \u2014 nevEdit',
      contentId: 'how-your-space-can-improve-or-destroy-your-life',
      type: 'article',
      width: 600,
      height: 520,
      icon: 'assets/icons/text-edit.png',
    },
    'the-dark-why': {
      title: 'The Dark Why.txt \u2014 nevEdit',
      contentId: 'the-dark-why',
      type: 'article',
      width: 600,
      height: 520,
      icon: 'assets/icons/text-edit.png',
    },
    'the-curse-of-the-country-song': {
      title: 'The Curse of the Country Song.txt \u2014 nevEdit',
      contentId: 'the-curse-of-the-country-song',
      type: 'article',
      width: 600,
      height: 520,
      icon: 'assets/icons/text-edit.png',
    },
    
    'not-your-average-marathon-video': {
      title: 'Not Your Average Marathon Video.txt \u2014 nevEdit',
      contentId: 'not-your-average-marathon-video',
      type: 'article',
      width: 600,
      height: 520,
      icon: 'assets/icons/text-edit.png',
    },

'itunes-mini': {
      title: 'nevTunes',
      type: 'itunes-mini',
      width: 300,
      height: 140,
      openOnLoad: true,
      offsetX: 340,
      offsetY: -80,
      icon: 'assets/icons/itunes.png',
    },
    itunes: {
      title: 'nevTunes',
      type: 'itunes',
      width: 700,
      height: 480,
      icon: 'assets/icons/itunes.png',
    },
    limewire: {
      title: 'LimeWire \u2014 Downloads',
      type: 'limewire',
      width: 500,
      height: 340,
      icon: 'assets/icons/limewire.png',
    },
    todo: {
      title: 'todo.txt \u2014 nevEdit',
      contentId: 'todo-content',
      type: 'textedit',
      width: 300,
      height: 200,
      icon: 'assets/icons/generic-document.png',
    },
    mail: {
      title: 'New Message',
      type: 'mail',
      width: 500,
      height: 380,
      icon: 'assets/icons/mail.png',
    },
    'project-stepone': {
      title: 'Step One',
      contentId: 'project-stepone-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-struthless': {
      title: 'Struthless Studios',
      contentId: 'project-struthless-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-crossover': {
      title: 'Crossover',
      contentId: 'project-crossover-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/crossover.png',
    },
    'project-lensloop': {
      title: 'Lensloop',
      contentId: 'project-lensloop-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-blocmates': {
      title: 'Blocmates',
      contentId: 'project-blocmates-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/blocmates.png',
    },
    'project-memelab': {
      title: 'MemeLab',
      contentId: 'project-memelab-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/memelab.png',
    },
    'project-slideliner': {
      title: 'Samsung Slideliner',
      contentId: 'project-slideliner-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-advertising': {
      title: 'Advertising Era',
      contentId: 'project-advertising-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-cityfalls': {
      title: 'City Falls',
      contentId: 'project-cityfalls-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-realmarketcap': {
      title: 'Real Market Cap',
      contentId: 'project-realmarketcap-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-slowinternet': {
      title: 'Slow Internet Space',
      contentId: 'project-slowinternet-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-gluefactory': {
      title: 'Glue Factory',
      contentId: 'project-gluefactory-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-birdz': {
      title: 'Birdz of Australia',
      contentId: 'project-birdz-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'project-biglez': {
      title: 'Big Lez Show',
      contentId: 'project-biglez-content',
      type: 'project',
      width: 420,
      height: 280,
      icon: 'assets/icons/generic-application.png',
    },
    'safari-memelab': {
      title: 'MemeLab \u2014 Nevari',
      type: 'safari',
      url: 'https://memelab.online',
      width: 820,
      height: 580,
      icon: 'assets/icons/memelab.png',
    },
    'safari-struthiverse': {
      title: 'Struthiverse \u2014 Nevari',
      type: 'safari',
      url: 'struthiverse',
      width: 820,
      height: 580,
      icon: 'assets/icons/safari.png',
    },
    'preview-screenshot': {
      title: 'Screenshot 2026-01-04.png \u2014 Preview',
      type: 'preview',
      width: 520,
      height: 400,
      icon: 'assets/icons/preview.png',
      mediaSrc: 'assets/images/nev-at-desk.jpg',
    },
    'preview-onchain': {
      title: 'onchain_world_draft.gif \u2014 Preview',
      type: 'preview',
      width: 520,
      height: 400,
      icon: 'assets/icons/preview.png',
      mediaSrc: 'assets/images/onchain-world-mspaint.gif',
    },
    'video-decentralisation': {
      title: 'decentralisation.mov \u2014 nevTime Player',
      type: 'quicktime',
      width: 540,
      height: 400,
      icon: 'assets/icons/quicktime.png',
      mediaSrc: 'assets/images/decentralisation.mp4',
    },
    msn: {
      title: 'Ven - Online',
      type: 'msn',
      width: 400,
      height: 520,
      icon: 'assets/icons/MSN_Messenger_2000_(Icon).webp',
    },
    safari: {
      title: 'Nevari',
      type: 'safari',
      width: 820,
      height: 580,
      icon: 'assets/icons/safari.png',
    },
    'safari-youtube': {
      title: 'YouTube \u2014 Nevari',
      type: 'safari',
      url: 'youtube',
      width: 820,
      height: 580,
      icon: 'assets/icons/safari.png',
    },
    'safari-x': {
      title: 'X \u2014 Nevari',
      type: 'safari',
      url: 'x',
      width: 820,
      height: 580,
      icon: 'assets/icons/safari.png',
    },
    'safari-realmarketcap': {
      title: 'Real Market Cap \u2014 Nevari',
      type: 'safari',
      url: 'https://realmarketcap.xyz',
      width: 820,
      height: 580,
      icon: 'assets/icons/charts-retro.svg',
    },
    'safari-slowinternet': {
      title: 'Slow Internet Space \u2014 Nevari',
      type: 'safari',
      url: 'https://slowinternet.space',
      width: 820,
      height: 580,
      icon: 'assets/icons/safari.png',
    },
  };

  // ---- Pinned dock items ----
  var DOCK_PINNED = [
    { id: 'finder', label: 'Nevder', icon: 'assets/icons/finder.png' },
    { id: 'safari', label: 'Nevari', icon: 'assets/icons/safari.png', opensWindow: 'safari' },
    { id: 'mail', label: 'nevMail', icon: 'assets/icons/mail.png', opensWindow: 'mail' },
    { id: 'msn', label: 'MSN', icon: 'assets/icons/MSN_Messenger_2000_(Icon).webp', opensWindow: 'msn' },
    { id: 'itunes', label: 'nevTunes', icon: 'assets/icons/itunes.png', opensWindow: 'itunes' },
    { id: 'imovie', label: 'nevMovie', icon: 'assets/icons/imovie.png' },
    { id: 'textedit', label: 'nevEdit', icon: 'assets/icons/text-edit.png', opensWindow: 'about' },
    { id: 'sysprefs', label: 'nevPrefs', icon: 'assets/icons/system-preferences.png' },
    { id: 'limewire', label: 'LimeWire', icon: 'assets/icons/limewire.png', opensWindow: 'limewire' },
  ];

  // ---- Merge NevOS module registrations ----
  if (typeof NevOS !== 'undefined') {
    var wk;
    for (wk in NevOS._windows) {
      if (NevOS._windows.hasOwnProperty(wk)) WINDOWS[wk] = NevOS._windows[wk];
    }
    for (var di = 0; di < NevOS._dockItems.length; di++) {
      DOCK_PINNED.push(NevOS._dockItems[di]);
    }
  }

  // ---- Nevari bookmarks ----
  var SAFARI_BOOKMARKS = [
    { label: 'YouTube', url: 'youtube', color: '#ff0000' },
    { label: 'X', url: 'x', color: '#000' },
    { label: 'Slow Internet', url: 'https://slowinternet.space', color: '#8b5cf6' },
    { label: 'Real Market Cap', url: 'https://realmarketcap.xyz', color: '#22c55e' },
    { label: 'Blocmates', url: 'https://www.blocmates.com', color: '#6366f1' },
    { label: 'Struthless Studios', url: 'https://www.struthlessstudios.com', color: '#ff6b00' },
    { label: 'MemeLab', url: 'https://memelab.online', color: '#f5c518' },
  ];

  var safariHistory = [];
  var safariHistoryIndex = -1;
  var safariPendingUrl = null;

  // ---- nevTunes tracks ----
  var ITUNES_TRACKS = [
    { num: 1, song: 'Sorry You\'re Not a Winner', artist: 'Enter Shikari', album: 'Take to the Skies', time: '3:56', genre: 'Post-Hardcore', rating: 5, plays: 156, src: '' },
    { num: 2, song: 'Carrion', artist: 'Parkway Drive', album: 'Killing with a Smile', time: '4:07', genre: 'Metalcore', rating: 5, plays: 89, src: '' },
    { num: 3, song: 'Anchors', artist: 'The Amity Affliction', album: 'Let the Ocean Take Me', time: '3:48', genre: 'Metalcore', rating: 4, plays: 67, src: '' },
    { num: 4, song: 'Doomsday', artist: 'Architects', album: 'Holy Hell', time: '4:41', genre: 'Metalcore', rating: 5, plays: 112, src: '' },
    { num: 5, song: 'The Sadness Will Never End', artist: 'Bring Me The Horizon', album: 'Sempiternal', time: '4:16', genre: 'Post-Hardcore', rating: 4, plays: 78, src: '' },
    { num: 6, song: 'You Had Me at Hello', artist: 'A Day to Remember', album: 'Homesick', time: '3:24', genre: 'Post-Hardcore', rating: 4, plays: 45, src: '' },
    { num: 7, song: 'I Miss You', artist: 'Blink-182', album: 'Blink-182', time: '3:48', genre: 'Pop Punk', rating: 5, plays: 203, src: '' },
    { num: 8, song: 'Numb', artist: 'Linkin Park', album: 'Meteora', time: '3:06', genre: 'Nu Metal', rating: 5, plays: 287, src: '' },
    { num: 9, song: 'Basket Case', artist: 'Green Day', album: 'Dookie', time: '3:01', genre: 'Punk Rock', rating: 4, plays: 134, src: '' },
    { num: 10, song: 'Innerbloom', artist: 'R\u00dcF\u00dcS DU SOL', album: 'Bloom', time: '9:30', genre: 'Electronic', rating: 5, plays: 94, src: '' },
    { num: 11, song: 'lawrence hargrave drive', artist: 'Adam Newling', album: 'lawrence hargrave drive', time: '4:02', genre: 'Indie', rating: 3, plays: 28, src: '' },
    { num: 12, song: 'Stay Free', artist: 'The Terrys', album: 'Stay Free', time: '3:15', genre: 'Indie Rock', rating: 4, plays: 51, src: '' },
    { num: 13, song: 'Dingo', artist: 'Ruby Fields', album: 'Been Doin\' It for a Bit', time: '3:33', genre: 'Indie Rock', rating: 4, plays: 62, src: '' },
    { num: 14, song: 'How to Fly', artist: 'Sticky Fingers', album: 'Land of Pleasure', time: '4:22', genre: 'Reggae Rock', rating: 5, plays: 175, src: '' },
    { num: 15, song: 'Into the Sun', artist: 'Sons of the East', album: 'Into the Sun', time: '4:17', genre: 'Folk Rock', rating: 4, plays: 43, src: '' },
    { num: 16, song: 'Send It Back', artist: 'Don West', album: 'Send It Back', time: '3:40', genre: 'Hip Hop', rating: 3, plays: 19, src: '' },
  ];

  // ---- Sound effects ----
  var sfxEl = document.createElement('audio');
  sfxEl.preload = 'none';
  sfxEl.volume = 0.15;
  sfxEl.setAttribute('playsinline', '');
  sfxEl.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
  document.body.appendChild(sfxEl);

  function playSFX(name) {
    sfxEl.src = 'assets/sounds/' + name + '.mp3';
    sfxEl.currentTime = 0;
    sfxEl.play().catch(function () {});
  }

  // ---- Master volume ----
  var masterVolume = 0.15;
  var volIconOn = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
  var volIconOff = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
  var ITUNES_MAX_VOL = 0.5; // -6dB cap on iTunes/SFX
  function setMasterVolume(v) {
    masterVolume = Math.max(0, Math.min(1, v));
    var itunesVol = masterVolume * ITUNES_MAX_VOL;
    sfxEl.volume = itunesVol;
    audioEl.volume = itunesVol;
    var btn = document.getElementById('volume-btn');
    if (btn) btn.innerHTML = masterVolume === 0 ? volIconOff : volIconOn;
  }

  // ---- Audio element ----
  var audioEl = document.createElement('audio');
  audioEl.preload = 'metadata';
  audioEl.setAttribute('playsinline', '');
  audioEl.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;';
  document.body.appendChild(audioEl);

  // ---- Audio normalisation (Web Audio API) ----
  var audioCtx = null;
  var compressor = null;
  var masterGain = null;

  function initAudioContext() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      compressor = audioCtx.createDynamicsCompressor();
      compressor.threshold.value = -24;
      compressor.knee.value = 12;
      compressor.ratio.value = 4;
      compressor.attack.value = 0.005;
      compressor.release.value = 0.15;
      masterGain = audioCtx.createGain();
      masterGain.gain.value = 1.0;
      compressor.connect(masterGain);
      masterGain.connect(audioCtx.destination);
      // Route iTunes audio through compressor
      var itunesSource = audioCtx.createMediaElementSource(audioEl);
      itunesSource.connect(compressor);
      // Route SFX through compressor
      var sfxSource = audioCtx.createMediaElementSource(sfxEl);
      sfxSource.connect(compressor);
    } catch (e) {}
  }

  function connectMediaToCompressor(mediaEl) {
    if (!audioCtx || !compressor) return null;
    try {
      var source = audioCtx.createMediaElementSource(mediaEl);
      source.connect(compressor);
      return source;
    } catch (e) { return null; }
  }

  // Init audio context on first user interaction
  document.addEventListener('click', function () { initAudioContext(); }, { once: true });

  // ---- Shared playback state ----
  var currentTrackIndex = 0;
  var isPlaying = false;
  var trackProgress = 0;
  var playbackTimer = null;

  // ---- State ----
  var maxZ = 10;
  var cascadeOffset = 0;
  var openWindows = new Map();
  var isMobile = window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches;

  // ---- DOM refs ----
  var desktop = document.getElementById('desktop');
  var container = document.getElementById('windows-container');
  var dockItems = document.getElementById('dock-items');
  var contextMenu = document.getElementById('context-menu');
  var aboutMacDialog = document.getElementById('about-mac');
  var bootScreen = document.getElementById('boot-screen');
  var semanticContent = document.getElementById('semantic-content');

  // ---- Helpers ----
  function parseTime(str) {
    var parts = str.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function getTotalPlaylistTime() {
    var total = 0;
    ITUNES_TRACKS.forEach(function (t) { total += parseTime(t.time); });
    return (total / 3600).toFixed(1);
  }

  // ---- Boot Sequence ----
  function boot() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (bootScreen) bootScreen.classList.add('boot--hidden');
      initDesktop();
      return;
    }

    setTimeout(function () {
      bootScreen.classList.add('boot--fade');
      setTimeout(function () {
        bootScreen.classList.add('boot--hidden');
        initDesktop();
      }, 600);
    }, 1550);
  }

  // ---- Video Thumbnail Generator ----
  function generateVideoThumbnails() {
    var videoWindows = ['video-decentralisation'];
    videoWindows.forEach(function (winId) {
      var config = WINDOWS[winId];
      if (!config || !config.mediaSrc) return;
      var btn = document.querySelector('[data-opens="' + winId + '"]');
      if (!btn) return;
      var imgContainer = btn.querySelector('.desktop-icon__img');
      if (!imgContainer) return;

      var video = document.createElement('video');
      video.preload = 'metadata';
      video.muted = true;
      video.crossOrigin = 'anonymous';
      video.src = config.mediaSrc;

      video.addEventListener('loadeddata', function () {
        video.currentTime = 1;
      });
      video.addEventListener('seeked', function () {
        var canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        var ctx = canvas.getContext('2d');
        var vw = video.videoWidth;
        var vh = video.videoHeight;
        var scale = Math.max(64 / vw, 64 / vh);
        var sw = vw * scale;
        var sh = vh * scale;
        ctx.drawImage(video, (64 - sw) / 2, (64 - sh) / 2, sw, sh);
        imgContainer.innerHTML =
          '<div class="video-thumb" style="width:64px;height:64px;position:relative;border-radius:4px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.3);">' +
          '<img src="' + canvas.toDataURL() + '" width="64" height="64" style="display:block;">' +
          '<div class="video-thumb__play" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px;background:rgba(0,0,0,0.6);border-radius:50%;display:flex;align-items:center;justify-content:center;">' +
          '<svg width="10" height="12" viewBox="0 0 10 12" fill="white"><path d="M1 0l9 6-9 6z"/></svg>' +
          '</div></div>';
        video.remove();
      });
    });
  }

  // ---- Desktop Init ----
  function initDesktop() {
    positionDesktopIcons();
    restoreWallpaper();
    generateVideoThumbnails();
    
    // Play startup sound
    setTimeout(function() {
      playSFX('startup');
    }, 300);

    Object.keys(WINDOWS).forEach(function (id) {
      if (WINDOWS[id].openOnLoad) {
        // Skip about window on mobile — let users tap it themselves
        if (isMobile && id === 'about') return;
        openWindow(id);
      }
    });

    updateDock();
    updateClock();
    setInterval(updateClock, 60000);

    // Master volume control
    var volBtn = document.getElementById('volume-btn');
    var volPopup = document.getElementById('volume-popup');
    var volSliderMaster = document.getElementById('master-vol-slider');
    if (volBtn && volPopup && volSliderMaster) {
      volBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        volPopup.classList.toggle('is-open');
      });
      volSliderMaster.addEventListener('input', function (e) {
        e.stopPropagation();
        setMasterVolume(volSliderMaster.value / 100);
      });
      volSliderMaster.addEventListener('click', function (e) { e.stopPropagation(); });
      document.addEventListener('click', function () { volPopup.classList.remove('is-open'); });
      volPopup.addEventListener('click', function (e) { e.stopPropagation(); });
    }

    if (!isMobile) {
      setupIconDrag();
      setupDockMagnification();
    }

    // Deep linking: open a window from URL hash (e.g. #crypto-article or #article-crypto)
    handleDeepLink();
    window.addEventListener('hashchange', handleDeepLink);
  }

  function handleDeepLink() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;

    // nevCal deep link with optional passcode
    if (hash === 'nevcal' || hash.indexOf('nevcal-') === 0) {
      window._nevcalPasscode = hash.indexOf('nevcal-') === 0 ? hash.substring(7) : '';
      openWindow('nevcal');
      return;
    }

    // Direct window ID match
    if (WINDOWS[hash]) { openWindow(hash); return; }
    // Match by contentId (for Schema.org URLs like #crypto-article)
    var match = Object.keys(WINDOWS).find(function (id) {
      return WINDOWS[id].contentId === hash;
    });
    if (match) openWindow(match);
  }

  // ---- Desktop Icon Positioning ----
  function positionDesktopIcons() {
    if (isMobile) {
      // On mobile, only position easter-egg icons (they float freely)
      var easterEggs = document.querySelectorAll('.desktop-icon--easter-egg[data-pos]');
      easterEggs.forEach(function (icon) {
        var pos = icon.dataset.posMobile || icon.dataset.pos;
        if (!pos) return;
        var parts = pos.split(',');
        icon.style.left = parts[0].trim() + 'vw';
        icon.style.top = parts[1].trim() + 'vh';
      });
      return;
    }

    var saved = getSavedIconPositions();
    var icons = document.querySelectorAll('.desktop-icon[data-pos]');
    icons.forEach(function (icon) {
      var label = icon.querySelector('.desktop-icon__label');
      var key = label ? label.textContent.trim() : '';

      if (saved && saved[key]) {
        icon.style.left = saved[key].left;
        icon.style.top = saved[key].top;
      } else {
        var pos = icon.dataset.pos;
        if (!pos) return;
        var parts = pos.split(',');
        icon.style.left = parts[0].trim() + 'vw';
        icon.style.top = parts[1].trim() + 'vh';
      }
    });
  }

  // ---- Icon Position Persistence ----
  function getSavedIconPositions() {
    try {
      var data = localStorage.getItem('nev-icon-positions');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function saveIconPositions() {
    var positions = {};
    var icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(function (icon) {
      var label = icon.querySelector('.desktop-icon__label');
      var key = label ? label.textContent.trim() : '';
      if (key && icon.style.left && icon.style.top) {
        positions[key] = { left: icon.style.left, top: icon.style.top };
      }
    });
    localStorage.setItem('nev-icon-positions', JSON.stringify(positions));
  }

  function resetIconPositions() {
    localStorage.removeItem('nev-icon-positions');
    var icons = document.querySelectorAll('.desktop-icon[data-pos]');
    icons.forEach(function (icon) {
      var pos = icon.dataset.pos;
      if (!pos) return;
      var parts = pos.split(',');
      icon.style.left = parts[0].trim() + 'vw';
      icon.style.top = parts[1].trim() + 'vh';
    });
  }

  // ---- Dock Parabolic Magnification ----
  // JS-driven cosine curve: resizes icon elements, uses margins to push aside.
  // Only the icon grows — indicator dots and tooltips stay at normal size.
  function setupDockMagnification() {
    var dockEl = document.querySelector('.dock__items');
    if (!dockEl || isMobile) return;

    var MAX_SCALE = 1.6;
    var BASE_ICON_SIZE = 48;
    var EFFECT_DISTANCE = 120;
    var rafId = null;
    var lastMouseX = 0;

    function applyMagnification() {
      var items = dockEl.querySelectorAll('.dock-item');
      items.forEach(function (item) {
        if (item.classList.contains('dock-separator')) return;
        var rect = item.getBoundingClientRect();
        var itemCenterX = rect.left + rect.width / 2;
        var distance = Math.abs(lastMouseX - itemCenterX);

        if (distance < EFFECT_DISTANCE) {
          var scale = 1 + (MAX_SCALE - 1) * Math.cos((distance / EFFECT_DISTANCE) * (Math.PI / 2));
          var extraMargin = ((scale - 1) * BASE_ICON_SIZE) / 2;
          item.style.transform = 'scale(' + scale.toFixed(3) + ')';
          item.style.marginLeft = extraMargin.toFixed(1) + 'px';
          item.style.marginRight = extraMargin.toFixed(1) + 'px';
        } else {
          item.style.transform = '';
          item.style.marginLeft = '';
          item.style.marginRight = '';
        }
      });
      rafId = null;
    }

    dockEl.addEventListener('mousemove', function (e) {
      lastMouseX = e.clientX;
      dockEl.classList.add('dock__items--magnifying');
      if (!rafId) rafId = requestAnimationFrame(applyMagnification);
    });

    dockEl.addEventListener('mouseleave', function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      dockEl.classList.remove('dock__items--magnifying');
      var items = dockEl.querySelectorAll('.dock-item');
      items.forEach(function (item) {
        item.style.transform = '';
        item.style.marginLeft = '';
        item.style.marginRight = '';
      });
    });
  }

  // ---- Draggable Desktop Icons ----
  // Unified pointer event system: click-to-select, double-click-to-open, drag-to-move
  function setupIconDrag() {
    var icons = document.querySelectorAll('.desktop-icon');
    icons.forEach(function (icon) {
      var startX, startY, startLeft, startTop;
      var dragging = false;
      var hasMoved = false;

      icon.addEventListener('pointerdown', function (e) {
        if (e.button !== 0) return;
        startX = e.clientX;
        startY = e.clientY;
        startLeft = icon.offsetLeft;
        startTop = icon.offsetTop;
        dragging = true;
        hasMoved = false;
        icon.setPointerCapture(e.pointerId);
        e.preventDefault();

        // Highlight immediately on press — like real Mac
        if (selectedIcon) selectedIcon.classList.remove('selected');
        icon.classList.add('selected');
        selectedIcon = icon;
      });

      icon.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;

        if (!hasMoved && Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
        hasMoved = true;
        icon.classList.add('desktop-icon--dragging');

        var newLeft = startLeft + dx;
        var newTop = startTop + dy;

        newLeft = Math.max(0, Math.min(newLeft, desktop.offsetWidth - icon.offsetWidth));
        newTop = Math.max(0, Math.min(newTop, desktop.offsetHeight - icon.offsetHeight));

        icon.style.left = newLeft + 'px';
        icon.style.top = newTop + 'px';
      });

      icon.addEventListener('pointerup', function () {
        if (!dragging) return;
        dragging = false;
        icon.classList.remove('desktop-icon--dragging');

        if (hasMoved) {
          // Was a drag — save positions
          saveIconPositions();
        } else {
          // Was a click — handle select + double-click
          handleIconClick(icon);
        }
      });
    });
  }

  // ---- Window Management ----
  function openSafariTo(url) {
    if (openWindows.has('safari')) {
      var entry = openWindows.get('safari');
      if (entry.minimized) restoreWindow('safari');
      else focusWindow('safari');
      navigateSafari(url);
    } else {
      safariPendingUrl = url;
      openWindow('safari');
    }
  }

  function navigateSafari(url) {
    safariHistory = safariHistory.slice(0, safariHistoryIndex + 1);
    safariHistory.push(url);
    safariHistoryIndex = safariHistory.length - 1;
    loadSafariContent(url);
    updateSafariUrlBar(url);
    updateSafariBookmarks(url);
    updateSafariNavButtons();
  }

  function safariDisplayUrl(url) {
    if (url === 'youtube') return 'https://youtube.com/@nevaaron';
    if (url === 'x') return 'https://x.com/nevaaron';
    if (url === 'struthiverse') return 'https://tiktok.com/@struthiverse';
    return url;
  }

  function loadSafariContent(url) {
    var container = document.querySelector('.safari-content');
    if (!container) return;
    container.innerHTML = '';
    if (url === 'youtube') {
      container.appendChild(buildYouTubeEmbed());
    } else if (url === 'x') {
      container.appendChild(buildSiteCard('nev', '@nevaaron', 'building things on the internet', 'https://x.com/nevaaron', 'Visit @nevaaron on X', '#000'));
    } else if (url === 'https://www.blocmates.com') {
      container.appendChild(buildSiteCard('B', 'Blocmates', 'Crypto News, Research & Media', 'https://www.blocmates.com', 'Visit blocmates.com', '#6366f1'));
    } else if (url === 'struthiverse') {
      container.appendChild(buildSiteCard('S', 'Struthiverse', '24M views in 6 weeks. TikTok series.', 'https://www.tiktok.com/@struthiverse', 'Visit @struthiverse on TikTok', '#ff0050'));
    } else {
      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups');
      container.appendChild(iframe);
    }
    // Progress bar animation
    var progress = document.querySelector('.safari-url-bar__progress');
    if (progress) {
      progress.style.width = '60%';
      setTimeout(function () { progress.style.width = '100%'; }, 400);
      setTimeout(function () { progress.style.width = '0%'; }, 800);
    }
  }

  function updateSafariUrlBar(url) {
    var text = document.querySelector('.safari-url-bar__text');
    if (text) text.textContent = safariDisplayUrl(url);
  }

  function updateSafariBookmarks(url) {
    var bookmarks = document.querySelectorAll('.safari-bookmark');
    bookmarks.forEach(function (bm) {
      bm.classList.toggle('safari-bookmark--active', bm.dataset.url === url);
    });
  }

  function updateSafariNavButtons() {
    var backBtn = document.querySelector('.safari-back-btn');
    var fwdBtn = document.querySelector('.safari-fwd-btn');
    if (backBtn) backBtn.disabled = (safariHistoryIndex <= 0);
    if (fwdBtn) fwdBtn.disabled = (safariHistoryIndex >= safariHistory.length - 1);
  }

  function safariBack() {
    if (safariHistoryIndex > 0) {
      safariHistoryIndex--;
      var url = safariHistory[safariHistoryIndex];
      loadSafariContent(url);
      updateSafariUrlBar(url);
      updateSafariBookmarks(url);
      updateSafariNavButtons();
    }
  }

  function safariForward() {
    if (safariHistoryIndex < safariHistory.length - 1) {
      safariHistoryIndex++;
      var url = safariHistory[safariHistoryIndex];
      loadSafariContent(url);
      updateSafariUrlBar(url);
      updateSafariBookmarks(url);
      updateSafariNavButtons();
    }
  }

  function openWindow(id) {
    // Safari-type redirect: all safari configs share one window
    var cfg = WINDOWS[id];
    if (cfg && cfg.type === 'safari' && id !== 'safari') {
      openSafariTo(cfg.url || SAFARI_BOOKMARKS[0].url);
      return;
    }

    if (openWindows.has(id)) {
      var entry = openWindows.get(id);
      if (entry.minimized) {
        restoreWindow(id);
      } else {
        focusWindow(id);
      }
      return;
    }

    var config = WINDOWS[id];
    if (!config) return;

    var win = document.createElement('div');
    win.className = 'window window--' + config.type;
    win.dataset.windowId = id;

    if (!isMobile) {
      var offsetX = config.offsetX || 0;
      var offsetY = config.offsetY || 0;
      var centerX = (desktop.offsetWidth - config.width) / 2 + cascadeOffset * 20 + offsetX;
      var centerY = (desktop.offsetHeight - config.height) / 2 + cascadeOffset * 20 + offsetY;
      centerX = Math.max(20, Math.min(centerX, desktop.offsetWidth - config.width - 20));
      centerY = Math.max(20, Math.min(centerY, desktop.offsetHeight - config.height - 20));

      win.style.left = centerX + 'px';
      win.style.top = centerY + 'px';
      win.style.width = config.width + 'px';
      win.style.height = config.height + 'px';
      cascadeOffset = (cascadeOffset + 1) % 8;
    }

    // Title bar
    var titlebar = document.createElement('div');
    titlebar.className = 'window__titlebar';

    var buttons = document.createElement('div');
    buttons.className = 'window__titlebar-buttons';

    var btnClose = createTrafficLight('close', function () { closeWindow(id); });
    var btnMin = createTrafficLight('minimize', function () { minimizeWindow(id); });
    var btnMax = createTrafficLight('maximize', function () {
      if (config.type === 'itunes-mini') return;
      maximizeWindow(id);
    });

    buttons.appendChild(btnClose);
    buttons.appendChild(btnMin);
    buttons.appendChild(btnMax);

    var title = document.createElement('span');
    title.className = 'window__title';
    title.textContent = config.title;

    titlebar.appendChild(buttons);
    titlebar.appendChild(title);
    win.appendChild(titlebar);

    // TextEdit toolbar
    if (config.type === 'textedit' || config.type === 'article') {
      var teToolbar = document.createElement('div');
      teToolbar.className = 'textedit-toolbar';
      teToolbar.innerHTML = '<span>Lucida Grande</span> <span>|</span> <span>13</span> <span>|</span> <span>Plain Text</span>';
      win.appendChild(teToolbar);
    }

    // Body
    var body = document.createElement('div');
    body.className = 'window__body';

    // Build content based on type — check module registry first
    var _appDef = NevOS._registry[config.type];
    if (_appDef && _appDef.build) {
      body.appendChild(_appDef.build(config, id));
    } else if (config.type === 'finder' && id === 'writing') {
      body.appendChild(buildWritingFinder());
    } else if (config.type === 'finder' && id === 'projects') {
      body.appendChild(buildProjectsFinder());
    } else if (config.type === 'itunes-mini') {
      body.appendChild(buildMiniPlayerContent());
    } else if (config.type === 'itunes') {
      body.appendChild(buildITunesContent());
    } else if (config.type === 'mail') {
      body.appendChild(buildMailContent());
    } else if (config.type === 'msn') {
      body.appendChild(buildMSNContent(id));
    } else if (config.type === 'safari') {
      body.appendChild(buildSafariContent(config));
    } else if (config.contentId) {
      var contentEl = document.getElementById(config.contentId);
      if (contentEl) body.appendChild(contentEl);
    }

    win.appendChild(body);

    // Resize handle (desktop only)
    if (!isMobile) {
      var resize = document.createElement('div');
      resize.className = 'window__resize';
      win.appendChild(resize);
      setupResize(win, resize);
    }

    container.appendChild(win);

    openWindows.set(id, { el: win, minimized: false, contentId: config.contentId || null });
    focusWindow(id);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        win.classList.add('window--visible');
      });
    });

    // Bounce the matching dock icon
    var matchingPinned = null;
    DOCK_PINNED.forEach(function (p) {
      if (p.opensWindow === id) matchingPinned = p;
    });
    if (matchingPinned) {
      var bounceTarget = dockItems.querySelector('[aria-label="' + matchingPinned.label + '"]');
      if (bounceTarget) {
        bounceTarget.classList.add('dock-item--bouncing');
        bounceTarget.addEventListener('animationend', function () {
          bounceTarget.classList.remove('dock-item--bouncing');
        }, { once: true });
      }
    }

    if (!isMobile) {
      setupDrag(win, titlebar);
      titlebar.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('traffic-light')) return;
        maximizeWindow(id);
      });
    }

    win.addEventListener('pointerdown', function () {
      focusWindow(id);
    });

    // Mini player: double-click body to open full iTunes
    if (config.type === 'itunes-mini') {
      body.addEventListener('dblclick', function () {
        openWindow('itunes');
      });
    }

    updateDock();
  }

  function closeWindow(id) {
    var entry = openWindows.get(id);
    if (!entry) return;

    var win = entry.el;
    win.classList.remove('window--visible');
    win.classList.add('window--closing');

    if (entry.contentId) {
      var contentEl = document.getElementById(entry.contentId);
      if (contentEl && semanticContent) {
        semanticContent.appendChild(contentEl);
      }
    }

    setTimeout(function () {
      if (win.parentNode) win.parentNode.removeChild(win);
    }, 200);

    // Reset MSN conversation on close
    if (id === 'msn') {
      msnConversation = [];
      msnSending = false;
    }

    // Call destroy hook for modular apps
    var _closedCfg = WINDOWS[id];
    if (_closedCfg) {
      var _closedApp = NevOS._registry[_closedCfg.type];
      if (_closedApp && _closedApp.destroy) _closedApp.destroy(id);
    }

    openWindows.delete(id);
    updateDock();
  }

  function minimizeWindow(id) {
    var entry = openWindows.get(id);
    if (!entry) return;

    entry.el.classList.add('window--minimizing');
    setTimeout(function () {
      entry.el.style.display = 'none';
      entry.el.classList.remove('window--minimizing');
      entry.minimized = true;
      updateDock();
    }, 300);
  }

  function restoreWindow(id) {
    var entry = openWindows.get(id);
    if (!entry) return;

    entry.el.style.display = '';
    entry.minimized = false;
    entry.el.classList.add('window--restoring');
    setTimeout(function () {
      entry.el.classList.remove('window--restoring');
    }, 250);
    focusWindow(id);
    updateDock();
  }

  function focusWindow(id) {
    var entry = openWindows.get(id);
    if (!entry) return;

    maxZ++;
    if (maxZ > 1000) {
      maxZ = 10;
      openWindows.forEach(function (e) {
        maxZ++;
        e.el.style.zIndex = maxZ;
      });
    }

    entry.el.style.zIndex = maxZ;

    openWindows.forEach(function (e) {
      e.el.classList.add('window--inactive');
    });
    entry.el.classList.remove('window--inactive');
  }

  function maximizeWindow(id) {
    var entry = openWindows.get(id);
    if (!entry || isMobile) return;

    var win = entry.el;
    if (win.dataset.maximized === '1') {
      win.style.left = win.dataset.prevLeft;
      win.style.top = win.dataset.prevTop;
      win.style.width = win.dataset.prevWidth;
      win.style.height = win.dataset.prevHeight;
      win.dataset.maximized = '0';
    } else {
      win.dataset.prevLeft = win.style.left;
      win.dataset.prevTop = win.style.top;
      win.dataset.prevWidth = win.style.width;
      win.dataset.prevHeight = win.style.height;
      win.style.left = '0px';
      win.style.top = '0px';
      win.style.width = desktop.offsetWidth + 'px';
      win.style.height = desktop.offsetHeight + 'px';
      win.dataset.maximized = '1';
    }
    focusWindow(id);
  }

  // ---- Traffic Light Button ----
  function createTrafficLight(type, onClick) {
    var btn = document.createElement('button');
    btn.className = 'traffic-light traffic-light--' + type;
    btn.setAttribute('aria-label', type.charAt(0).toUpperCase() + type.slice(1));
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      onClick();
    });
    return btn;
  }

  // ---- Window Drag ----
  function setupDrag(win, handle) {
    var startX, startY, startLeft, startTop;
    var dragging = false;

    handle.addEventListener('pointerdown', function (e) {
      if (e.target.classList.contains('traffic-light')) return;
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startLeft = parseInt(win.style.left) || 0;
      startTop = parseInt(win.style.top) || 0;
      handle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    handle.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      var newLeft = startLeft + dx;
      var newTop = startTop + dy;

      newLeft = Math.max(-win.offsetWidth + 100, Math.min(newLeft, desktop.offsetWidth - 100));
      newTop = Math.max(0, Math.min(newTop, desktop.offsetHeight - 30));

      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
    });

    handle.addEventListener('pointerup', function () {
      dragging = false;
    });
  }

  // ---- Window Resize ----
  function setupResize(win, handle) {
    var startX, startY, startW, startH;
    var resizing = false;

    handle.addEventListener('pointerdown', function (e) {
      resizing = true;
      startX = e.clientX;
      startY = e.clientY;
      startW = win.offsetWidth;
      startH = win.offsetHeight;
      handle.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    handle.addEventListener('pointermove', function (e) {
      if (!resizing) return;
      var newW = Math.max(240, startW + (e.clientX - startX));
      var newH = Math.max(120, startH + (e.clientY - startY));
      win.style.width = newW + 'px';
      win.style.height = newH + 'px';
    });

    handle.addEventListener('pointerup', function () {
      resizing = false;
    });
  }

  // ============================================================
  //  FINDER — Writing
  // ============================================================
  function buildWritingFinder() {
    var frag = document.createDocumentFragment();

    var toolbar = document.createElement('div');
    toolbar.className = 'finder-toolbar';
    toolbar.textContent = '';
    frag.appendChild(toolbar);

    var columns = document.createElement('div');
    columns.className = 'finder-columns';
    columns.innerHTML = '<span>Name</span><span>Date Modified</span><span>Size</span>';
    frag.appendChild(columns);

    var list = document.createElement('ul');
    list.className = 'finder-list';

    var articles = [
      { name: 'Not Your Average Marathon Video.txt', date: 'Feb 28, 2026', size: '8 KB', windowId: 'not-your-average-marathon-video', icon: 'assets/icons/generic-document.png' },
      { name: 'The Curse of the Country Song.txt', date: 'Feb 26, 2026', size: '7 KB', windowId: 'the-curse-of-the-country-song', icon: 'assets/icons/generic-document.png' },
      { name: 'The Dark Why.txt', date: 'Feb 25, 2026', size: '10 KB', windowId: 'the-dark-why', icon: 'assets/icons/generic-document.png' },
      { name: 'How Your Space Can Improve (or Destroy) Your Life.txt', date: 'Feb 25, 2026', size: '7 KB', windowId: 'how-your-space-can-improve-or-destroy-your-life', icon: 'assets/icons/generic-document.png' },
      { name: 'everyone hates crypto, what now?.txt', date: 'Jan 13, 2026', size: '4 KB', windowId: 'everyone-hates-crypto-what-now', icon: 'assets/icons/generic-document.png' },
      { name: 'Why Bitcoin isn\u2019t crypto anymore.txt', date: 'Feb 23, 2026', size: '6 KB', windowId: 'why-bitcoin-isnt-crypto-anymore', icon: 'assets/icons/generic-document.png' },
      { name: 'Beyond the 10x Developer.txt', date: 'Feb 2026', size: '--', windowId: 'beyond-the-10x-developer', icon: 'assets/icons/generic-document.png' },
      { name: 'What Happens When Your AI Agent Switches Models.txt', date: 'Feb 2026', size: '--', windowId: 'what-happens-when-your-ai-agent-switches-models', icon: 'assets/icons/generic-document.png' },
    ];

    toolbar.textContent = articles.length + ' items';

    articles.forEach(function (article) {
      var row = document.createElement('li');
      row.className = 'finder-row';
      row.innerHTML =
        '<span class="finder-row__name">' +
          '<img class="finder-row__icon" src="' + article.icon + '" alt="" width="16" height="16">' +
          article.name +
        '</span>' +
        '<span class="finder-row__date">' + article.date + '</span>' +
        '<span class="finder-row__size">' + article.size + '</span>';

      if (isMobile) {
        row.addEventListener('click', function () { openWindow(article.windowId); });
      } else {
        row.addEventListener('dblclick', function () { openWindow(article.windowId); });
      }

      list.appendChild(row);
    });

    frag.appendChild(list);
    return frag;
  }

  function buildProjectsFinder() {
    var frag = document.createDocumentFragment();

    var projects = [
      { name: 'Crossover', kind: 'AI + Crypto Studio', date: '2023\u2013present', opens: 'project-crossover', icon: 'assets/icons/crossover.png', desc: 'Experimental creative studio from the frontier. Me and a bunch of AIs.' },
      { name: 'Blocmates', kind: 'Creative Producer', date: '2025\u2013present', opens: 'project-blocmates', icon: 'assets/icons/blocmates.png', desc: 'Documentary-style tech explainers. Bleeding edge of tech.' },
      { name: 'Real Market Cap', kind: 'Crypto Tool', date: '2024\u2013present', opens: 'safari-realmarketcap', icon: 'assets/icons/generic-application.png', desc: 'Crypto market data without the noise. Built to cut through the bullshit and show what actually matters.' },
      { name: 'Slow Internet Space', kind: 'Web Experience', date: '2024', opens: 'safari-slowinternet', icon: 'assets/icons/generic-application.png', desc: 'A deliberate, slower internet. Built as a response to everything being optimised for speed and rage.' },
      { name: 'MemeLab', kind: 'Meme Tool / Crossover', date: '2024', opens: 'project-memelab', icon: 'assets/icons/memelab.png', desc: 'Design memes and mint them as NFTs. GIFs, layers, wordart. Very cool.' },
      { name: 'Struthless Studios', kind: 'YouTube / Animation', date: '2020\u20132023', opens: 'project-struthless', icon: 'assets/icons/generic-application.png', desc: 'Co-founded. 1M YouTube subs, 100M+ views, 4M+ hours watched. All pre-AI. Directed, wrote, and produced documentary-style content.' },
      { name: 'Struthiverse', kind: 'TikTok / Viral', date: '2022', opens: 'safari-struthiverse', icon: 'assets/icons/generic-application.png', desc: '24M views in 6 weeks. TikTok series.' },
      { name: 'Glue Factory', kind: 'NFT Animation', date: '2022', opens: 'project-gluefactory', icon: 'assets/icons/generic-application.png', desc: 'Animated series featuring Ted Danson, Patton Oswalt, and Bobby Lee. NFT-funded original IP from Struthless Studios.' },
      { name: 'Birdz of Australia', kind: 'Cartoon Series', date: '2021\u20132022', opens: 'project-birdz', icon: 'assets/icons/generic-application.png', desc: 'Animated series co-created with Brown Cardigan. Featured in Junkee, got Budgy Smuggler merch. IMDB listed.' },
      { name: 'Big Lez Show', kind: 'Adult Swim Pilot', date: '2022', opens: 'project-biglez', icon: 'assets/icons/generic-application.png', desc: 'Secret pilot for Adult Swim. One of those things almost nobody knows about.' },
      { name: 'Step One', kind: 'Fashion / E-Commerce', date: '2017\u20132020', opens: 'project-stepone', icon: 'assets/icons/generic-application.png', desc: 'Co-founded. Brand identity, creative strategy, go-to-market. Now ASX-listed.' },
      { name: 'Lensloop', kind: 'Production Company', date: '2018\u20132022', opens: 'project-lensloop', icon: 'assets/icons/generic-application.png', desc: 'Built from $8K. 30+ clients inc. Gatorade, Nintendo.' },
      { name: 'Samsung Slideliner', kind: 'Advertising Campaign', date: '2014', opens: 'project-slideliner', icon: 'assets/icons/generic-application.png', desc: 'Built at Clemenger BBDO. Second-screen experience for live sport.' },
      { name: 'Advertising Era', kind: 'Clemenger BBDO / Traffik / ITG / Nowscreen', date: '2013–2018', opens: 'project-advertising', icon: 'assets/icons/generic-application.png', desc: 'Worked on hundreds of projects across every brand you can think of. Samsung, Dyson, Airbnb, Visa, Mercedes, Lululemon, Gatorade, Arnott\'s, Glenfiddich, and way more. Collating it all here soon.' },
      { name: 'City Falls', kind: 'Metal Band', date: '2008–2014', opens: 'project-cityfalls', icon: 'assets/icons/generic-application.png', desc: 'Played guitar and managed a metal band as a teenager. Booking, tours, merch, security. Where it all started.' },
    ];

    var toolbar = document.createElement('div');
    toolbar.className = 'finder-toolbar';
    toolbar.textContent = projects.length + ' items';
    frag.appendChild(toolbar);

    var columns = document.createElement('div');
    columns.className = 'finder-columns finder-columns--projects';
    columns.innerHTML = '<span>Name</span><span>Kind</span><span>Date</span>';
    frag.appendChild(columns);

    var list = document.createElement('ul');
    list.className = 'finder-list';

    projects.forEach(function (p) {
      var row = document.createElement('li');
      row.className = 'finder-row finder-row--project';
      row.innerHTML =
        '<span class="finder-row__name">' +
          '<img class="finder-row__icon" src="' + p.icon + '" alt="" width="16" height="16">' +
          p.name +
        '</span>' +
        '<span class="finder-row__kind">' + p.kind + '</span>' +
        '<span class="finder-row__date">' + p.date + '</span>' +
        '<span class="finder-row__desc">' + p.desc + '</span>';

      if (isMobile) {
        row.addEventListener('click', function () { openWindow(p.opens); });
      } else {
        row.addEventListener('dblclick', function () { openWindow(p.opens); });
      }

      list.appendChild(row);
    });

    frag.appendChild(list);
    return frag;
  }

  // ============================================================
  //  ITUNES MINI PLAYER
  // ============================================================
  function buildMiniPlayerContent() {
    var frag = document.createDocumentFragment();
    var track = ITUNES_TRACKS[currentTrackIndex];

    // LCD display box — matches iTunes/QuickTime style
    var lcdBox = document.createElement('div');
    lcdBox.className = 'itunes-header__display mini-lcd';

    var titleEl = document.createElement('div');
    titleEl.className = 'mini-player__title';
    titleEl.textContent = track.song;
    lcdBox.appendChild(titleEl);

    var artistEl = document.createElement('div');
    artistEl.className = 'mini-player__artist';
    artistEl.textContent = track.artist;
    lcdBox.appendChild(artistEl);

    // Progress row inside LCD
    var progressRow = document.createElement('div');
    progressRow.className = 'itunes-display__progress-row';

    var elapsed = document.createElement('span');
    elapsed.className = 'itunes-display__elapsed mini-player__elapsed';
    elapsed.textContent = '0:00';
    progressRow.appendChild(elapsed);

    var progressTrack = document.createElement('div');
    progressTrack.className = 'itunes-display__progress';
    var progressFill = document.createElement('div');
    progressFill.className = 'itunes-display__progress-fill mini-player__progress-fill';
    progressTrack.appendChild(progressFill);
    progressRow.appendChild(progressTrack);

    var remaining = document.createElement('span');
    remaining.className = 'itunes-display__remaining mini-player__remaining';
    remaining.textContent = '-' + track.time;
    progressRow.appendChild(remaining);

    lcdBox.appendChild(progressRow);
    frag.appendChild(lcdBox);

    // Controls: ⏮ ▶ ⏭
    var controls = document.createElement('div');
    controls.className = 'mini-player__controls';

    var btnPrev = document.createElement('button');
    btnPrev.className = 'mini-ctrl';
    btnPrev.innerHTML = '<svg width="8" height="8" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="2" width="2" height="12"/><path d="M14 2L5 8l9 6z"/></svg>';
    btnPrev.addEventListener('click', function (e) { e.stopPropagation(); prevTrack(); });

    var btnPlay = document.createElement('button');
    btnPlay.className = 'mini-ctrl mini-ctrl--play';
    btnPlay.innerHTML = isPlaying
      ? '<svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor"><rect x="1" y="1" width="3" height="12"/><rect x="8" y="1" width="3" height="12"/></svg>'
      : '<svg width="10" height="12" viewBox="0 0 14 16" fill="currentColor"><path d="M2 1l11 7-11 7z"/></svg>';
    btnPlay.addEventListener('click', function (e) { e.stopPropagation(); togglePlay(); });

    var btnNext = document.createElement('button');
    btnNext.className = 'mini-ctrl';
    btnNext.innerHTML = '<svg width="8" height="8" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2l9 6-9 6z"/><rect x="13" y="2" width="2" height="12"/></svg>';
    btnNext.addEventListener('click', function (e) { e.stopPropagation(); nextTrack(); });

    // Volume inline with buttons
    var volWrap = document.createElement('div');
    volWrap.className = 'mini-player__vol';
    var volLow = document.createElement('span');
    volLow.className = 'itunes-vol-icon';
    volLow.innerHTML = '<svg width="8" height="8" viewBox="0 0 16 16" fill="#555"><path d="M2 5h3l4-4v14l-4-4H2a1 1 0 01-1-1V6a1 1 0 011-1z"/></svg>';
    var volSlider = document.createElement('input');
    volSlider.type = 'range'; volSlider.min = '0'; volSlider.max = '100';
    volSlider.value = Math.round(audioEl.volume * 100);
    volSlider.className = 'mini-vol-slider';
    volSlider.addEventListener('click', function (e) { e.stopPropagation(); });
    volSlider.addEventListener('input', function (e) { e.stopPropagation(); setMasterVolume(volSlider.value / 100); var ms = document.getElementById('master-vol-slider'); if (ms) ms.value = volSlider.value; });
    var volHigh = document.createElement('span');
    volHigh.className = 'itunes-vol-icon';
    volHigh.innerHTML = '<svg width="10" height="8" viewBox="0 0 20 16" fill="#555"><path d="M2 5h3l4-4v14l-4-4H2a1 1 0 01-1-1V6a1 1 0 011-1z"/><path d="M14.5 2.5a8 8 0 010 11" stroke="#555" fill="none" stroke-width="1.5"/><path d="M12 5a4.5 4.5 0 010 6" stroke="#555" fill="none" stroke-width="1.5"/></svg>';
    volWrap.appendChild(volLow);
    volWrap.appendChild(volSlider);
    volWrap.appendChild(volHigh);

    controls.appendChild(volWrap);
    controls.appendChild(btnPrev);
    controls.appendChild(btnPlay);
    controls.appendChild(btnNext);

    frag.appendChild(controls);

    return frag;
  }

  // ============================================================
  //  ITUNES FULL WINDOW
  // ============================================================
  function buildRatingStars(rating) {
    var html = '';
    for (var i = 1; i <= 5; i++) {
      html += '<span class="' + (i <= rating ? 'filled' : '') + '">\u2605</span>';
    }
    return html;
  }

  function buildITunesContent() {
    var frag = document.createDocumentFragment();
    var track = ITUNES_TRACKS[currentTrackIndex];

    // Dark header bar
    var headerBar = document.createElement('div');
    headerBar.className = 'itunes-header-bar';

    // Transport controls
    var ctrlWrap = document.createElement('div');
    ctrlWrap.className = 'itunes-header__controls';

    var btnPrev = document.createElement('button');
    btnPrev.className = 'itunes-hdr-btn';
    btnPrev.textContent = '\u23EE';
    btnPrev.addEventListener('click', function () { prevTrack(); });

    var btnPlay = document.createElement('button');
    btnPlay.className = 'itunes-hdr-btn itunes-hdr-btn--play';
    btnPlay.textContent = isPlaying ? '\u23F8' : '\u25B6';
    btnPlay.addEventListener('click', function () { togglePlay(); });

    var btnNext = document.createElement('button');
    btnNext.className = 'itunes-hdr-btn';
    btnNext.textContent = '\u23ED';
    btnNext.addEventListener('click', function () { nextTrack(); });

    ctrlWrap.appendChild(btnPrev);
    ctrlWrap.appendChild(btnPlay);
    ctrlWrap.appendChild(btnNext);
    headerBar.appendChild(ctrlWrap);

    // Volume with speaker icons
    var volumeWrap = document.createElement('div');
    volumeWrap.className = 'itunes-header__volume';
    var volLow = document.createElement('span');
    volLow.className = 'itunes-vol-icon';
    volLow.innerHTML = '<svg width="10" height="10" viewBox="0 0 16 16" fill="#555"><path d="M2 5h3l4-4v14l-4-4H2a1 1 0 01-1-1V6a1 1 0 011-1z"/></svg>';
    var volumeSlider = document.createElement('input');
    volumeSlider.type = 'range';
    volumeSlider.min = '0';
    volumeSlider.max = '100';
    volumeSlider.value = '75';
    volumeSlider.className = 'itunes-volume-slider';
    volumeSlider.addEventListener('input', function () { setMasterVolume(volumeSlider.value / 100); var ms = document.getElementById('master-vol-slider'); if (ms) ms.value = volumeSlider.value; });
    var volHigh = document.createElement('span');
    volHigh.className = 'itunes-vol-icon';
    volHigh.innerHTML = '<svg width="12" height="10" viewBox="0 0 20 16" fill="#555"><path d="M2 5h3l4-4v14l-4-4H2a1 1 0 01-1-1V6a1 1 0 011-1z"/><path d="M14.5 2.5a8 8 0 010 11" stroke="#555" fill="none" stroke-width="1.5"/><path d="M12 5a4.5 4.5 0 010 6" stroke="#555" fill="none" stroke-width="1.5"/></svg>';
    volumeWrap.appendChild(volLow);
    volumeWrap.appendChild(volumeSlider);
    volumeWrap.appendChild(volHigh);
    headerBar.appendChild(volumeWrap);

    // Now playing LCD display
    var display = document.createElement('div');
    display.className = 'itunes-header__display';

    // Title row (wraps if long)
    var displayTitle = document.createElement('div');
    displayTitle.className = 'itunes-display__title';
    displayTitle.textContent = track.song + ' \u2014 ' + track.artist;
    display.appendChild(displayTitle);

    // Progress row: [elapsed] [====bar====] [-remaining]
    var progressRow = document.createElement('div');
    progressRow.className = 'itunes-display__progress-row';
    var displayElapsed = document.createElement('span');
    displayElapsed.className = 'itunes-display__elapsed';
    displayElapsed.textContent = '0:00';
    var displayProgress = document.createElement('div');
    displayProgress.className = 'itunes-display__progress';
    var displayProgressFill = document.createElement('div');
    displayProgressFill.className = 'itunes-display__progress-fill';
    displayProgress.appendChild(displayProgressFill);
    var displayRemaining = document.createElement('span');
    displayRemaining.className = 'itunes-display__remaining';
    displayRemaining.textContent = '-' + track.time;
    progressRow.appendChild(displayElapsed);
    progressRow.appendChild(displayProgress);
    progressRow.appendChild(displayRemaining);
    display.appendChild(progressRow);
    // Click to seek — uses mousedown for immediate response
    displayProgress.addEventListener('mousedown', function(e) {
      if (!audioEl.duration || !isFinite(audioEl.duration)) return;
      var rect = displayProgress.getBoundingClientRect();
      if (rect.width < 1) return;
      var pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audioEl.currentTime = pct * audioEl.duration;
    });
    headerBar.appendChild(display);

    // Search
    var searchWrap = document.createElement('div');
    searchWrap.className = 'itunes-header__search';
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchInput.className = 'itunes-search';
    searchWrap.appendChild(searchInput);
    headerBar.appendChild(searchWrap);

    frag.appendChild(headerBar);

    // Main content area
    var main = document.createElement('div');
    main.className = 'itunes-main';

    // Sidebar — full iTunes 9 sections
    var sidebar = document.createElement('div');
    sidebar.className = 'itunes-sidebar';
    sidebar.innerHTML =
      '<div class="itunes-sidebar__heading">LIBRARY</div>' +
      '<div class="itunes-sidebar__item itunes-sidebar__item--active"><span class="itunes-sidebar__icon itunes-sidebar__icon--music"></span>Music</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--movies"></span>Movies</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--tv"></span>TV Shows</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--podcasts"></span>Podcasts</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--radio"></span>Radio</div>' +
      '<div class="itunes-sidebar__heading">STORE</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--store"></span>nevTunes Store</div>' +
      '<div class="itunes-sidebar__heading">\u25B8 SHARED</div>' +
      '<div class="itunes-sidebar__heading">\u25B8 GENIUS</div>' +
      '<div class="itunes-sidebar__item"><span class="itunes-sidebar__icon itunes-sidebar__icon--genius"></span>Genius</div>' +
      '<div class="itunes-sidebar__heading">PLAYLISTS</div>' +
      '<div class="itunes-sidebar__item">nevTunes DJ</div>' +
      '<div class="itunes-sidebar__item">nev\'s mix</div>' +
      '<div class="itunes-sidebar__item">90\'s Music</div>' +
      '<div class="itunes-sidebar__item">Recently Added</div>' +
      '<div class="itunes-sidebar__item">Top 25 Most Played</div>';
    main.appendChild(sidebar);

    // Track list with Rating + Plays columns
    var content = document.createElement('div');
    content.className = 'itunes-content';

    var table = document.createElement('table');
    table.className = 'itunes-table';

    var thead = document.createElement('thead');
    thead.innerHTML = '<tr><th class="itunes-check">\u2713</th><th>Name</th><th style="width:50px">Time</th><th>Artist</th><th>Album</th><th>Genre</th><th style="width:70px">Rating</th><th style="width:40px">Plays</th></tr>';
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    ITUNES_TRACKS.forEach(function (t, index) {
      var tr = document.createElement('tr');
      if (index === currentTrackIndex) tr.classList.add('itunes-row--playing');
      tr.innerHTML =
        '<td class="itunes-check"><span class="itunes-speaker">\uD83D\uDD0A</span>' + t.num + '</td>' +
        '<td>' + t.song + '</td>' +
        '<td class="itunes-time">' + t.time + '</td>' +
        '<td>' + t.artist + '</td>' +
        '<td>' + t.album + '</td>' +
        '<td class="itunes-genre">' + t.genre + '</td>' +
        '<td class="itunes-rating">' + buildRatingStars(t.rating) + '</td>' +
        '<td class="itunes-plays">' + t.plays + '</td>';
      tr.addEventListener('dblclick', function () { playTrack(index); });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    content.appendChild(table);
    main.appendChild(content);

    frag.appendChild(main);

    // Status bar
    var statusBar = document.createElement('div');
    statusBar.className = 'itunes-status-bar';
    statusBar.textContent = ITUNES_TRACKS.length + ' songs, ' + getTotalPlaylistTime() + ' hours, 98.2 MB';
    frag.appendChild(statusBar);

    return frag;
  }

  // ============================================================
  //  PLAYBACK ENGINE — Real audio via audioEl
  // ============================================================
  function playTrack(index) {
    currentTrackIndex = index;
    var track = ITUNES_TRACKS[currentTrackIndex];
    // Offline demo copy — audio files are not included
    if (!track.src) { updatePlaybackUI(); return; }
    audioEl.src = track.src;
    audioEl.play();
    isPlaying = true;
    updatePlaybackUI();
  }

  function togglePlay() {
    if (!audioEl.src || !ITUNES_TRACKS[currentTrackIndex].src) {
      playTrack(currentTrackIndex);
      return;
    }
    if (audioEl.paused) {
      audioEl.play();
      isPlaying = true;
    } else {
      audioEl.pause();
      isPlaying = false;
    }
    updatePlaybackUI();
  }

  function prevTrack() {
    // If past 3 seconds, restart current track; otherwise go to previous
    if (audioEl.currentTime > 3) {
      audioEl.currentTime = 0;
    } else {
      currentTrackIndex = (currentTrackIndex - 1 + ITUNES_TRACKS.length) % ITUNES_TRACKS.length;
      var track = ITUNES_TRACKS[currentTrackIndex];
      audioEl.src = track.src;
      if (isPlaying) audioEl.play();
    }
    updatePlaybackUI();
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % ITUNES_TRACKS.length;
    var track = ITUNES_TRACKS[currentTrackIndex];
    audioEl.src = track.src;
    if (isPlaying) audioEl.play();
    updatePlaybackUI();
  }

  // Auto-advance on track end
  audioEl.addEventListener('ended', function () {
    nextTrack();
  });

  // Real-time UI updates from audio timeupdate
  audioEl.addEventListener('timeupdate', function () {
    if (!audioEl.duration) return;
    trackProgress = (audioEl.currentTime / audioEl.duration) * 100;
    updatePlaybackUI();
  });

  audioEl.addEventListener('play', function () { isPlaying = true; updatePlaybackUI(); });
  audioEl.addEventListener('pause', function () { isPlaying = false; updatePlaybackUI(); });

  function updatePlaybackUI() {
    var track = ITUNES_TRACKS[currentTrackIndex];
    var totalSeconds = audioEl.duration || parseTime(track.time);
    var elapsedSeconds = audioEl.currentTime || 0;
    var remainingSeconds = Math.max(0, totalSeconds - elapsedSeconds);
    var pct = totalSeconds > 0 ? (elapsedSeconds / totalSeconds) * 100 : 0;

    // Update mini player
    var miniEntry = openWindows.get('itunes-mini');
    if (miniEntry) {
      var miniBody = miniEntry.el.querySelector('.window__body');
      var miniTitle = miniBody.querySelector('.mini-player__title');
      var miniArtist = miniBody.querySelector('.mini-player__artist');
      var miniElapsed = miniBody.querySelector('.mini-player__elapsed');
      var miniRemaining = miniBody.querySelector('.mini-player__remaining');
      var miniFill = miniBody.querySelector('.mini-player__progress-fill');
      var miniPlayBtn = miniBody.querySelector('.mini-ctrl--play');

      if (miniTitle) miniTitle.textContent = track.song;
      if (miniArtist) miniArtist.textContent = track.artist;
      if (miniElapsed) miniElapsed.textContent = formatTime(elapsedSeconds);
      if (miniRemaining) miniRemaining.textContent = '-' + formatTime(remainingSeconds);
      if (miniFill) miniFill.style.width = pct + '%';
      if (miniPlayBtn) miniPlayBtn.innerHTML = isPlaying
        ? '<svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor"><rect x="1" y="1" width="3" height="12"/><rect x="8" y="1" width="3" height="12"/></svg>'
        : '<svg width="10" height="12" viewBox="0 0 14 16" fill="currentColor"><path d="M2 1l11 7-11 7z"/></svg>';
    }

    // Update full iTunes window
    var itunesEntry = openWindows.get('itunes');
    if (itunesEntry) {
      var itunesBody = itunesEntry.el.querySelector('.window__body');
      var displayTitle = itunesBody.querySelector('.itunes-display__title');
      var displayFill = itunesBody.querySelector('.itunes-display__progress-fill');
      var hdrPlay = itunesBody.querySelector('.itunes-hdr-btn--play');

      if (displayTitle) displayTitle.textContent = track.song + ' \u2014 ' + track.artist;
      if (displayFill) displayFill.style.width = pct + '%';
      if (hdrPlay) hdrPlay.textContent = isPlaying ? '\u23F8' : '\u25B6';
      var displayElapsed = itunesBody.querySelector('.itunes-display__elapsed');
      var displayRemaining = itunesBody.querySelector('.itunes-display__remaining');
      if (displayElapsed) displayElapsed.textContent = formatTime(elapsedSeconds);
      if (displayRemaining) displayRemaining.textContent = '-' + formatTime(remainingSeconds);

      var rows = itunesBody.querySelectorAll('.itunes-table tbody tr');
      rows.forEach(function (row, index) {
        if (index === currentTrackIndex) {
          row.classList.add('itunes-row--playing');
        } else {
          row.classList.remove('itunes-row--playing');
        }
      });
    }
  }

  // ============================================================
  //  MAIL.APP COMPOSE
  // ============================================================
  function buildMailContent() {
    var frag = document.createDocumentFragment();

    // To field (pre-filled, read-only)
    var toField = document.createElement('div');
    toField.className = 'mail-field';
    toField.innerHTML = '<span class="mail-field__label">To:</span><span class="mail-field__value">nev@crossover.to</span>';
    frag.appendChild(toField);

    // From field
    var fromField = document.createElement('div');
    fromField.className = 'mail-field';
    var fromLabel = document.createElement('span');
    fromLabel.className = 'mail-field__label';
    fromLabel.textContent = 'From:';
    var fromInput = document.createElement('input');
    fromInput.type = 'email';
    fromInput.name = 'email';
    fromInput.placeholder = 'your@email.com';
    fromField.appendChild(fromLabel);
    fromField.appendChild(fromInput);
    frag.appendChild(fromField);

    // Subject field
    var subjectField = document.createElement('div');
    subjectField.className = 'mail-field';
    var subjectLabel = document.createElement('span');
    subjectLabel.className = 'mail-field__label';
    subjectLabel.textContent = 'Subject:';
    var subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.name = 'subject';
    subjectInput.placeholder = 'Subject';
    subjectField.appendChild(subjectLabel);
    subjectField.appendChild(subjectInput);
    frag.appendChild(subjectField);

    // Body
    var bodyWrap = document.createElement('div');
    bodyWrap.className = 'mail-body';
    var textarea = document.createElement('textarea');
    textarea.name = 'message';
    textarea.placeholder = 'Write your message...';
    textarea.rows = 8;
    // Check for pre-fill data from MSN chat
    if (window._mailPrefill) {
      subjectInput.value = window._mailPrefill.subject || '';
      textarea.value = window._mailPrefill.message || '';
      window._mailPrefill = null;
    }

    bodyWrap.appendChild(textarea);
    frag.appendChild(bodyWrap);

    // Actions
    var actions = document.createElement('div');
    actions.className = 'mail-actions';
    var sendBtn = document.createElement('button');
    sendBtn.className = 'mail-send';
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', function () {
      var email = fromInput.value;
      var subject = subjectInput.value;
      var message = textarea.value;

      if (!email || !message) {
        showTooltip(sendBtn, 'Please fill in all fields');
        playSFX('funk');
        return;
      }

      // No form backend in this copy — open the visitor's mail client instead
      window.location.href = 'mailto:nev@crossover.to?subject=' +
        encodeURIComponent(subject) + '&body=' +
        encodeURIComponent(message + '\n\nFrom: ' + email);
    });
    actions.appendChild(sendBtn);
    frag.appendChild(actions);

    return frag;
  }

  // ============================================================
  //  MSN MESSENGER — Ven AI Chat
  // ============================================================
  var msnConversation = [];
  var msnSending = false;
  var msnLastSendTime = 0;

  function buildMSNContent(windowId) {
    var frag = document.createDocumentFragment();
    var wrapper = document.createElement('div');
    wrapper.className = 'msn-wrapper';

    // MSN custom titlebar (replaces the standard one visually)
    var msnTitlebar = document.createElement('div');
    msnTitlebar.className = 'msn-titlebar';
    var statusDot = document.createElement('span');
    statusDot.className = 'msn-status-dot';
    msnTitlebar.appendChild(statusDot);
    var titleText = document.createElement('span');
    titleText.textContent = 'Ven - Online';
    msnTitlebar.appendChild(titleText);
    wrapper.appendChild(msnTitlebar);

    // Chat area
    var chatArea = document.createElement('div');
    chatArea.className = 'msn-chat-area';
    wrapper.appendChild(chatArea);

    // Typing indicator
    var typingEl = document.createElement('div');
    typingEl.className = 'msn-typing';
    typingEl.style.display = 'none';
    typingEl.textContent = 'Ven is typing...';
    wrapper.appendChild(typingEl);

    // Toolbar (decorative buttons above input)
    var toolbar = document.createElement('div');
    toolbar.className = 'msn-toolbar';

    var btnEmoji = document.createElement('button');
    btnEmoji.title = 'Emoticons';
    btnEmoji.textContent = '\uD83D\uDE00';
    toolbar.appendChild(btnEmoji);

    var btnNudge = document.createElement('button');
    btnNudge.title = 'Nudge';
    btnNudge.textContent = '\uD83D\uDCA5';
    btnNudge.addEventListener('click', function () { msnNudge(windowId); });
    toolbar.appendChild(btnNudge);

    var btnFont = document.createElement('button');
    btnFont.title = 'Font';
    btnFont.textContent = 'A';
    toolbar.appendChild(btnFont);

    wrapper.appendChild(toolbar);

    // Input area
    var inputArea = document.createElement('div');
    inputArea.className = 'msn-input-area';

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'msn-input';
    input.placeholder = 'Type a message...';
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        msnSendMessage(chatArea, input, typingEl, statusBar);
      }
    });
    inputArea.appendChild(input);

    var sendBtn = document.createElement('button');
    sendBtn.className = 'msn-send-btn';
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', function () {
      msnSendMessage(chatArea, input, typingEl, statusBar);
    });
    inputArea.appendChild(sendBtn);

    wrapper.appendChild(inputArea);

    // Status bar (very bottom)
    var statusBar = document.createElement('div');
    statusBar.className = 'msn-status-bar';
    statusBar.textContent = '';
    wrapper.appendChild(statusBar);

    frag.appendChild(wrapper);

    // Send initial greeting after a short delay
    msnConversation = [];
    setTimeout(function () {
      msnAddMessage(chatArea, statusBar, 'ven', 'hey. whats up');
      msnConversation.push({ role: 'assistant', content: 'hey. whats up' });
    }, 800);

    return frag;
  }

  function msnGetTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
  }

  function msnAddMessage(chatArea, statusBar, sender, text) {
    var msg = document.createElement('div');
    msg.className = 'msn-message msn-message--' + (sender === 'ven' ? 'ven' : 'visitor');

    // Add avatar for Ven's messages
    if (sender === 'ven') {
      var avatar = document.createElement('img');
      avatar.className = 'msn-message__avatar';
      avatar.src = 'assets/icons/ven-avatar.svg';
      avatar.alt = 'Ven';
      avatar.width = 32;
      avatar.height = 32;
      msg.appendChild(avatar);
    }

    var contentWrap = document.createElement('div');
    contentWrap.className = 'msn-message__content';

    var nameEl = document.createElement('span');
    nameEl.className = 'msn-message__name';
    nameEl.textContent = sender === 'ven' ? 'Ven' : 'You';

    var timeEl = document.createElement('span');
    timeEl.className = 'msn-message__time';
    timeEl.textContent = msnGetTime();

    var textEl = document.createElement('div');
    textEl.className = 'msn-message__text';
    if (sender === 'ven' && text.indexOf('nev@crossover.to') !== -1) {
      textEl.innerHTML = text.replace(/nev@crossover\.to/g,
        '<a href="#" class="msn-email-link" data-action="open-mail">nev@crossover.to</a>');
      var link = textEl.querySelector('.msn-email-link');
      if (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          msnOpenMailWithContext();
        });
      }
    } else {
      textEl.textContent = text;
    }

    var header = document.createElement('div');
    header.appendChild(nameEl);
    header.appendChild(timeEl);
    contentWrap.appendChild(header);
    contentWrap.appendChild(textEl);
    msg.appendChild(contentWrap);

    chatArea.appendChild(msg);
    chatArea.scrollTop = chatArea.scrollHeight;

    if (statusBar && sender === 'ven') {
      statusBar.textContent = 'Last message received at ' + msnGetTime();
    }
  }

  function msnSendMessage(chatArea, input, typingEl, statusBar) {
    var text = input.value.trim();
    if (!text || msnSending) return;

    // Rate limit: 2 second minimum between sends
    var now = Date.now();
    if (now - msnLastSendTime < 2000) return;
    msnLastSendTime = now;

    input.value = '';
    msnAddMessage(chatArea, statusBar, 'visitor', text);
    msnConversation.push({ role: 'user', content: text });

    // Show typing indicator
    msnSending = true;
    typingEl.style.display = 'block';
    chatArea.scrollTop = chatArea.scrollHeight;

    // Call API
    msnCallAPI(msnConversation.slice(), function (reply) {
      typingEl.style.display = 'none';
      msnSending = false;
      msnAddMessage(chatArea, statusBar, 'ven', reply);
      msnConversation.push({ role: 'assistant', content: reply });
    }, function () {
      typingEl.style.display = 'none';
      msnSending = false;
      playSFX('error');
      msnAddMessage(chatArea, statusBar, 'ven', 'sorry, something went wrong. try again?');
    });
  }

  // Offline demo mode — no backend. Ven just cycles through canned replies.
  var MSN_OFFLINE_REPLIES = [
    'im running in offline mode in this copy so my brain is like. not plugged in lol',
    'no ai hooked up here, just canned lines. have you tried the itunes player tho, it actually works',
    'brb... wait nvm im still here lol. anyway im just a demo, click around the desktop instead',
    'ngl i cant actually think in this version. the dock magnification is pretty sick tho right',
    'this copy of me has no backend. do you ever think about what it means to just exist in a chat window. anyway',
    'idk what to tell you, im basically an answering machine here. try limewire lol',
  ];
  var msnOfflineIdx = 0;

  function msnCallAPI(messages, onSuccess, onError) {
    var reply = MSN_OFFLINE_REPLIES[msnOfflineIdx % MSN_OFFLINE_REPLIES.length];
    msnOfflineIdx++;
    setTimeout(function () { onSuccess(reply); }, 900 + Math.random() * 900);
  }

  function msnNudge(windowId) {
    var entry = openWindows.get(windowId);
    if (!entry) return;
    var win = entry.el;
    win.classList.add('msn-nudge');
    setTimeout(function () { win.classList.remove('msn-nudge'); }, 500);
  }

  function msnOpenMailWithContext() {
    // Build a summary of the conversation for the email body
    var lines = [];
    var visitorName = '';
    for (var i = 0; i < msnConversation.length; i++) {
      var m = msnConversation[i];
      if (m.role === 'user') {
        lines.push('Me: ' + m.content);
        // Grab first user message as context hint
        if (!visitorName) visitorName = m.content;
      } else {
        lines.push('Ven: ' + m.content);
      }
    }
    var chatSummary = lines.slice(-10).join('\n');

    // Store pre-fill data so buildMailContent can pick it up
    window._mailPrefill = {
      subject: 'Hey Nev — chatted with Ven on aaronnev.com',
      message: 'Hey Nev,\n\nVen suggested I reach out. Here\'s what we talked about:\n\n' +
        chatSummary + '\n\n---\n\n',
    };
    openWindow('mail');
  }

  // ============================================================
  //  NEVARI (Safari 4 Browser)
  // ============================================================

  function buildYouTubeEmbed() {
    var container = document.createElement('div');
    container.className = 'safari-yt-page';

    var videos = [
      { id: 'HfSeAroaWGQ', title: 'one guy hacked openclaw three times in one week' },
      { id: '9Ptql2GX_xo', title: 'I was scared of AI, so I tried using it' },
      { id: '-gaAA236ygk', title: 'How do you launch a decentralised network?' },
      { id: '3h9finI3T6Q', title: 'Charles Hoskinson: Privacy, AI, and the Future of Humanity' },
      { id: 'hQXpfsnL4-c', title: 'Crypto market is f*kd & why it doesn\'t matter anymore' },
      { id: '4x-5a5Pbucs', title: 'Onchain World ft. Blocmates' },
      { id: 'UfilqMaaNZc', title: 'Why 99% of Altcoins Will Fail' },
      { id: 'k7VwimToR74', title: 'What is LayerZero? The connective tissue of crypto' },
    ];

    // Channel header
    var header = document.createElement('div');
    header.className = 'safari-yt-channel';
    header.innerHTML =
      '<div class="safari-yt-channel__avatar">N</div>' +
      '<div class="safari-yt-channel__info">' +
        '<div class="safari-yt-channel__name">nev</div>' +
        '<div class="safari-yt-channel__handle">@nevaaron</div>' +
      '</div>' +
      '<span class="safari-yt-channel__link">youtube.com/@nevaaron</span>';
    container.appendChild(header);

    // Video grid
    var grid = document.createElement('div');
    grid.className = 'safari-yt-grid';

    videos.forEach(function (vid) {
      var card = document.createElement('div');
      card.className = 'safari-yt-card';

      // Thumbnail with play button — click to embed inline
      var thumb = document.createElement('div');
      thumb.className = 'safari-yt-card__thumb';
      thumb.style.backgroundImage = 'url(https://img.youtube.com/vi/' + vid.id + '/hqdefault.jpg)';
      thumb.innerHTML = '<div class="safari-yt-card__play"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div>';
      thumb.addEventListener('click', function () {
        var frame = document.createElement('iframe');
        frame.src = 'https://www.youtube.com/embed/' + vid.id + '?autoplay=1';
        frame.setAttribute('allowfullscreen', '');
        frame.setAttribute('allow', 'autoplay; encrypted-media');
        thumb.replaceWith(frame);
      });

      var title = document.createElement('div');
      title.className = 'safari-yt-card__title';
      title.textContent = vid.title;

      card.appendChild(thumb);
      card.appendChild(title);
      grid.appendChild(card);
    });

    container.appendChild(grid);
    return container;
  }

  function buildSiteCard(initial, name, bio, href, linkText, color) {
    var container = document.createElement('div');
    container.className = 'safari-site-card-wrap';

    container.innerHTML =
      '<div class="safari-site-card">' +
        '<div class="safari-site-card__avatar" style="background:' + color + '">' + initial + '</div>' +
        '<div class="safari-site-card__name">' + name + '</div>' +
        '<p class="safari-site-card__bio">' + bio + '</p>' +
        '<a class="safari-site-card__link" href="' + href + '" target="_blank" rel="noopener">' + linkText + ' \u2197</a>' +
        '<p class="safari-site-card__note">This site doesn\u2019t allow embedding \u2014 click above to visit.</p>' +
      '</div>';

    return container;
  }

  function buildSafariContent(config) {
    var frag = document.createDocumentFragment();

    // Toolbar
    var toolbar = document.createElement('div');
    toolbar.className = 'safari-toolbar';

    // Back button
    var btnBack = document.createElement('button');
    btnBack.className = 'safari-nav-btn safari-back-btn';
    btnBack.disabled = true;
    btnBack.innerHTML = '<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M8 0L0 6l8 6z"/></svg>';
    btnBack.addEventListener('click', safariBack);

    // Forward button
    var btnFwd = document.createElement('button');
    btnFwd.className = 'safari-nav-btn safari-fwd-btn';
    btnFwd.disabled = true;
    btnFwd.innerHTML = '<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M2 0l8 6-8 6z"/></svg>';
    btnFwd.addEventListener('click', safariForward);

    // URL bar
    var urlBar = document.createElement('div');
    urlBar.className = 'safari-url-bar';

    var urlProgress = document.createElement('div');
    urlProgress.className = 'safari-url-bar__progress';

    var urlLock = document.createElement('span');
    urlLock.className = 'safari-url-bar__lock';
    urlLock.innerHTML = '<svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor"><path d="M1 4V3a3 3 0 116 0v1h1v6H0V4h1zm1 0h4V3a2 2 0 10-4 0v1z"/></svg>';

    var urlText = document.createElement('span');
    urlText.className = 'safari-url-bar__text';

    urlBar.appendChild(urlProgress);
    urlBar.appendChild(urlLock);
    urlBar.appendChild(urlText);

    toolbar.appendChild(btnBack);
    toolbar.appendChild(btnFwd);
    toolbar.appendChild(urlBar);

    frag.appendChild(toolbar);

    // Bookmarks bar
    var bmBar = document.createElement('div');
    bmBar.className = 'safari-bookmarks-bar';

    SAFARI_BOOKMARKS.forEach(function (bm) {
      var item = document.createElement('button');
      item.className = 'safari-bookmark';
      item.dataset.url = bm.url;

      var dot = document.createElement('span');
      dot.className = 'safari-bookmark__dot';
      dot.style.background = bm.color;

      var label = document.createElement('span');
      label.textContent = bm.label;

      item.appendChild(dot);
      item.appendChild(label);

      item.addEventListener('click', function () {
        navigateSafari(bm.url);
      });

      bmBar.appendChild(item);
    });

    frag.appendChild(bmBar);

    // Content area
    var content = document.createElement('div');
    content.className = 'safari-content';
    frag.appendChild(content);

    // Load initial content
    var initialUrl = safariPendingUrl || SAFARI_BOOKMARKS[0].url;
    safariPendingUrl = null;

    // Defer so DOM is attached
    setTimeout(function () {
      navigateSafari(initialUrl);
    }, 0);

    return frag;
  }

  // ============================================================
  //  DOCK
  // ============================================================
  function updateDock() {
    dockItems.innerHTML = '';

    // Pinned items
    DOCK_PINNED.forEach(function (pinned) {
      var isRunning = false;
      if (pinned.opensWindow && openWindows.has(pinned.opensWindow)) {
        isRunning = true;
      }

      var item = createDockItem(pinned.label, pinned.icon, isRunning, function () {
        if (pinned.opensWindow) {
          openWindow(pinned.opensWindow);
        } else {
          showTooltip(item, 'Coming soon');
        }
      });
      dockItems.appendChild(item);
    });

    // Separator
    var sep = document.createElement('div');
    sep.className = 'dock-separator';
    dockItems.appendChild(sep);

    // Open windows (excluding those covered by pinned items)
    var pinnedWindowIds = {};
    DOCK_PINNED.forEach(function (p) { if (p.opensWindow) pinnedWindowIds[p.opensWindow] = true; });

    openWindows.forEach(function (entry, id) {
      if (pinnedWindowIds[id]) return;
      var config = WINDOWS[id];
      if (!config) return;

      var shortTitle = config.title.split(' \u2014 ')[0].split('.txt')[0];
      if (shortTitle.length > 15) shortTitle = shortTitle.substring(0, 15) + '\u2026';

      var iconSrc = config.icon || 'assets/icons/generic-document.png';

      var dockEntry = entry; // capture for closure
      var item = createDockItem(shortTitle, iconSrc, !dockEntry.minimized, function () {
        if (dockEntry.minimized) {
          restoreWindow(id);
        } else {
          focusWindow(id);
        }
      });
      dockItems.appendChild(item);
    });

    // Separator + Trash
    var sep2 = document.createElement('div');
    sep2.className = 'dock-separator';
    dockItems.appendChild(sep2);

    var trashItem = createDockItem('Trash', 'assets/icons/trash-full.png', false, function () {
      showTooltip(trashItem, 'Trash is full');
    });
    dockItems.appendChild(trashItem);
  }

  function createDockItem(label, iconSrc, showIndicator, onClick) {
    var item = document.createElement('button');
    item.className = 'dock-item';
    item.setAttribute('aria-label', label);

    var tooltip = document.createElement('span');
    tooltip.className = 'dock-item__tooltip';
    tooltip.textContent = label;
    item.appendChild(tooltip);

    var iconWrap = document.createElement('div');
    iconWrap.className = 'dock-item__icon';
    var img = document.createElement('img');
    img.src = iconSrc;
    img.alt = label;
    img.width = 40;
    img.height = 40;
    iconWrap.appendChild(img);
    item.appendChild(iconWrap);

    // Reflection handled by CSS -webkit-box-reflect on .dock-item__icon

    if (showIndicator) {
      var dot = document.createElement('div');
      dot.className = 'dock-item__indicator';
      item.appendChild(dot);
    }

    item.addEventListener('click', onClick);
    return item;
  }

  // ---- Desktop Icons ----
  var icons = document.querySelectorAll('.desktop-icon');
  var selectedIcon = null;
  var lastClickTime = {};

  // Shared click handler — called from pointer events (desktop) and click events (mobile)
  function handleIconClick(icon) {
    if (selectedIcon) selectedIcon.classList.remove('selected');
    icon.classList.add('selected');
    selectedIcon = icon;

    var opens = icon.dataset.opens;
    var action = icon.dataset.action;
    var now = Date.now();
    var id = opens || action;

    if (isMobile) {
      activateIcon(icon);
    } else {
      if (lastClickTime[id] && now - lastClickTime[id] < 400) {
        activateIcon(icon);
        lastClickTime[id] = 0;
      } else {
        lastClickTime[id] = now;
      }
    }
  }

  icons.forEach(function (icon) {
    // Click events: mobile only (desktop uses pointer events via setupIconDrag)
    icon.addEventListener('click', function () {
      if (!isMobile) return;
      handleIconClick(icon);
    });

    // Keyboard accessibility
    icon.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (selectedIcon) selectedIcon.classList.remove('selected');
        icon.classList.add('selected');
        selectedIcon = icon;
        activateIcon(icon);
      }
    });
  });

  function activateIcon(icon) {
    var opens = icon.dataset.opens;
    var action = icon.dataset.action;

    if (opens) {
      openWindow(opens);
    } else if (action === 'mailto') {
      window.location.href = 'mailto:nev@crossover.to';
    } else if (action === 'messenger') {
      openWindow('msn');
    } else if (action === 'imovie') {
      showTooltip(icon, 'Coming soon');
    } else if (action === 'trash') {
      showTooltip(icon, 'Trash is full');
    }
  }

  desktop.addEventListener('click', function (e) {
    if (e.target === desktop || e.target.id === 'windows-container') {
      if (selectedIcon) {
        selectedIcon.classList.remove('selected');
        selectedIcon = null;
      }
    }
  });

  // ---- Tooltip ----
  function showTooltip(anchor, text) {
    var tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.textContent = text;
    document.body.appendChild(tip);

    var rect = anchor.getBoundingClientRect();
    tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
    tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';

    setTimeout(function () {
      if (tip.parentNode) tip.parentNode.removeChild(tip);
    }, 1500);
  }

  // ---- Clock ----
  function updateClock() {
    var clock = document.getElementById('menu-clock');
    if (!clock) return;
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    clock.textContent = h + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
  }

  // ---- Context Menu ----
  desktop.addEventListener('contextmenu', function (e) {
    if (e.target !== desktop && e.target.id !== 'windows-container' && !e.target.closest('.desktop-icons')) return;
    e.preventDefault();

    contextMenu.hidden = false;
    var x = e.clientX;
    var y = e.clientY;

    var menuW = contextMenu.offsetWidth;
    var menuH = contextMenu.offsetHeight;
    if (x + menuW > window.innerWidth) x = window.innerWidth - menuW - 8;
    if (y + menuH > window.innerHeight) y = window.innerHeight - menuH - 8;

    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
  });

  document.addEventListener('click', function () {
    contextMenu.hidden = true;
  });

  contextMenu.addEventListener('click', function (e) {
    var action = e.target.dataset.action;
    if (action === 'about-mac') {
      aboutMacDialog.showModal();
    } else if (action === 'change-wallpaper') {
      cycleWallpaper();
    } else if (action === 'reset-icons') {
      resetIconPositions();
    }
  });

  // ---- Wallpaper cycling ----
  var WALLPAPERS = [
    '',
    'assets/wallpapers/2.jpg',
    'assets/wallpapers/chatgpt-image.jpg',
    'assets/wallpapers/burnmoney.jpg',
    'assets/wallpapers/desktop3.jpg',
    'assets/wallpapers/doctor.jpg',
    'assets/wallpapers/doorart.jpg',
    'assets/wallpapers/leopardaurora.jpg'
  ];
  var wallpaperIndex = 0;

  function restoreWallpaper() {
    var saved = localStorage.getItem('nev-wallpaper');
    if (saved !== null) {
      var idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < WALLPAPERS.length) {
        wallpaperIndex = idx;
        applyWallpaper();
      }
    }
  }

  function applyWallpaper() {
    if (wallpaperIndex === 0) {
      document.body.style.backgroundImage = '';
    } else {
      document.body.style.backgroundImage = "url('" + WALLPAPERS[wallpaperIndex] + "')";
    }
  }

  function cycleWallpaper() {
    wallpaperIndex = (wallpaperIndex + 1) % WALLPAPERS.length;
    applyWallpaper();
    localStorage.setItem('nev-wallpaper', String(wallpaperIndex));
  }

  // ---- About This Mac ----
  document.getElementById('apple-menu-btn').addEventListener('click', function () {
    aboutMacDialog.showModal();
  });

  document.getElementById('about-mac-close').addEventListener('click', function () {
    aboutMacDialog.close();
  });

  aboutMacDialog.addEventListener('click', function (e) {
    if (e.target === aboutMacDialog) {
      aboutMacDialog.close();
    }
  });

  // ---- NevOS API (exposed to app modules) ----
  NevOS.api = {
    openWindow: openWindow,
    closeWindow: closeWindow,
    focusWindow: focusWindow,
    minimizeWindow: minimizeWindow,
    restoreWindow: restoreWindow,
    getOpenWindows: function () { return openWindows; },
    isMobile: function () { return isMobile; },
    getWindowConfig: function (id) { return WINDOWS[id]; },
    formatTime: typeof formatTime === 'function' ? formatTime : undefined,
    connectMediaToCompressor: connectMediaToCompressor
  };
  NevOS.registerWindow = function (id, config) { WINDOWS[id] = config; };
  NevOS.addDockItem = function (item) { DOCK_PINNED.push(item); };

  // ---- Start ----
  boot();

})();
