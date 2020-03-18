// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Taking input for number of characters and validating the input
  var isInvalid = true;
  while (isInvalid) {
    var passLength = prompt("How many characters would you like in your password? (Must be between 8 and 128)");
    
    // Convert input to number
    passLength = Number(passLength);

    // Condition to end the function if user hits cancel. Number.isNaN(passlength) will return true if the user entered any characters other than numbers
    if (passLength !== null) {
      if (passLength < 8 || passLength > 128 || Number.isNaN(passLength)) {
        alert("Your input must be a number between 8 and 128.");
      }
      else {
        isInvalid = false;
      }
    }
    else {
      return "You hit cancel!";
    }
  }

  // Taking input for what type of characters user wants, and confirming that they made at least 1 selection
  isInvalid = true;
  while (isInvalid) {
    // Checking if user wants uppercase letters
    var upper = confirm("Would you like to include uppercase letters in your password?");

    // Checking if user wants lowercase letters
    var lower = confirm("Would you like to include lowercase letters in your password?");

    // Checking if user wants numbers
    var numbers = confirm("Would you like to include numbers in your password?");

    // Checking if user wants special characters
    var spec = confirm("Would you like to include special characters in your password?");

    if (upper == false && lower == false && numbers == false && spec == false) {
      alert('You must select at least one type of character.')
    }
    else {
      isInvalid = false;
    }
  }

  // Counter for number of character types
  var nTypes = 0;
  // Array of character types
  var charTypes = new Array();
  if (upper) {
    charTypes.push(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    nTypes++;
  }
  if (lower) {
    charTypes.push(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    nTypes++;
  }
  if (numbers) {
    charTypes.push(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    nTypes++;
  }
  if (spec) {
    charTypes.push(["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "]", "}", "\\", "|", ":", ";", "'", "\"", "<", ">", ",", ".", "?"]);
    nTypes++;
  }

  // Generating password
  // Initialize array for password
  var ans = new Array(passLength);
  // Iterate randomly through charTypes array and add random selections to ans array
  for (var i = 0; i < passLength; i++) {
    // Random Row in charTypes
    var r = Math.floor(Math.random() * nTypes);
    
    // Random column from that row
    var c = Math.floor(Math.random() * charTypes[r].length);
    
    ans[i] = charTypes[r][c];
  }

  // Join(separator) converts the array to a string. Default separator is ","
  return ans.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
