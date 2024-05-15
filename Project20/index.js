// //  Javascript Code for the text to speech converter

// let speech = new SpeechSynthesisUtterance();


// //  Code for implementing the many language supported
// // let voices = [];

// // let voiceSelect = document.querySelector("select");


// // window.speechSynthesis.onvoiceschanged = () => {
// //         console.log("hello Guys");
// //         voices = window.speechSynthesis.getVoices();  // Provide all the voices that will be present into the Device in object format
        
// //         // console.log(voices);
        
// //         speech.voice = voices[0];      // speech.voices contain an speechsynthesisVoice object and also speak into the 0th index voice bydefault..

// //         //  voiceSelect.options = voices[0].name;
// //         console.log(speech.voice);

// //         voices.forEach((voice , i) => {voiceSelect.options[i] = new Option(voice.name , i)
// //         console.log(voice.name);});
        
// //         };
    

//         //  This is helpful for speking in many languages

// // voiceSelect.addEventListener("change" , () => {
// //     speech.voice = voices[voiceSelect.value];
// // });


// document.querySelector("button").addEventListener("click", () => {
//     // console.log(speech);
//     speech.text = document.querySelector("textarea").value;
//     console.log(speech);
//     window.speechSynthesis.speak(speech);// speak Function takes an object 
// });






//  For Creating this type of project in javascript we also familiar with the Some synthesis object..

let instance = new SpeechSynthesisUtterance();
instance.voice = speechSynthesis.getVoices()[0];
utterance.pitch = 1.5; // Increase pitch
utterance.rate = 1.2; // Increase rate
utterance.volume = 10; // Set volume

function speakFunction(){

          let textAreaValue = document.querySelector("textarea").value;
        instance.text = textAreaValue;
        window.speechSynthesis.speak(instance);

}


















