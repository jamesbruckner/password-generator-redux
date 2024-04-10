// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%,&*{}[]=+\/";
var chosenCharacters = "";

// Write password to the #password input
function writePassword() {
  chosenCharacters = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var result = "";
  var length = prompt("Your password can be between 8 and 128 characters.");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("choose a number between 8 and 128 please.");
    return generatePassword();
  }
  var hasUpper = confirm("include upper case letters?");
  var hasLower = confirm("include lower case letters?");
  var hasNumbers = confirm("include numbers?");
  var hasSpecial = confirm("include special characters?");
  if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
    alert("You must choose at least one type of character!");
    return generatePassword();
  }
  if (hasUpper) {
    chosenCharacters += upper;
  }
  if (hasLower) {
    chosenCharacters += lower;
  }
  if (hasNumbers) {
    chosenCharacters += numbers;
  }
  if (hasSpecial) {
    chosenCharacters += special;
  }
  for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }
  return result;
}