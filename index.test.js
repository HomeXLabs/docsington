const process = require('process');
const cp = require('child_process');
const path = require('path');
const docsington = require('./src/main');

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
})
