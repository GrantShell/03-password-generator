// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = `!@#$%^&*()_+`;
var upperCaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lowerCaseLetters = `abcdefghijklmnopqrstuvwxyz`;
var numbers = `1234567890`;
var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpecialCharacters;
var passwordVariables;
var userSelection;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start

function generatePassword() {
  // getting user info
  passwordLength = prompt(
    `How many characters will be in your new password? Please choose between 8 and 128.`
  );
  console.log("Password Length" + passwordLength);

  if (!passwordLength) {
    alert(`You must enter a value!!!`);
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(`Please choose a number between 8 and 128`);
    console.log(`Password Length` + passwordLength);
  } else {
    confirm;
    confirmUpperCase = confirm(`Do you want to include upper case letters?`);
    console.log(`Upper Case` + confirmUpperCase);
    confirmLowerCase = confirm(`Do you want to include lower case letters?`);
    console.log(`Lower Case` + confirmLowerCase);
    confirmSpecialCharacters = confirm(
      `Do you want to include special characters?`
    );
    console.log(`Special Characters` + confirmSpecialCharacters);
    confirmNumbers = confirm(`Do you want to include numbers?`);
    console.log("Numbers" + confirmNumbers);
  }
  if (
    !confirmUpperCase &&
    !confirmLowerCase &&
    !confirmSpecialCharacters &&
    !confirmUpperCase
  ) {
    userSelection = alert(`Please choose a selection`);
  }

  for (var i = 0; (i = passwordLength); i++) {
    var userSelection =
      passwordVariables[Math.floor(Math.random() * passwordVariables.length)];
    console.log(userSelection);
  }
}
