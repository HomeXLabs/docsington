const process = require('process');
const cp = require('child_process');
const path = require('path');
const docsington = require('./src/main');
const parser = require('./src/repo-parser');

test('throws invalid words', async () => {
  await expect(docsington(10213)).rejects.toThrow('Value of words is not a string');
});

test('check returns "hello world"', async () => {
  docsington('hello world').then(function(result) {
    expect(result).toBe('hello world');
  });
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_WORDS'] = 'hello test runs!';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
});

// expect.arrayContaining(array)
test('Test getting all .md files from ./tests folder', () => {
  const expectedArray = ['file001.md', 'file002.md', 'file004.md'];
  let receivedArray = parser.repoParser('./tests');
  //expect(receivedArray).toEqual(expect.arrayContaining(expectedArray));
  expect(receivedArray).toEqual(expectedArray);
});

test('Test recursively getting all .md files from ./tests folder', () => {
  const expectedArray = ['tests/file001.md', 'tests/file002.md', 'tests/file004.md', 'tests/tests1/file005.md'];
  let receivedArray = [];
  parser.recursiveRepoParser('./tests', receivedArray);
  //expect(receivedArray).toEqual(expect.arrayContaining(expectedArray));
  expect(receivedArray).toEqual(expectedArray);
});
