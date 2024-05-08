//  Javascript code for the to do list

const inputIdEl = document.getElementById("inputId");
const buttonIdEl = document.getElementById("buttonId");
const ulContainerEl = document.getElementById("ulContainer");


const addTask = () => {
   if(inputIdEl.value == ""){
    alert("Please enter the value");
   }else{
     //  Grab the input value
     const inputValue = inputIdEl.value;
     console.log(inputValue);
 
     // add the list item
     let list = document.createElement("li");
     list.innerHTML = inputValue;
     ulContainerEl.append(list);
 
     let cross = document.createElement("span");
     cross.innerHTML = "\u00d7";
     list.appendChild(cross);
 
     inputIdEl.value = "";
   }
}
buttonIdEl.addEventListener("click",addTask);


//  For handling the span functionality
ulContainerEl.addEventListener("click",function(event){

    if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
    }else if(event.target.tagName === "LI"){
        event.target.classList.toggle("lineThrough");
    }
},false)