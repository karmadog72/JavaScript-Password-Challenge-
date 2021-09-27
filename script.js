// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//test push
function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var symbols = "!@#$%^&*()+";
  var passwordLength = parseInt(prompt("Enter password length?"));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "Invalid password length. Please enter valid password between 8-128 characters";
  }
  var upperYes = confirm("Uppercase letter confirmed"); // true or false
  var lowerYes = confirm("Lower case letter confirmed");
  var numberYes = confirm("Number confirmed");
  var symbolsYes = confirm("symbols confirmed");
  if (!upperYes && !lowerYes && !numberYes && !symbolsYes) {
    return "Invalid selection, must choose at least one.";
  }
  var confirmedSelections = [];
  if (upperYes) {
    confirmedSelections += upperCase;
  }
  if (lowerYes) {
    confirmedSelections += lowerCase;
  }
  if (numberYes) {
    confirmedSelections += number;
  }
  if (symbolsYes) {
    confirmedSelections += symbols;
  }
  console.log(confirmedSelections);
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * confirmedSelections.length);
    password += confirmedSelections[index];
  }
  console.log(password);
}
