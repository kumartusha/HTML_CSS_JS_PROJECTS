//  Javascript code for the Age Calculator

const inputPartIdEl = document.getElementById("inputPartId");
const buttonIdEl = document.getElementById("buttonId");
const paraTextEl = document.getElementById("paraText");
let dateOfBirth;

const generateAge = () => {
  const inputValue = inputPartIdEl.value;
//   console.log(inputValue);                              // Return the input date into nonmillisecond format
  dateOfBirth = inputValue ? new Date(inputValue) : null;
// console.log(inputValue);                              // Return the input date into nonmillisecond format
// console.log(dateOfBirth);                           // Return the input date into nonmillisecond format



console.log( 
    dateOfBirth.getFullYear(),        // 2003
    new Date().getFullYear());        // 2034

    console.log(dateOfBirth.getMilliseconds() , new Date().getMilliseconds());
    
    if (dateOfBirth < new Date()) {
    let dateDifference = new Date() - dateOfBirth;                     // Return the result into the millisecond
    // console.log(dateDifference);
    const year = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDifference / (1000 * 60 * 60 * 24 * 30.44)) % 12);
    const day = Math.floor((dateDifference / (1000 * 60 * 60 * 24)) % 30.44);
    
    
        paraTextEl.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> month, and <span>${day}</span> days old.`;
        paraTextEl.style.color = "white";
        paraTextEl.style.fontSize = "15px";
        setTimeout(() => {
            paraTextEl.innerHTML = "";
        },10000);
    
    inputPartIdEl.value = "";
} else {
    alert("You are the time traveller");
    inputPartIdEl.value = "";
  }
};
inputPartIdEl.addEventListener("keypress", generateAge);