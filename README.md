# esbuild-glslify
esbuild plugin for glslify

### Installation :package:

```bash
npm i ayamflow/esbuild-glslify -S
```

### Usage :book:

> :information_source: Refer to the [esbuild plugins docs](https://esbuild.github.io/plugins/#using-plugins)

```js
import esbuild from 'esbuild'
import glslify from 'esbuild-glslify'

esbuild.build({
    plugins: [glslify()]
})
```

Or if you want to use specific extensions:
(defaults to *.glsl, .vert, .frag, .vs, .fs*)
```js

import esbuild from 'esbuild'
import glslify from 'esbuild-glslify'

const plugin = glslify({
    extensions: ['.glsl', '.custom.shader']
})

esbuild.build({
    plugins: [plugin]
})
```

It supports [source transforms](https://github.com/glslify/glslify#source-transforms) as well:
```js

import esbuild from 'esbuild'
import glslify from 'esbuild-glslify'

esbuild.build({
    plugins: [glslify({
        transform: ['glslify-hex']
    })]
})
```

### License :pencil:

MIT. See [LICENSE](http://github.com/ayamflow/esbuild-glslify/blob/master/LICENSE) for details.