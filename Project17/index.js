//  Javascript File for the Password Strength Project...........

const inputIdEl = document.getElementById("inputId");
const displayContentEl = document.getElementById("displayContent");


inputIdEl.addEventListener("keyup",() => {
let inputValue = inputIdEl.value;                 // Return the String that we can apply string methods

if(inputValue.length > 0 && inputValue.length <= 3){
    displayContentEl.innerHTML = "Password are Weak";
    displayContentEl.style.color = "red";
    inputIdEl.style.borderColor = "red";
}
else if(inputValue.length > 3 && inputValue.length <= 6){
    displayContentEl.innerHTML = "Password are Medium";
    displayContentEl.style.color ="orange";
    inputIdEl.style.borderColor = "orange";
}
else if(inputValue.length > 6 && inputValue.length <= 9){
    displayContentEl.innerHTML = "Password are Strong";
    displayContentEl.style.color ="greenyellow";
    inputIdEl.style.borderColor = "greenyellow";
}else{
    displayContentEl.innerHTML = "Password are Very Strong";
    displayContentEl.style.color ="green";
    inputIdEl.style.borderColor = "green";
}
});