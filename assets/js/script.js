// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var combinedArray = [];
// Password Criteria Prompts
var passwordOptions = function () {
  var length = parseInt(
    prompt(
      "How many characters would you like your password to contain?  [ Must be between 8 - 128 ]"
    )
  );
  // Check password length for numeric value.
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // Check password length for being at least 8 characters.
  if (length < 8) {
    alert("Password length must be at least 8 characters in length.");
    return;
  }
  // Check password length for no more than 128 characters.
  if (length > 128) {
    alert("Password length must have a maximum length of 128 characters");
    return;
  }

  var lowercasePromptOption = confirm(
    "Would you like to have lower case characters?"
  );
  var uppercasePromptOption = confirm(
    "Would you like to have upper case characters?"
  );
  var numericPromptOption = confirm(
    "Would you like to have numeric characters?"
  );
  var specialCharactersPromptOption = confirm(
    "Would you like to have special characters?"
  );

  if (
    lowercasePromptOption == false &&
    uppercasePromptOption == false &&
    numericPromptOption == false &&
    specialCharactersPromptOption == false
  ) {
    alert("Must select at least one character type");
    return;
  }

  var userPasswordOptions = {
    length: length,
    lowercasePromptOption: lowercasePromptOption,
    uppercasePromptOption: uppercasePromptOption,
    numericPromptOption: numericPromptOption,
    specialCharactersPromptOption: specialCharactersPromptOption,
  };

  return userPasswordOptions;
};

// Generate a password based on user password criteria.
var generatePassword = function () {
  var passwordCriterias = passwordOptions();

  for (var i = 0; i < passwordCriterias.length; i++) {
    if (passwordCriterias.lowercasePromptOption === true){
      combinedArray.push();
    }
    if(passwordCriterias.uppercasePromptOption === true ){

    }
    if (passwordCriterias.numericPromptOption === true ){

    }
    if (passwordCriterias.specialCharactersPromptOption === true){

    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
