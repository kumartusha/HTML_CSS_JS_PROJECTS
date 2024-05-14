// const hoursEl = document.getElementById("hours");
// const minutesEl = document.getElementById("minutes");
// const secondsEl = document.getElementById("seconds");

// const timer = () => {

// let todayTimeSeconds = new Date().getSeconds();
// let todayTimeHours = new Date().getHours();
// let todayTimeMinutes = new Date().getMinutes();

// //  1st Case  (This would be effective and scale for all the cases but also we do the two digit number);

// // Convert to 12-hour format
// // todayTimeHours = todayTimeHours % 12;
// // todayTimeHours = todayTimeHours ? todayTimeHours : 12; // '0' should be displayed as '12'

// // 2nd Case (we do the two digit number but it is uneffective)
// if(todayTimeHours == 0){
//     hoursEl.innerHTML = 12;
// }else{
//     hoursEl.innerHTML =  todayTimeHours;
// }

// // 3rd Case   (But Missing the 12PM or AM Case jo ki effective nahi h)
// // hoursEl.innerHTML = (todayTimeHours.getHours() < 10 ? "0": "") + todayTimeHours.getHours();

// // Display the current hour
// minutesEl.innerHTML = todayTimeMinutes;
// secondsEl.innerHTML = todayTimeSeconds;
// console.log(todayTimeHours,todayTimeMinutes,todayTimeSeconds);

// };

// setInterval(() => {
//     timer();
// },1000);

//  Javascript Code for the digital clock in web development Journey

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");


function updateTime(){
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();

    //  Handled the 12 PM or AM Case (Problem 12 is denoted as 0)
    // 1st. Solution          (Not Efficient)
    //   if(currentHour == 0){
    //     currentHour.innerHTML = 12;
    //   }else{
    //       hoursEl.innerHTML = currentHour.toString().padStart(2,"0");
    //   }

    
    // 2nd. Solution          (Not Efficient :- It is not handled the 12 PM or AM case)
    // hoursEl.innerHTML = (currentHour < 10 ? "0" : "") + currentHour;

    
    //  3rd. Solution         (Effective Solution )
      currentHour = currentHour % 12;
      currentHour = currentHour ? currentHour: "12";

    hoursEl.innerHTML = currentHour.toString().padStart(2,"0");
    minutesEl.innerHTML = currentMinute.toString().padStart(2,"0");
    secondsEl.innerHTML = currentSecond.toString().padStart(2,"0");
}
setInterval(() => {
    updateTime();
}, 1000);



















