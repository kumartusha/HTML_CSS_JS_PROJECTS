//  Random Color Generator Part
const colorBtnEl = document.getElementById("colorBtn");
const firstEl = document.getElementById("first");
const secondEl = document.getElementById("second");
const thirdEl = document.getElementById("third");
const fourthEl = document.getElementById("fourth");

function randomColor(number){
    return Math.floor((Math.random() * number )+ 1);
}

const generateColor = () => {

    // const rndCol = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
 firstEl.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
 secondEl.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
 thirdEl.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;
 fourthEl.style.backgroundColor = `rgb(${randomColor(255)},${randomColor(255)},${randomColor(255)})`;


}


colorBtnEl.addEventListener("click",generateColor);