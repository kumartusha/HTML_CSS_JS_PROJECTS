const calculateClassEl = document.getElementById("calculateClass");
const resultEl = document.getElementById("result");


const calculateMarks = (event) => {
    const maximumMMarks = 400;
    //  Below function stop the reload functionality in web browser
event.preventDefault();

//  The FormData is a helper method which is used for getting the data  (store data in key value pair)
const formData = new FormData(calculateClassEl);
// Create object to store input Values
const data = {};
console.log(formData);

formData.forEach((value,key) => {
    data[key] = +value;             // Bydefault value string so convert into number by using + Operator
});

const totalMarks = data.math + data.hindi + data.science + data.english;
const percentage = (totalMarks / maximumMMarks) * 100;
// console.log(`The percentage are:- ${percentage.toFixed(2)}`);


// const resultElement = document.createElement("p");
// resultElement.className = "result";
resultEl.innerText = `You have got ${totalMarks} marks out of ${maximumMMarks} and your percentage is ${percentage.toFixed(2)}%`;
// calculateClassEl.after(resultElement);

};