const repoParser = require('./repo-parser');
const metadata = require('./metadata');
const ghIssues = require('./github-issues');



let docsington = function (words) {
  return new Promise((resolve) => {
    if (typeof words !== 'string') {
      throw new Error('Value of words is not a string');
    }

    // TODO
    // 1. read files from repo
    // 2. Get metadata for each file
    // 3. determin which files need to be reviewd
    // 4. Write github issuse for each review that is needed

    resolve(words);
  });
};

module.exports = docsington;
