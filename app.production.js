const optimize = require('spike-optimize')

module.exports = {
  afterSpikePlugins: [...optimize({
    scopeHosting: true,
    aggressiveSplitting: true,
    minify: true
  })]
}
