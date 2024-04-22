// //  Javascript Code for the Stop watch in web development

// //  Task 1. set the second minute and the hour into the heading part

// // const clockEl = document.getElementById("clock");
// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");
// let second = 0,minute = 0,hour = 0;
// let intervalId;

// function startStopWatch(){

//     intervalId = setInterval(() => {
//      if(second < 59){
//         ++second;
//         secondsEl.innerHTML = String(second).padStart(2,"0");
//      }else{
//         second=0;
//         // ++minute;
//         if(minute < 59){
//             ++minute;
//             minutesEl.innerHTML = String(minute).padStart(2,"0");
//         }else{
//             minute = 0;
//             ++hour;
//             hoursEl.innerHTML = String(hour).padStart(2,"0");
//         }
//      }
   
//     },1000);

// }

// function stopStopWatch(){
//     clearInterval(intervalId);
// }

// function resetStopWatch(){
//   stopStopWatch();
//   second = 0;
//   minute = 0;
//   hour = 0;
// hoursEl.innerHTML = "00";
// minutesEl.innerHTML = "00";
// secondsEl.innerHTML = "00";
// }



// Javascript Code for the Stopatch for practice by me in web development

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let seconds = 0, minutes = 0,hours = 0;
let interValId;
function startStopWatch(){

     interValId = setInterval(() => {
           if(seconds < 59){
                ++seconds;
                console.log(seconds);
                secondsEl.innerHTML = seconds.toString().padStart(2,"0");
            }else{
                if(minutes < 59){
                    seconds = 0;
                    ++minutes;
                    minutesEl.innerHTML = minutes.toString().padStart(2,"0");
                    console.log(minutes);
                }else{
                    minutes = 0;
                    ++hours;
                    console.log(hours);
                    hoursEl.innerHTML = hours.toString().padStart(2,"0");
            }
           }
    },10);

}


function stopStopWatch(){

        clearInterval(interValId);

}

function resetStopWatch(){
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
      hoursEl.innerHTML = "00";
      seconds = 0;
      minutes = 0;
      hoursc = 0;
      stopStopWatch();

    
}


















