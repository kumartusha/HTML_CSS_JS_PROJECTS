// //  Javascript Code for the Mini Calender

// const h3Heading2El = document.getElementById("h3Heading2");
// const h3HeadingEl = document.getElementById("h3Heading");
// const h1HeadingEl = document.getElementById("h1Heading");
// const paragraphEl = document.getElementById("paragraph");

// function changeData(){

//       let date = new Date().getDate();
//       let year = new Date().getFullYear();
//       let dayNum = new Date().getDay();
//       let monthNum = new Date().getMonth();

//       let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//       let monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//       let day = dayArray[dayNum];
//       let month = monthArray[monthNum];

//     //    Setting the Data into the specific Place
//     paragraphEl.innerHTML = day;
//     h1HeadingEl.innerHTML = date.toString().padStart(2,"0");
//     h3HeadingEl.innerHTML = month;
//     h3Heading2El.innerHTML = year;



// }
// changeData();



const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");


function updateData(){

  let todayDate = new Date().getDate();
  let todayDay = new Date().getDay();        //5
  let todayMonth = new Date().getMonth();   //3
  let todayYear = new Date().getFullYear();

  dateEl.innerHTML = todayDate.toString().padStart(2,"0");
  yearEl.innerHTML = todayYear.toString().padStart(2,"0");

  let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let monthArray = ["January","February","March","April","May","June","July","August","September","November","December"];


  dayEl.innerHTML = dayArray[todayDay];
  monthEl.innerHTML = monthArray[todayMonth];
}

updateData();



























