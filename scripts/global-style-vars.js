const styles = require('../src/constants/styles');
const sassport = require('sassport');

module.exports = sassport.module('global-style-vars')
  .globals(styles);
