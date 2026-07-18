/* ============================================================
   PREVIEW.APP — NevOS Module
   ============================================================ */
(function () {
  'use strict';

  NevOS.registerApp('preview', {
    build: function (config) {
      var frag = document.createDocumentFragment();

      var toolbar = document.createElement('div');
      toolbar.className = 'preview-toolbar';
      toolbar.textContent = 'Fit to Window';
      frag.appendChild(toolbar);

      var wrap = document.createElement('div');
      wrap.className = 'preview-image-wrap';
      var img = document.createElement('img');
      img.src = config.mediaSrc;
      img.alt = config.title.split(' \u2014 ')[0];
      img.loading = 'eager';
      wrap.appendChild(img);
      frag.appendChild(wrap);

      return frag;
    }
  });
})();
