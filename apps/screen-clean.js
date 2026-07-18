/* ============================================================
   SCREEN CLEAN — Nested Folder Easter Egg
   ============================================================ */
(function () {
  'use strict';

  var TREE = {
    'screen-clean': {
      title: 'screen clean',
      items: [
        { name: 'art singularity', type: 'folder', folderId: 'sc-art-singularity' },
        { name: 'misc', type: 'folder', folderId: 'sc-misc' },
        { name: 'Wallapers', type: 'folder', folderId: 'sc-wallpapers' },
        { name: 'decentralisation.mp4', type: 'video', windowId: 'video-decentralisation' },
        { name: 'impact.png', type: 'image', src: 'assets/screen-clean/impact.jpg' }
      ]
    },
    'sc-wallpapers': {
      title: 'Wallapers',
      items: [
        { name: '2.jpg', type: 'image', src: 'assets/wallpapers/2.jpg' },
        { name: 'burnmoney.jpg', type: 'image', src: 'assets/wallpapers/burnmoney.jpg' },
        { name: 'chatgpt-image.jpg', type: 'image', src: 'assets/wallpapers/chatgpt-image.jpg' },
        { name: 'desktop3.jpg', type: 'image', src: 'assets/wallpapers/desktop3.jpg' },
        { name: 'doctor.jpg', type: 'image', src: 'assets/wallpapers/doctor.jpg' },
        { name: 'doorart.jpg', type: 'image', src: 'assets/wallpapers/doorart.jpg' },
        { name: 'leopardaurora.jpg', type: 'image', src: 'assets/wallpapers/leopardaurora.jpg' }
      ]
    },
    'sc-art-singularity': {
      title: 'art singularity',
      items: [
        { name: 'chatgpt-art-1.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/chatgpt-art-1.jpg' },
        { name: 'chatgpt-art-2.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/chatgpt-art-2.jpg' },
        { name: 'chatgpt-art-3.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/chatgpt-art-3.jpg' },
        { name: 'chatgpt-art-4.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/chatgpt-art-4.jpg' },
        { name: 'chatgpt-art-5.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/chatgpt-art-5.jpg' },
        { name: 'love.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/love.jpg' },
        { name: 'untitled-1.jpg', type: 'image', src: 'assets/screen-clean/art-singularity/untitled-1.jpg' }
      ]
    },
    'sc-misc': {
      title: 'misc',
      items: [
        { name: 'New folder', type: 'folder', folderId: 'sc-misc-newfolder' },
        { name: 'flywheel_hype.png', type: 'image', src: 'assets/screen-clean/misc/flywheel_hype.jpg' },
        { name: 'flywheel_trust.png', type: 'image', src: 'assets/screen-clean/misc/flywheel_trust.jpg' },
        { name: 'iamdoctor.jpg', type: 'image', src: 'assets/screen-clean/misc/iamdoctor.jpg' },
        { name: 'timesup.png', type: 'image', src: 'assets/screen-clean/misc/timesup.jpg' },
        { name: 'tokensjpeg.jpg', type: 'image', src: 'assets/screen-clean/misc/tokensjpeg.jpg' }
      ]
    },
    'sc-misc-newfolder': {
      title: 'New folder',
      items: [
        { name: 'Misc', type: 'folder', folderId: 'sc-misc-misc' },
        { name: 'achievement.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/achievement.jpg' },
        { name: 'ai philosophy.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/ai-philosophy.jpg' },
        { name: 'chatgpt-art.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/chatgpt-art.jpg' },
        { name: 'cobiewhy.png', type: 'image', src: 'assets/screen-clean/misc/new-folder/cobiewhy.jpg' },
        { name: 'cryptovcs.png', type: 'image', src: 'assets/screen-clean/misc/new-folder/cryptovcs.jpg' },
        { name: 'ilovebtc.png', type: 'image', src: 'assets/screen-clean/misc/new-folder/ilovebtc.jpg' },
        { name: 'macbigli.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/macbigli.jpg' },
        { name: 'pls.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/pls.jpg' },
        { name: 'solditall.jpg', type: 'image', src: 'assets/screen-clean/misc/new-folder/solditall.jpg' },
        { name: 'xbox.png', type: 'image', src: 'assets/screen-clean/misc/new-folder/xbox.jpg' }
      ]
    },
    'sc-misc-misc': {
      title: 'Misc',
      items: [
        { name: 'New Folder', type: 'folder', folderId: 'sc-misc-misc-nf' }
      ]
    },
    'sc-misc-misc-nf': {
      title: 'New Folder',
      items: [
        { name: 'New Folder 2', type: 'folder', folderId: 'sc-misc-misc-nf2' }
      ]
    },
    'sc-misc-misc-nf2': {
      title: 'New Folder 2',
      items: [
        { name: 'cryptotwitter', type: 'folder', folderId: 'sc-cryptotwitter' }
      ]
    },
    'sc-cryptotwitter': {
      title: 'cryptotwitter',
      items: [
        { name: 'cryptotwitter.png', type: 'image', src: 'assets/screen-clean/cryptotwitter/cryptotwitter.jpg' }
      ]
    }
  };

  // Register all folder windows
  var folderId;
  for (folderId in TREE) {
    if (TREE.hasOwnProperty(folderId)) {
      NevOS.registerWindow(folderId, {
        title: TREE[folderId].title,
        type: 'folder',
        width: 520,
        height: 360,
        icon: 'assets/icons/folder.png'
      });
    }
  }

  // Register folder app type
  NevOS.registerApp('folder', {
    build: function (config, windowId) {
      var frag = document.createDocumentFragment();
      var folderData = TREE[windowId];
      if (!folderData) return frag;

      var items = folderData.items;

      // Toolbar
      var toolbar = document.createElement('div');
      toolbar.className = 'finder-toolbar';
      toolbar.textContent = items.length + (items.length === 1 ? ' item' : ' items');
      frag.appendChild(toolbar);

      // Column headers
      var columns = document.createElement('div');
      columns.className = 'finder-columns';
      columns.innerHTML = '<span>Name</span><span>Date Modified</span><span>Size</span>';
      frag.appendChild(columns);

      // List
      var list = document.createElement('ul');
      list.className = 'finder-list';

      items.forEach(function (item) {
        var row = document.createElement('li');
        row.className = 'finder-row';

        var icon = item.type === 'folder' ? 'assets/icons/folder.png' :
                   item.type === 'video' ? 'assets/icons/quicktime.png' :
                   'assets/icons/clipping-picture.png';

        var nameSpan = document.createElement('span');
        nameSpan.className = 'finder-row__name';
        var iconImg = document.createElement('img');
        iconImg.className = 'finder-row__icon';
        iconImg.src = icon;
        iconImg.alt = '';
        iconImg.width = 16;
        iconImg.height = 16;
        nameSpan.appendChild(iconImg);
        nameSpan.appendChild(document.createTextNode(item.name));

        var dateSpan = document.createElement('span');
        dateSpan.className = 'finder-row__date';
        dateSpan.textContent = item.type === 'folder' ? '--' : 'May 2, 2025';

        var sizeSpan = document.createElement('span');
        sizeSpan.className = 'finder-row__size';
        sizeSpan.textContent = item.type === 'folder' ? '--' : '--';

        row.appendChild(nameSpan);
        row.appendChild(dateSpan);
        row.appendChild(sizeSpan);

        var isMob = NevOS.api && NevOS.api.isMobile && NevOS.api.isMobile();
        var eventName = isMob ? 'click' : 'dblclick';

        row.addEventListener(eventName, function () {
          if (item.type === 'folder') {
            NevOS.api.openWindow(item.folderId);
          } else if (item.type === 'video') {
            NevOS.api.openWindow(item.windowId);
          } else if (item.type === 'image') {
            var previewId = 'sc-img-' + item.src.replace(/[^a-zA-Z0-9]/g, '-');
            if (!NevOS.api.getWindowConfig(previewId)) {
              NevOS.registerWindow(previewId, {
                title: item.name + ' \u2014 Preview',
                type: 'preview',
                width: 520,
                height: 400,
                icon: 'assets/icons/preview.png',
                mediaSrc: item.src
              });
            }
            NevOS.api.openWindow(previewId);
          }
        });

        list.appendChild(row);
      });

      frag.appendChild(list);
      return frag;
    }
  });

})();
