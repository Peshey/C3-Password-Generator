// Assignment Code
var generateBtn = document.querySelector("#generate");

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", ":"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  let length = (prompt("Enter the number of characters: (from 8 to 128)"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.");
    return '';
  } 

  let includeUppercase = confirm("Include uppercase letters?")
  let includeLowercase = confirm("Include lowercase letters?")
  let includeNumbers = confirm("Include numbers?")
  let includeSpecial = confirm("Include special characters?");

  let characters = [];

  if (includeUppercase) {
    characters = characters.concat(upperCase);
  }
  if (includeLowercase) {
    characters = characters.concat(lowerCase);
  }
  if (includeNumbers) {
    characters = characters.concat(numbers);
  }
  if (includeSpecial) {
    characters = characters.concat(specialChar);
  }

  password = "";
  for (var i = 0; i < length; i++) {
    let genPassword = Math.floor(Math.random() * characters.length);
    password += characters[genPassword];
  }
  return password;
}