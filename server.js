const express = require('express');
const { join: joinPath, resolve: resolvePath } = require('path');

const { basePath, port } = require('./config');
const pkg = require('./package.json');

const root = __dirname;

const app = express();

app.get(`/${basePath}`, (req, res) => res.send({
  version: pkg.version
}));

app.use(express.static(joinPath(root, 'dist')));
app.use('/node_modules', express.static(resolvePath(joinPath(root, 'node_modules'))));

module.exports = function() {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      console.log(`Application listening on port ${port}`);
      console.log(`API base path: /${basePath}`);
      resolve();
    });

    app.on('error', reject);
  })
};