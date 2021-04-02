// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = `!@#$%^&*()_+`;
var upperCaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lowerCaseLetters = `abcdefghijklmnopqrstuvwxyz`;
var numbers = `1234567890`;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = ``;

  var upperCaseLetters = getUppercaseLetters();

  return password;
}
