const core = require('@actions/core');
const docsington = require('./src/main');


// most @actions toolkit packages have async methods
async function run() {
  try {
    // TODO this input needs to be updated to match docsington
    const words = core.getInput('words');
    core.info(`printing ${words} ...`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await docsington(words);
    core.info((new Date()).toTimeString());

    // TODO change this to be a real output for docsington
    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
