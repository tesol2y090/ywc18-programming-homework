const withFonts = require("next-fonts")
module.exports = withFonts({
  webpack(config, options) {
    return config
  },
})
const withImages = require("next-images")
module.exports = withImages(
  withFonts({
    webpack(config, options) {
      return config
    },
    // pass env from cli to frontend world
    // Note that for Next.js, NODE_ENV cannot be overridden
    env: {
      ENV: process.env.ENV,
    },
    basePath: "/ywc18-programming-homework",
    assetPrefix: "/ywc18-programming-homework/",
  })
)
