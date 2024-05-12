//  Javascript Code for the Generate Random Password Generator..
//  Code By Myself for the random password Generator

var passwordEl = document.getElementById("password");
var buttonId = document.getElementById("buttonId");


function copyClipboard(){
    passwordEl.select();
    document.execCommand("copy");
    alert("Text Copied SuccessFully....");
}

function createPassword(){

    // Uppercase letters
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Lowercase letters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// Numbers
var numbers = "0123456789";

// Special symbols
var specialSymbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

// Concatenate all arrays
var allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialSymbols;
let password = "";
    for(let i = 0 ; i < 12; ++i){
        let arrayIndex = Math.floor(Math.random() * allCharacters.length);
         password += allCharacters[arrayIndex];
     }
     passwordEl.value = password;
}
buttonId.addEventListener("click",createPassword);


