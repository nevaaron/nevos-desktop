/* ============================================================
   LIMEWIRE — NevOS Module
   ============================================================ */
(function () {
  'use strict';

  var LIMEWIRE_FILES = [
    { name: 'linkin_park_numb_FINAL_FINAL.mp3', status: 'Complete', size: '3.2 MB' },
    { name: 'definitely_not_a_virus.exe', status: 'downloading', percent: 99 },
    { name: 'the_sims_2_crack_keygen.zip', status: 'downloading', percent: 47 },
    { name: 'limewire_pro_free.dmg', status: 'Complete', size: '8.1 MB' },
    { name: 'bohemian_rhapsody_[128kbps].mp3', status: 'downloading', percent: 72 },
  ];

  NevOS.registerApp('limewire', {
    build: function () {
      var frag = document.createDocumentFragment();

      var header = document.createElement('div');
      header.className = 'limewire-header';
      header.textContent = 'Downloads';
      frag.appendChild(header);

      var list = document.createElement('ul');
      list.className = 'limewire-file-list';

      LIMEWIRE_FILES.forEach(function (file) {
        var li = document.createElement('li');
        li.className = 'limewire-file';

        var nameSpan = document.createElement('span');
        nameSpan.className = 'limewire-file__name';
        nameSpan.textContent = file.name;
        li.appendChild(nameSpan);

        var statusSpan = document.createElement('span');
        if (file.status === 'downloading') {
          statusSpan.className = 'limewire-file__status limewire-file__status--downloading';
          statusSpan.innerHTML = file.percent + '% ' +
            '<span class="limewire-progress"><span class="limewire-progress__bar" style="width:' + file.percent + '%"></span></span>';
        } else {
          statusSpan.className = 'limewire-file__status';
          statusSpan.textContent = file.status + ' \u2014 ' + file.size;
        }
        li.appendChild(statusSpan);

        list.appendChild(li);
      });

      frag.appendChild(list);
      return frag;
    }
  });
})();
