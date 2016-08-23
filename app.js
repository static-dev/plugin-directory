const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const es2016 = require('babel-preset-es2016')
const Records = require('spike-records')

const locals = {
  githubUrl: 'https://github.com/reshape/reshape',
  gitterUrl: 'https://gitter.im/reshape',
  documentationUrl: 'https://github.com/reshape/reshape#writing-a-plugin'
}

const pluginBlacklist = ['reshape']

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sml',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sml', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({ webpack: ctx, locals })
  },
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [es2016] },
  plugins: [
    new Records({
      addDataTo: locals,
      plugins: {
        url: 'https://api.npms.io/search?term=reshape-plugin',
        transform: (res) => {
          return res.results.filter((p) => {
            return pluginBlacklist.indexOf(p.module.name) < 0
          })
        }
      }
    })
  ]
}
