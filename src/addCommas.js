function addCommas(number) {
  // Convert the number to a string to use the built-in toLocaleString method
  return number.toLocaleString("en-US");
}

module.exports = addCommas;
