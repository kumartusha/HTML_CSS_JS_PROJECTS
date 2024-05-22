const settingIconEl = document.getElementById("settingIcon");
const settingContentIdEl = document.getElementById("settingContentId");
const dobButtonEl = document.getElementById("dobButton");
const dateInputEl = document.getElementById("dateInput");
const initialTextEl = document.getElementById("initialText");
const afterTextEl = document.getElementById("afterText");


const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

//  Handling the First Case means the Setting hiding part
let DOBButton = false;
let dateOfBirth;
const toggleDateOfBirthButton = () => {
  if (DOBButton) {
    //  Used to hide the hide class
    settingContentIdEl.classList.add("hide");
  } else {
    //  Used to unhide the hide class
    settingContentIdEl.classList.remove("hide");
  }
  DOBButton = !DOBButton;
};

const updateAge = () => {
  const ageUpdate = new Date() - dateOfBirth;

  const year = Math.floor(ageUpdate / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((ageUpdate / (1000 * 60 * 60 * 24 * 30.44)) % 12);
    const day = Math.floor(ageUpdate / (1000 * 60 * 60 * 24) % 30.44);
    const hour = Math.floor(ageUpdate / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(ageUpdate / (1000 * 60)) % 60;
    const second = Math.floor(ageUpdate / 1000) % 60;


    yearEl.innerHTML =  year.toString().padStart(2, '0');
    monthEl.innerHTML = month.toString().padStart(2, '0');
    dayEl.innerHTML = day.toString().padStart(2, '0');
    hourEl.innerHTML = hour.toString().padStart(2, '0');
    minuteEl.innerHTML = minute.toString().padStart(2, '0');
    secondEl.innerHTML = second.toString().padStart(2, '0');
};

const buttonClickDOB = () => {
  const dateString = dateInputEl.value;
  console.log("DateString:- ", dateString);
  dateOfBirth = dateString ? new Date(dateString) : null;

  console.log("DateofBirth:- ", dateOfBirth);

  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterTextEl.classList.remove("hide");
    setInterval(() => {
        updateAge();
    },1000);
  } else {
    console.log("I am hide");
    initialTextEl.classList.remove("hide");
    afterTextEl.classList.add("hide");
    console.log("I am hide");
  }
};
buttonClickDOB();
dobButtonEl.addEventListener("click", buttonClickDOB);
settingIconEl.addEventListener("click", toggleDateOfBirthButton);
