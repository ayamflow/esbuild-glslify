import { default as glsl } from 'glslify'

export default function({extensions}) {
    extensions = extensions || ['.glsl', '.vert', '.frag', '.vs', '.fs']
    extensions = extensions.map(ext => ext.replace(/^\./, '').replace(/\./g, '\/.')).join('|')
    const filter = new RegExp(`\\.(${extensions})$`)

    return {
        name: 'esbuild-glslify',
        setup(build) {
            build.onLoad({ filter }, async (args) => {
                let contents = glsl.file(args.path)

                return {
                    contents,
                    loader: 'text'
                }
            })
        }
    }
}