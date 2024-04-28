//  Javascript Code for the Music Player App in our web development Journey

//  Approach for creating the project
// 1. When we use the audio and video tag so firstly we need to onloadedmeta event to load the audio data into our input field

const ctrlIconEl = document.getElementById("ctrlIcon");
const songEl = document.getElementById("song");
const progressEl = document.getElementById("progress");
let intervalId;
// Load the audio data into the input
function metaLoaded() {
  //  There are so many function for the audio and video tag but we just wanted to load the audio data into the input field
  progressEl.max = songEl.duration;
  progressEl.value = songEl.currentTime; //progress.value = 1(string) // or SongEl.currentTime = 0 (number)
}

//  For handling the play and pause icon functionality for the music player app
function playPause() {
  console.log("I am here");
  if (ctrlIconEl.classList.contains("fa-play")) {
    songEl.play();
    console.log(songEl.currentTime); // 0
    console.log(songEl.duration); // 171

    if (songEl.currentTime === 0) {
      autoCall();
    }

    ctrlIconEl.classList.add("fa-pause");
    ctrlIconEl.classList.remove("fa-play");
  } else {
    songEl.pause();
    ctrlIconEl.classList.remove("fa-pause");
    ctrlIconEl.classList.add("fa-play");
  }
}

//  For the muted functionality for the music player app
function mutedFunction() {
  if (songEl.muted) {
    songEl.muted = false; // Unmute the songEl
  } else {
    songEl.muted = true; // Mute the songEl
  }
}

function autoCall() {
  if (songEl.play()) {
    intervalId = setInterval(() => {
      progressEl.value = songEl.currentTime;
      if (songEl.currentTime === songEl.duration) {
        clearInterval(intervalId);
        ctrlIconEl.classList.remove("fa-pause");
        ctrlIconEl.classList.add("fa-play");
      }
    }, 1000);
  }
}
autoCall();
// Onchange Function are used to track the input data to the audio tag..

function changeAudio() {
  songEl.play();
  songEl.currentTime = progressEl.value;
}
