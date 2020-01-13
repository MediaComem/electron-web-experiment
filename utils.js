const { readFile } = require('fs-extra');
const { template, templateSettings } = require('lodash');

const { indexTemplatePath } = require('./config');

exports.compileIndexTemplate = async function() {
  const indexTemplateContents = await readFile(indexTemplatePath)
  // This avoids interpolation of ${} by Lodash (used in JavaScript template literals).
  templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  return indexTemplate = template(indexTemplateContents);
};