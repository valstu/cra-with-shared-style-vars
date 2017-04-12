const sassport = require('sassport');
const fs = require('fs');

const path = partial => `${__dirname}/../${partial}`;

sassport([
  require('./global-style-vars'), // eslint-disable-line global-require
]).render({
  file: path('src/index.scss'),
}, (err, result) => {
  if (err) {
    throw err;
  }
  const { css } = result;
  fs.writeFile(path('src/index.css'), css.toString());
});
