const commander = {
  play: (action) => {
    console.log("playing");
  },
  pause: (action) => {
    console.log("paused");
  },
  skip: (action) => {
    console.log("skips");
  },
  unsupportedAction: (action) => {
    console.log(`${action} is an unsupported action and being logged`);
  },
};

const actions = ["play", "skip", "skip", "pause", "elisabeth"];

actions.forEach((action) => {
  // const actionCommand = commander[action] ?? commander.unsupportedAction;

  const actionCommand =
    commander[action] != undefined || commander[action] != null
      ? commander[action]
      : commander.unsupportedAction;

  actionCommand(action);
});
