function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var glslify = _interopDefault(require('glslify'));

function index (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      extensions = _ref.extensions,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? [] : _ref$transform;

  extensions = extensions || ['.glsl', '.vert', '.frag', '.vs', '.fs'];
  extensions = extensions.map(function (ext) {
    return ext.replace(/^\./, '').replace(/\./g, '\/.');
  }).join('|');
  var filter = new RegExp("\\.(" + extensions + ")$");
  return {
    name: 'esbuild-glslify',
    setup: function setup(build) {
      var basedir = process.cwd();
      build.onLoad({
        filter: filter
      }, function (args) {
        var contents = glslify.file(args.path, {
          basedir: basedir,
          transform: transform
        });
        return {
          contents: contents,
          loader: 'text'
        };
      });
    }
  };
}

module.exports = index;
