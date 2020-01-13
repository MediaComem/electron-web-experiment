const { join: joinPath } = require('path');
const { URL } = require('url');

const root = __dirname;

exports.apiUrl = process.env.API_URL || 'http://localhost:3000/api';
exports.indexTemplatePath = joinPath(root, 'index.html.tpl');
exports.indexPath = joinPath(root, 'dist', 'index.html');
exports.root = root;

const parsedApiUrl = new URL(exports.apiUrl);
exports.port = process.env.PORT || parsedApiUrl.port || 3000;
exports.basePath = process.env.BASE_PATH || parsedApiUrl.pathname.replace(/(?:^\/|\/$)/, '');