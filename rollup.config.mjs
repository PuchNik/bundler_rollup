import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import styles from 'rollup-plugin-styles'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import image from 'rollup-plugin-image';

export default {
    input: './index.js',
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
    },

    plugins: [
        resolve(),
        babel({babelHelpers: 'bundled'}),
        styles(),
        image(),
        serve(),
        livereload(),
    ]
}

