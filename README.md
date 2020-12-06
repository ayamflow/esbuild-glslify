# esbuild-glslify
esbuild plugin for glslify

> :warning: Disclaimer: this is a very barebone, naive glslify plugin for esbuild. I have only tested simple use cases and don't use transforms.


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

### Roadmap

- Transforms: tbh I'm not sure how glslify transform streams work, but if you know let me know!

### License :pencil:

MIT. See [LICENSE](http://github.com/ayamflow/esbuild-glslify/blob/master/LICENSE) for details.