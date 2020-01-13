const chalk = require('chalk');
const { mkdirs, writeFile } = require('fs-extra');
const { dirname, relative: relativePath } = require('path');

const { apiUrl, indexPath, indexTemplatePath, root } = require('./config');
const { compileIndexTemplate } = require('./utils');

Promise
  .resolve()
  .then(build)
  .catch(err => {
    console.error(chalk.red(err.stack));
    process.exit(2);
  });

async function build() {
  console.log(chalk.cyan(`API URL: ${JSON.stringify(apiUrl)} (configure with $API_URL)`));

  console.log(chalk.yellow(`Reading and compiling template ${relativePath(root, indexTemplatePath)}...`));
  const indexTemplate = await compileIndexTemplate();

  console.log(chalk.yellow(`Saving result to ${relativePath(root, indexPath)}...`));
  await mkdirs(dirname(indexPath));
  await writeFile(indexPath, indexTemplate({ apiUrl }), 'utf8');

  console.log(chalk.green('Done!'));
}