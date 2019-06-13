exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'http://localhost',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_files/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'appium-boilerplate'
}
