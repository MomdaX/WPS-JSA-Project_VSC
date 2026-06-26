var fs = require('fs');
var path = require('path');

var apiDir = path.resolve(process.cwd(), 'preview', 'api_json');
var manifestPath = path.join(apiDir, 'manifest.json');

try {
  var files = fs.readdirSync(apiDir)
    .filter(function(f) {
      return f.endsWith('.json') && f !== 'manifest.json';
    })
    .map(function(f) {
      return f.replace('.json', '');
    })
    .sort();

  var grouped = {};
  files.forEach(function(name) {
    var letter = name.charAt(0).toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(name);
  });

  var manifest = {
    total: files.length,
    letters: Object.keys(grouped).sort(),
    grouped: grouped,
    all: files
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('manifest.json OK: ' + files.length + ' objects');
} catch (e) {
  console.error('ERR: ' + e.message);
}