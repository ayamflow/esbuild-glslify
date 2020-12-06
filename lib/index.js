function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var glsl = _interopDefault(require('glslify'));

function index (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      extensions = _ref.extensions;

  extensions = extensions || ['.glsl', '.vert', '.frag', '.vs', '.fs'];
  extensions = extensions.map(function (ext) {
    return ext.replace(/^\./, '').replace(/\./g, '\/.');
  }).join('|');
  var filter = new RegExp("\\.(" + extensions + ")$");
  return {
    name: 'esbuild-glslify',
    setup: function setup(build) {
      build.onLoad({
        filter: filter
      }, function (args) {
        var contents = glsl.file(args.path);
        return {
          contents: contents,
          loader: 'text'
        };
      });
    }
  };
}

module.exports = index;
