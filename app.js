const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
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
  matchers: { html: '**/*.sgr', css: '**/*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*'],
  reshape: htmlStandards({ locals }),
  postcss: cssStandards(),
  babel: jsStandards(),
  plugins: [
    new Records({
      addDataTo: locals,
      plugins: {
        url:
        `https://api.npms.io/v2/search?q=keywords:${name}plugin&size=100`,
        transform: (res) => {
          return res.results.filter((p) => {
            return pluginBlacklist.indexOf(p.package.name) < 0
          })
        }
      }
    })
  ]
}
