// ========== 中文搜索索引：存储中英文映射关系 ==========
var chineseSearchIndex = {};
var chineseIndexLoaded = false;
var isLoadingIndex = false;
var INDEX_STORAGE_KEY = 'wps_api_search_index_v2';
var INDEX_VERSION_KEY = 'wps_api_index_version';

var searchDebounceTimer = null;

function buildChineseSearchIndex(callback) {
  if (chineseIndexLoaded) {
    if (callback) callback();
    return;
  }

  if (isLoadingIndex) {
    console.log('⏳ 索引正在构建中，请稍候...');
    return;
  }

  isLoadingIndex = true;

  try {
    var cachedIndex = localStorage.getItem(INDEX_STORAGE_KEY);
    var cachedVersion = localStorage.getItem(INDEX_VERSION_KEY);
    var currentVersion = ALL_OBJECTS.length + '_' + ALL_OBJECTS.slice(0, 5).join(',');

    if (cachedIndex && cachedVersion === currentVersion) {
      chineseSearchIndex = JSON.parse(cachedIndex);
      chineseIndexLoaded = true;
      isLoadingIndex = false;
      console.log('✅ 从缓存加载中文搜索索引，共 ' + Object.keys(chineseSearchIndex).length + ' 个对象');
      if (callback) callback();
      return;
    }
  } catch (e) {
    console.warn('⚠️ 读取缓存失败，将重新构建', e);
  }

  console.log('🔍 首次使用中文搜索，正在构建索引（约需2-3秒）...');
  showSearchLoading(true);

  chineseSearchIndex = {};
  var loadedCount = 0;
  var totalCount = ALL_OBJECTS.length;

  _.forEach(ALL_OBJECTS, function(objName) {
    fetch('api_json/' + objName + '.json')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        chineseSearchIndex[objName] = extractChineseText(data);
        loadedCount++;

        if (loadedCount % 20 === 0) {
          console.log('📊 索引进度：' + loadedCount + '/' + totalCount);
        }

        if (loadedCount === totalCount) {
          saveIndexToStorage(currentVersion);
          chineseIndexLoaded = true;
          isLoadingIndex = false;
          showSearchLoading(false);
          console.log('✅ 中文搜索索引构建完成并已缓存，共 ' + totalCount + ' 个对象');

          performSearch();
          if (callback) callback();
        }
      })
      .catch(function() {
        chineseSearchIndex[objName] = '';
        loadedCount++;

        if (loadedCount === totalCount) {
          saveIndexToStorage(currentVersion);
          chineseIndexLoaded = true;
          isLoadingIndex = false;
          showSearchLoading(false);
          console.log('⚠️ 中文搜索索引构建完成（部分加载失败），已缓存');

          performSearch();
          if (callback) callback();
        }
      });
  });

  setTimeout(function() {
    if (!chineseIndexLoaded) {
      console.log('⏳ 索引仍在构建中，已完成：' + loadedCount + '/' + totalCount);
    }
  }, 2000);
}

function saveIndexToStorage(version) {
  try {
    var indexStr = JSON.stringify(chineseSearchIndex);

    if (indexStr.length > 5 * 1024 * 1024) {
      console.warn('⚠️ 索引过大（>' + (indexStr.length / 1024 / 1024).toFixed(2) + 'MB），可能影响性能');
    }

    localStorage.setItem(INDEX_STORAGE_KEY, indexStr);
    localStorage.setItem(INDEX_VERSION_KEY, version);
    console.log('💾 索引已保存到本地存储，大小：' + (indexStr.length / 1024).toFixed(1) + 'KB');
  } catch (e) {
    console.error('❌ 保存索引失败', e);
  }
}

function showSearchLoading(show) {
  var searchBox = document.querySelector('.search-box');
  if (!searchBox) return;

  var loadingEl = searchBox.querySelector('.search-loading');

  if (show && !loadingEl) {
    loadingEl = document.createElement('div');
    loadingEl.className = 'search-loading';
    loadingEl.innerHTML = '<span>🔍</span> 正在构建中文搜索索引...';
    searchBox.appendChild(loadingEl);
  } else if (!show && loadingEl) {
    loadingEl.remove();
  }
}

function clearSearchCache() {
  try {
    localStorage.removeItem(INDEX_STORAGE_KEY);
    localStorage.removeItem(INDEX_VERSION_KEY);
    chineseSearchIndex = {};
    chineseIndexLoaded = false;
    console.log('🗑️ 中文搜索缓存已清除');
    alert('✅ 搜索缓存已清除，下次中文搜索将重新构建索引');
  } catch (e) {
    console.error('❌ 清除缓存失败', e);
  }
}

window.clearSearchCache = clearSearchCache;

function extractChineseText(data) {
  var texts = [];

  if (!data) return '';

  if (data.description) {
    texts.push(stripHtmlTags(data.description));
  }

  if (data.summary) {
    texts.push(stripHtmlTags(data.summary));
  }

  if (_.isArray(data.properties)) {
    _.forEach(data.properties, function(prop) {
      if (prop.description) texts.push(stripHtmlTags(prop.description));
      if (prop.summary) texts.push(stripHtmlTags(prop.summary));
    });
  }

  if (_.isArray(data.functions)) {
    _.forEach(data.functions, function(func) {
      if (func.description) texts.push(stripHtmlTags(func.description));
      if (func.summary) texts.push(stripHtmlTags(func.summary));
    });
  }

  return texts.join(' ');
}

function stripHtmlTags(html) {
  if (!html) return '';
  var tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function containsChinese(str) {
  return /[\u4e00-\u9fa5]/.test(str);
}

function filterNav() {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(function() {
    performSearch();
  }, 400);
}

function performSearch() {
  var keyword = _.trim(document.getElementById('navSearch').value);
  var keywordLower = _.toLower(keyword);
  var isChineseKeyword = containsChinese(keyword);

  if (isChineseKeyword && !chineseIndexLoaded && !isLoadingIndex) {
    buildChineseSearchIndex();
    return;
  }

  if (isChineseKeyword && isLoadingIndex) {
    console.log('⏳ 索引构建中，请等待...');
    return;
  }

  _.forEach(document.querySelectorAll('.nav-item'), function(item) {
    var objName = item.getAttribute('data-obj');
    var objNameLower = _.toLower(objName);
    var isMatch = false;

    if (keyword === '') {
      isMatch = false;
    } else if (isChineseKeyword && chineseIndexLoaded) {
      var chineseText = chineseSearchIndex[objName] || '';
      isMatch = _.toLower(chineseText).indexOf(keywordLower) !== -1;
    } else if (!isChineseKeyword) {
      isMatch = _.includes(objNameLower, keywordLower);
    }

    item.classList.toggle('hidden', keyword !== '' && !isMatch);
  });

  _.forEach(document.querySelectorAll('.nav-group'), function(group) {
    var visibleItems = group.querySelectorAll('.nav-item:not(.hidden)');

    if (keyword === '') {
      group.style.display = '';
      group.classList.add('collapsed');
    } else {
      if (visibleItems.length > 0) {
        group.style.display = '';
        group.classList.remove('collapsed');
      } else {
        group.style.display = 'none';
      }
    }
  });
}