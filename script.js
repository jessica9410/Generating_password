// Assignment Code
var generateBtn = document.querySelector("#generate");
//character sets
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
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
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

var upperCasedCharacters = [
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
var allCharacters = [];
// Write password to the #password input

function generatePassword() {
    var passwordLength = prompt(
        "how many characters would you like your password to contain?"
    );
    console.log(passwordLength);

    //password length query
    if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
        alert(
            "password length must be at least 8 characters or less than 128 characters"
        );

        //numbers query
    } else {
        var hasNumber = confirm("Click OK to confirm including numbers");
        if (hasNumber) {
            allCharacters = allCharacters.concat(numericCharacters);
            console.log(allCharacters);
            console.log("yes to numbers");
        } else if (!hasNumber) {
            console.log("no to numbers");
        }
        console.log("it worked");
        //special characters query

        var hasSpecialCharacters = confirm(
            "Click OK to confirm special characters"
        );
        if (hasSpecialCharacters) {
            allCharacters = allCharacters.concat(specialCharacters);
            console.log(allCharacters);
            console.log("yes to special characters");
        } else if (!hasSpecialCharacters) {
            console.log("no to special characters");
        }

        //uppercase query

        var hasUpperCasedCharacters = confirm("Click OK to confirm uppercase");
        if (hasUpperCasedCharacters) {
            allCharacters = allCharacters.concat(upperCasedCharacters);
            console.log(allCharacters);
            console.log("yes to upper case");
        } else if (!hasUpperCasedCharacters) {
            console.log("no to upper case");
        }

        //lowercase query

        var haslowerCasedCharacters = confirm("Click OK to confirm lowercase");
        if (haslowerCasedCharacters) {
            allCharacters = allCharacters.concat(lowerCasedCharacters);
            console.log(allCharacters);
            console.log("yes to lower case");
        } else if (!haslowerCasedCharacters) {
            console.log("no to lower case");
        }

        if (
            haslowerCasedCharacters === false &&
            hasUpperCasedCharacters === false &&
            ((hasSpecialCharacters === false) === hasNumber) === false
        ) {
            alert("Select at least one type");
            generatePassword();
        } else console.log("valid options chosen");
    }

    //selecting random characters
    let password = ".";
    for (let i = 0; i < passwordLength; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    return password;
}

//write password and password input
function writePassword() {
    var password = generatePassword();
    console.log(password);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
document.getElementById("password").value = "";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);