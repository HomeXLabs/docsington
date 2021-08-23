// eslint-disable-next-line no-unused-vars
const testFolder = './tests/';
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

// eslint-disable-next-line no-unused-vars
function processFiles(files) {
    for (const filename in files) {
        var result = cp.execSync(`git log -1 --pretty=format:%ci ${filename}`);
        console.log(result);
    }
}


let repoParser = function (dirPath) {

    let allFiles = fs.readdirSync(dirPath);
    let mdFiles = [];
    for (const filename of allFiles)
    {
        var extension = filename.replace(/.*\./, '').toLowerCase();
        if (extension === "md") {
            mdFiles.push(filename);
        }
    }
    return mdFiles;
};

let recursiveRepoParser = function (dirPath, arrayOfFiles) {

    let allFiles = fs.readdirSync(dirPath);
    for (const filename of allFiles)
    {
        let fullPath = path.join(dirPath, filename);
        if (fs.statSync(fullPath).isDirectory()) {
            recursiveRepoParser(fullPath, arrayOfFiles);
        }
        else {
            var extension = filename.replace(/.*\./, '').toLowerCase();
            if (extension === "md") {
                arrayOfFiles.push(fullPath);
            }
        }
    }
    //processFiles(mdFiles);
};

module.exports = {
    repoParser,
    recursiveRepoParser
};
