//  Javascript code for the To Do list App

const inputBoxEl = document.getElementById("inputBox");
const listContainerEl = document.getElementById("listContainer");

function addTask() {
  if (inputBoxEl.value === "") {
    alert("You must write something");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBoxEl.value;
    listContainerEl.append(list);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";        // Code for the Arrow
    list.appendChild(span);
  }

  inputBoxEl.value = "";
  saveData()
}


listContainerEl.addEventListener(
  "click",
  function (e) {
    //  e.preventDefault();
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainerEl.innerHTML);
}

function showTask() {
    localStorage.innerHTML = localStorage.getItem("data");
  }
