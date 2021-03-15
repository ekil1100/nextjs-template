module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx,ts$/,
      use: ['astroturf/loader'],
    })
    return config
  },
}
