import { default as glslify } from 'glslify'

export default function({extensions, transform = []} = {}) {
    extensions = extensions || ['.glsl', '.vert', '.frag', '.vs', '.fs']
    extensions = extensions.map(ext => ext.replace(/^\./, '').replace(/\./g, '\/.')).join('|')
    const filter = new RegExp(`\\.(${extensions})$`)

    return {
        name: 'esbuild-glslify',
        setup(build) {
            let basedir = process.cwd()

            build.onLoad({ filter }, (args) => {
                let contents = glslify.file(args.path, {basedir, transform})
                
                return {
                    contents,
                    loader: 'text'
                }
            })
        }
    }
}