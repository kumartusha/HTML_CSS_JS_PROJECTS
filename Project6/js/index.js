//  Javascript Code for the Snake Mamba Game

let inputDir = {x: 0 ,y: 0};
const foodSound = new Audio("./music/food.mp3");
const gameOverSound = new Audio("./music/gameover.mp3");
const moveSound = new Audio("./music/move.mp3");
const musicSound = new Audio("./music/music.mp3");
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArray = [
    {x: 13,y: 15}
];
food = {x:6 ,  y:7};

// Game Function
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snake){
//    If you bump into yourself
for (let i = 1; i < snakeArray.length; i++) {
     if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        return true;
    }
}
//  If you bunk into the Grid wall
     if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0){
        return true;
}
}

function gameEngine(){
//  Part 1: Updating the snake array
if(isCollide(snakeArray)){
    gameOverSound.play();
    musicSound.pause();
    inputDir = {x: 0, y: 0};
    alert("Game Over. Press any key to play again");
    snakeArray = [{x: 13, y: 15}];
    // musicSound.play();
    score = 0;
}
//  If You have eaten the foof increment the score and regenerate the food
if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
    // Updating the HighScore and also Score for the snake
    foodSound.play();
    score += 1;
    if(score > highScoreVal){
        highScoreVal = score; 
        localStorage.setItem("highScore" , JSON.stringify(highScoreVal));
        highScoreBox.innerHTML = "High Score:- " + highScoreVal;
    }

    scoreBox.innerHTML = "Score:- " + score;
    snakeArray.unshift({x: snakeArray[0].x + inputDir.x ,y:  snakeArray[0].y + inputDir.y});
    let a=2;
    let b=16; 
    food = {x: Math.round(a + (b-a) * Math.random()) , y: Math.round(a+(b-a) * Math.random())};
}
//  Moving the Snake
for (let i = snakeArray.length - 2; i >= 0; i--) {
    // const element = array[i];
    snakeArray[i+1] = {...snakeArray[i]};
}


snakeArray[0].x += inputDir.x;
snakeArray[0].y += inputDir.y;



// Part 2: Diplay the snake 
board.innerHTML = "";
    snakeArray.forEach((element , index) => {
         snakeElement = document.createElement("div");
         snakeElement.style.gridRowStart = element.y;
         snakeElement.style.gridColumnStart = element.x;
        //  snakeElement.classList.add("snake");
         if(index === 0){
             snakeElement.classList.add("head");
         }else{
            snakeElement.classList.add("snake");
         }
         board.appendChild(snakeElement);

// Part 3: Display the food

    })
    foodElement = document.createElement("div");
         foodElement.style.gridRowStart = food.y;
         foodElement.style.gridColumnStart = food.x;
         foodElement.classList.add("food");
         board.appendChild(foodElement);

}


//  Main Logic Starts Here
let highScore = localStorage.getItem("highScore");
if(highScore === null){
    highScoreVal = 0;
    localStorage.setItem("highScore", JSON.stringify(highScoreVal));
}else{
    highScoreVal = JSON.parse(highScore);
    highScoreBox.innerHTML  = "High Score:- " + highScore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown' , e =>{
 inputDir = {x: 0 , y: 1};   // Start The Game
 moveSound.play();

 switch(e.key){
    case "ArrowUp":
    console.log("Arrow Up");
    inputDir.x = 0;
    inputDir.y = -1;
    break;

    case "ArrowDown": 
    console.log("Arrow Down");
    inputDir.x = 0;
    inputDir.y = 1;
    break;
    
    case "ArrowLeft": 
    console.log("Arrow Left");
    inputDir.x = -1;
    inputDir.y = 0;
    break;
    
    case "ArrowRight": 
    console.log("Arrow Right");
    inputDir.x = 1;
    inputDir.y = 0;
    break;

    default:
        console.log("Something went Wrong");
        break;
 }
});