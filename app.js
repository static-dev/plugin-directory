const htmlStandards = require('spike-html-standards')
const cssStandards = require('spike-css-standards')
const es2015 = require('babel-preset-es2015')
const Records = require('spike-records')

const name = 'spike'

const locals = {
  title: `${name[0].toUpperCase() + name.slice(1)} Plugin Directory`,
  githubUrl: `https://github.com/static-dev/${name}`,
  gitterUrl: `https://gitter.im/static-dev/${name}`,
  documentationUrl: `https://webpack.github.io/docs/plugins.html`
}

const pluginBlacklist = [name, `${name}-core`]

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '**/*.sgr',
    css: '**/*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*'],
  reshape: (ctx) => {
    return htmlStandards({ webpack: ctx, locals })
  },
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [es2015] },
  plugins: [
    new Records({
      addDataTo: locals,
      plugins: {
        url: `https://api.npms.io/v2/search?q=keywords:${name}plugin`,
        transform: (res) => {
          return res.results.filter((p) => {
            return pluginBlacklist.indexOf(p.module.name) < 0
          })
        }
      }
    })
  ]
}
