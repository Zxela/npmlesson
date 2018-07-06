var chalk = require("chalk");

var message = "Hello " + chalk.red.bold.bgYellow("World");
console.log(message);