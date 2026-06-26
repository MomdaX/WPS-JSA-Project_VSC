// ========== 动态对象列表：从 manifest.json 加载，支持随时增删 JSON 文件 ==========
var ALL_OBJECTS = [];
var GROUP_LETTERS = [];
var currentObjName = '';
var previousObjName = '';

function loadObjectList(callback) {
  fetch('api_json/manifest.json')
    .then(function(res) {
      if (!res.ok) throw new Error('manifest not found');
      return res.json();
    })
    .then(function(manifest) {
      ALL_OBJECTS = manifest.all || [];
      GROUP_LETTERS = manifest.letters || [];
      callback();
    })
    .catch(function() {
      fetch('api_json/')
        .then(function(res) {
          if (!res.ok) throw new Error('directory listing not supported');
          return res.text();
        })
        .then(function(html) {
          var matches = html.match(/href="([^"]+\.json)"/gi);
          if (!matches) throw new Error('no json files found');
          var files = matches.map(function(m) {
            return m.replace('href="', '').replace('.json"', '');
          }).filter(function(f) {
            return f !== 'manifest';
          }).sort();
          ALL_OBJECTS = files;
          var letters = {};
          files.forEach(function(name) {
            letters[name.charAt(0).toUpperCase()] = true;
          });
          GROUP_LETTERS = Object.keys(letters).sort();
          callback();
        })
        .catch(function() {
          ALL_OBJECTS = [];
          GROUP_LETTERS = [];
          callback();
        });
    });
}

function buildNav() {
  var grouped = _.groupBy(ALL_OBJECTS, function(name) {
    return name.charAt(0).toUpperCase();
  });

  _.forEach(GROUP_LETTERS, function(letter) {
    var groupEl = document.getElementById('navGroup' + letter);
    if (!groupEl) return;

    var items = grouped[letter] || [];
    if (_.isEmpty(items)) {
      groupEl.style.display = 'none';
      return;
    }

    groupEl.innerHTML = '<div class="nav-group-title" onclick="toggleNavGroup(this)">' + letter +
      '<button class="nav-group-toggle" onclick="event.stopPropagation();toggleNavGroup(this.parentElement);">▼</button></div>';

    _.forEach(items, function(objName) {
      var a = document.createElement('a');
      a.className = 'nav-item';
      a.textContent = objName;
      a.href = '?obj=' + objName;
      a.setAttribute('data-obj', objName);
      a.onclick = function(e) {
        e.preventDefault();
        navigateToObject(this.getAttribute('data-obj'));
      };
      groupEl.appendChild(a);
    });
  });
}

function navigateToObject(objName) {
  if (objName === currentObjName) return;

  history.pushState(null, '', '?obj=' + objName);

  _.forEach(document.querySelectorAll('.nav-item'), function(item) {
    item.classList.remove('active');
  });

  var activeItem = document.querySelector('[data-obj="' + objName + '"]');
  if (activeItem) {
    activeItem.classList.add('active');
    activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  currentObjName = objName;
  loadAndRender(objName);
}

function toggleNavGroup(titleEl) {
  var group = titleEl.parentElement;
  var isOpen = !group.classList.contains('collapsed');
  _.forEach(document.querySelectorAll('.nav-group'), function(g) { g.classList.add('collapsed'); });
  if (!isOpen) group.classList.remove('collapsed');
}