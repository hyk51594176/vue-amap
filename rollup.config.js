import path from 'path';
import ts from 'rollup-plugin-typescript2'
const resolve = p => path.resolve(__dirname, p)
const name='vue-aMap'
const config  = [
  {
    file: `dist/${name}.js`,
    format: 'umd',
    env: 'development'
  },
  {
    file: `dist/${name}.min.js`,
    format: 'umd',
    env: 'production'
  },
  {
    file: `dist/${name}.common.js`,
    format: 'cjs'
  },
  {
    file: `dist/${name}.esm.js`,
    format: 'esm'
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: "src/index.ts",
    external: ['vue-property-decorator'],
    output: {
      file: opts.file,
      format: opts.format,
      name: 'VueAMap',
      exports: 'named',
      globals: {
        'vue-property-decorator':'VuePropertyDecorator'
      }
    },
    plugins:[
      ts({
        check: true,
        tsconfig: resolve('tsconfig.json'),
        cacheRoot: resolve('node_modules/.rts2_cache'),
      })
    ]
  }

  return config
}

export default config
