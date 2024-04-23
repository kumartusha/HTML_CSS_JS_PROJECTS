// // Javascript Code for the Tic tac toe game for the web development..

// let audioMusic = new Audio("./music.mp3");
// let audioTing = new Audio("./ting.mp3");
// let audioGameOver = new Audio("./gameover.mp3");
// let isGameOver = false;
// let turn = "X";

// //  Function to change the turn
// function changeTurn(){

//     return turn === "X"? "0" : "X";
// }


// //  Function to check for a win
// const checkWin = () => {
// const boxTexts = document.getElementsByClassName("boxText");
//    let wins = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ]

// wins.forEach(element => {

//     if((boxTexts[element[0]].innerText === boxTexts[element[1]].innerText) && (boxTexts[element[1]].innerText === boxTexts[element[2]].innerText) && boxTexts[element[0]].innerText !== ""){
        
//         document.querySelector(".info").innerText = boxTexts[element[0]].innerText + " Won";
//         audioGameOver.play();
//         isGameOver = true; 
//         document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "300px";
//     }
//     // console.log(boxTexts[element[0]]);
// })


// }

// //  Main Game Logic for the Tic Tac Toe
// Array.from(document.getElementsByClassName("box")).forEach((element) => {

//     let boxText = element.querySelector(".boxText");
//     element.addEventListener("click",() => {
//         console.log("Hello Bhai");
//         if(boxText.innerText === ''){
//             boxText.innerText = turn;
//             turn = changeTurn();
//             audioTing.play();
//             checkWin();
//            if(!isGameOver){
//             document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//            }
            
//         }
//     })
    
// })

// //  Adding the eventListener for reset all of things
// reset.addEventListener("click" ,() => {
//    console.log("Hello Bhai");
//     Array.from(document.querySelectorAll(".boxText")).forEach((element) => {
//        element.innerText = "";
//     })
//     turn = "X";
//     isGameOver = false;
//     document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//     document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
// })












//   Javascript Code By Myself for the Tic Tac Toe Game 


let audioGameOver = new Audio("./gameover.mp3");
let audioMusic = new Audio("./music.mp3");
let audioTing = new Audio("./ting.mp3");
let isRemaining = true;
let turnVariable = "X";

const changeTurn = () => {
      return turnVariable === "X" ? "0" : "X"; 
}


//  Logic for the winner
const winner = () => {
    let boxTexts = document.querySelectorAll(".boxText");
    console.log(boxTexts);
    let winnerPossibilities = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    
    winnerPossibilities.forEach((element) => {
        if(( boxTexts[element[0]].innerText === boxTexts[element[1]].innerText ) && (boxTexts[element[1]].innerText === boxTexts[element[2]].innerText) && boxTexts[element[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxTexts[element[0]].innerText + " Won";
            console.log(boxTexts[element[0]].innerText);
            isRemaining = false;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "300px";
            audioGameOver.play();
        }

    })
}

//  Logic for putting the value of X and 0 on the boxText container
Array.from(document.querySelectorAll(".box")).forEach((element) => {
    element.addEventListener("click",(e) => {
        audioTing.play();
        // let boxTexts = document.querySelector(".boxText");    // Mistake bcoz i am select by document (Randomly Accessed)
        // Right Approach bcoz selected by the element bcoz element contain the .boxText class so easily access it  
        let boxTexts = element.querySelector(".boxText"); 
        if(boxTexts.innerText === ""){
               boxTexts.innerText = turnVariable;
               turnVariable = changeTurn();
               winner();
               if(isRemaining){
                document.querySelector(".info").innerText = `Turn for ${turnVariable}`;
            }
            //   X 0 X 0 X 0 X 0 X
        }
    });
    });

    
    const resetValue =() => {
        
        Array.from(document.getElementsByClassName("box")).forEach((element) => {
               
                let innerElement = element.querySelector(".boxText");
                innerElement.innerText = "";
                
            })
            document.querySelector(".info").innerText = `Turn for X`;
             isRemaining = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";

    }