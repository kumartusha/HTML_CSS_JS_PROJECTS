//  Javascript Code for the Progress for Development

let numberEl = document.getElementById("number");

let counter = 0;

let intervalId = setInterval(() => {
    if(counter === 100){
        clearInterval(intervalId);
    }else{
        ++counter;
        numberEl.innerHTML = counter + "%";
    }

},10);





// Javascript Code for the progress bar in HTML CSS and JAVASCRIPT

























