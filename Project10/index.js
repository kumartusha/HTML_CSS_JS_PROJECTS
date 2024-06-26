// //  Javascript Code for the Math Quiz App
// // Part 1
// // Create a Math question
// // Math question will have a random generated
// // Question Type Multiplicatin question  with random number range 1-10
// // Answer will be the product of the random number range and the random number range
// // User will have to answer question
// // On submit  answer answer will be compared with random generated answer
// // If answer will be correct than score will be incremented
// // If answer will be wrong than score will be decremented

// // Generate 4 Types of question
// // For Subtract first number should be greater than second number also for Divide
// // Store the score in local storage and display the score on the screen
// // Give Feedback to user using toast
// const questionEl = document.getElementById("question");
// const formIdEl = document.getElementById("formId");
// const scoreEl = document.getElementById("score");
// let storedAnswer;
// let score = localStorage.getItem("score");
// //  First Step is to generate the random number for the backend logic

// const randomNumber = (min , max) => {
// //  Normal Method to generate the random number
//     // return Math.floor((Math.random() * 10) + 1);

//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// // Second  Generate  Random  Question

// const generateQuestion = () => {
//     const randomNumber1 = randomNumber(1,10);
//     const randomNumber2 = randomNumber(1,10);
//     const questionType = randomNumber(1,4);
//     // const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2}?`;
//     //  const answer = randomNumber1 * randomNumber2;

// let firstNumber;
// let secondNumber;

// if(randomNumber1 > randomNumber2 && questionType > 2){
//     firstNumber = randomNumber1;
//     secondNumber = randomNumber2;
// }else{
//     firstNumber = randomNumber2;
//     secondNumber = randomNumber1;
// }

 
//   let question;
//   let answer;
//     switch(questionType){
//         case 1: question = `Q. What is ${randomNumber1} multiply by ${randomNumber2}?`;
//         answer =  firstNumber * secondNumber;
//         break;

//         case 2: question = `Q. What is ${randomNumber1} added with ${randomNumber2}?`;
//         answer =  firstNumber + secondNumber;
//         break;

//         case 3: question = `Q. What is ${firstNumber} subtract to ${secondNumber}?`;
//         answer =  firstNumber - secondNumber;
//         break;

//         case 4: question = `Q. What is ${firstNumber} divide by ${secondNumber}?`;
//         answer =  firstNumber / secondNumber;
//         break;
//         default:
//          console.log("Something went Wrong");
//     }
//      return {question , answer};
// };

// const showQuestion = () => {
//     const {question , answer} = generateQuestion();
//     questionEl.innerText = question;
//     scoreEl.innerText = score;
//    storedAnswer = answer;
// };
// showQuestion();

// const checkAnswer = (event) => {
//      event.preventDefault();

//      const formData = new FormData(formId);
//      const userAnswer = parseInt(formData.get("answer"));

//      if(userAnswer == storedAnswer){
//             ++score;

//             Toastify({
//                 text: `You are right and your Score is ${score}`,
//                 className: "info",
//                 gravity: "bottom",
//                 position: "center",
//                 style: {
//                   background: "linear-gradient(to right, #00b09b, #96c93d)",
//                 }
//               }).showToast();
//      }else{
//         --score;

//         Toastify({
//             text: `You are Wrong and your Score is ${score}`,
//             className: "info",
//             gravity: "bottom",
//             position: "center",
//             style: {
//               background: "linear-gradient(315deg, #e79087 0%, #fcd181 74%)",
//               color: "black",
//             }
//           }).showToast();
//      }
//      scoreEl.innerText = score;
//      localStorage.setItem("score",score);
//      event.target.reset();
//      showQuestion();
//      console.log(userAnswer);
// };
// checkAnswer();


//  Code By Myself for creating the math quiz app in HTML,CSS and Javascript
const questionEl = document.getElementById("question");
let storedAnswer;
let score = localStorage.getItem("score");
// let score = 0;
// score.localStorage.getItem("score");
const inputIEl = document.getElementById("inputId");
const formIdEl = document.getElementById("formId");
const scoreEl = document.getElementById("score");


//  First Step that create the random number in javascript
const getRandomInt = (min, max) => {

  // const minCeiled = Math.ceil(min);
  // const maxFloored = Math.floor(max);
  // return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive


    return Math.floor(Math.random() * (max - min + 1) + min );
}

//  Second Step to generate the Question for the math quiz app
const generateQuestion =() => {
  const randomNumber1 = getRandomInt(1,10);
  const randomNumber2 = getRandomInt(1,10);
  const questionType = getRandomInt(1,4);

  let firstNumber;
  let secondNumber;
  // const question = `Ques. What are ${randomNumber1} multiply by ${randomNumber2}`;
  // const answer = randomNumber1 *  randomNumber2;

       //  Check for the greater value for the subtract and divide case
       if(randomNumber1 > randomNumber2 && questionType > 2){
             firstNumber = randomNumber1;
             secondNumber = randomNumber2;
       }else{
          firstNumber = randomNumber2;
          secondNumber = randomNumber1;
       }


  let question;
  let answer;

  switch (questionType) {
            case 1: question = `Ques. What are ${randomNumber1} multiply by ${randomNumber2} ?`;
            answer = firstNumber * secondNumber;
             break;

            case 2: question = `Ques. What are ${randomNumber1} add by ${randomNumber2} ?`;
            answer = firstNumber + secondNumber;
            break;

            case 3: question = `Ques. What are ${firstNumber} subtract to ${secondNumber} ?`;
            answer = firstNumber - secondNumber;
            break;

            case 4: question = `Ques. What are ${firstNumber} divide to ${secondNumber} ?`;
            answer = firstNumber / secondNumber;
            break;
      
    default:
      break;

  }

  return {question , answer};
}

//  Render The Question on the webpage

const showQuestion = () => {
const {question , answer} = generateQuestion();
questionEl.innerText = question;
scoreEl.innerText = score;              // 
storedAnswer = answer;

}
showQuestion();


//  Check the answer for the math quiz app

const checkAnswer = (event) => {
event.preventDefault();

  const formData = new FormData(formIdEl);
  const userAnswer = parseInt(formData.get("userAnswer"));
  
    //   compare the both values userAnswer and the storedAnswer
       if(userAnswer === storedAnswer){
            ++score;
       }  else{
            --score;
       }

   scoreEl.innerText = score;
   localStorage.setItem("score",score);
   //  formIdEl.reset();  // or event.target.reset() both are same work for the input field
   event.target.reset();
   showQuestion();
}

checkAnswer();