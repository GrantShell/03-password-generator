// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = `!@#$%^&*()_+`;
var upperCaseLetters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var lowerCaseLetters = `abcdefghijklmnopqrstuvwxyz`;
var numbers = `1234567890`;
var passwordLength = 0;
var confirmUpperCase = false;
var confirmLowerCase = false;
var confirmNumbers = false;
var confirmSpecialCharacters = false;
var characterBank = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Generated Password", password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Start

function generatePassword() {
  // getting user info
  passwordLength = Number.parseInt(
    prompt(
      `How many characters will be in your new password? Please choose between 8 and 128.`
    )
  );
  console.log("Password Length" + passwordLength);

  if (!passwordLength) {
    alert(`You must enter a value!!!`);
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(`Please choose a number between 8 and 128`);
    console.log(`Password Length` + passwordLength);
  } else {
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

  //We need to add all available characters to userSelection so we can actually use them
  if (confirmLowerCase) {
    characterBank += lowerCaseLetters;
  }
  if (confirmUpperCase) {
    characterBank += upperCaseLetters;
  }
  if (confirmSpecialCharacters) {
    characterBank += specialCharacters;
  }
  if (confirmNumbers) {
    characterBank += numbers;
  }
  console.log("User Selection ->", characterBank);

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter =
      characterBank[Math.floor(Math.random() * characterBank.length)];
    console.log("Random Character", randomCharacter);
    generatedPassword += randomCharacter;
  }
  return generatedPassword;
}
