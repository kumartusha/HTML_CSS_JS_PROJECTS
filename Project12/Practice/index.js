//  Javascript Code for the Progress Bar Project
const numberEl = document.getElementById("number");
let counter = 1;

function increaseTime(){
    counter++;
    if(counter === 65){
       clearInterval(intervalId);
    }
numberEl.innerHTML = counter + "%";

}

intervalId = setInterval(() => {
    increaseTime();
},20);