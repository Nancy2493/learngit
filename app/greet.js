var config = require('./config.json');
// import styles from "./greet.css";
console.log(config);
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  // greet.textContent = "Hi there and greetings from JSON!";
  return greet;
};

