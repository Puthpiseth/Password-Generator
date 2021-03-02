

 //Assigning all variable
let numbers = "0123456789";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let speChars = "~!@#$%^&*()_+-=";
let passwordLength;
let result= "";
 
// Clicking the button to generate a password
function generatePassword() {
 
    // WHEN prompted for the length of the password
    passwordLength = prompt("Please enter any numbers between 8 and 128!");
 
    // When I chose a password's length null or less than 8 characters or more than 128 characters 
    // or the password's length is not a number
    if ((passwordLength === "") || (passwordLength < 8) || (passwordLength > 128) || 
    (isNaN(passwordLength))) {
        alert(" Is not a valid passwordLength. Try Again!");
 
        passwordLength = prompt("Please enter any numbers between 8 and 128!");
 
        // generatePassword();
    };
 
    // When I chose a password's length greater or equal to 8 or less than or equal to 128
    numberRespond = confirm("Should numbers be included?");
    lowercaseRespond = confirm("should lowercase be included?");
    uppercaseRespond = confirm("Should uppercase be included?");
    speCharRespond = confirm("Should special Character be included?");
 
    // When I chose lowercase or uppercase or special characters
 
    while (result.length < passwordLength) {
        if (numberRespond && result.length < passwordLength) {
            result = result + numbers.charAt(Math.floor(Math.random() * numbers.length));
 
            console.log(result);
        }
 
        if (lowercaseRespond && result.length < passwordLength) {
            result = result + lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
 
            console.log(result);
        }
 
        if (uppercaseRespond && result.length < passwordLength) {
            result = result + upperChars.charAt(Math.floor(Math.random() * upperChars.length));
 
            console.log(result);
        }
 
        if (speCharRespond && result.length < passwordLength) {
            result = result + speChars.charAt(Math.floor(Math.random() * speChars.length));
 
            console.log(result);
        }
 
// return result
   
    };
 
    return result
 
}
// Get a secure random password
 
// Assignment for DOM element
let generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
 
    passwordText.value = password;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);