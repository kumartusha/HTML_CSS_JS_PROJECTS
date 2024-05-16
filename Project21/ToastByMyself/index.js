//  Javascript Code for the toast notification
const button1El = document.getElementById("button1");
const button2El = document.getElementById("button2");
const button3El = document.getElementById("button3");

function showToastFunction(){
    Toastify({
        text: "Submitted Successfully",
        className: "info",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // "left" "right " and "center"
        style: {
          background: "linear-gradient(to right, #E6DBE2, #E6FFCE)",
          fontSize: "17px",
          color: "black",
        }
      }).showToast();
}

function showToastFunction2(){
    Toastify({
        text: "Something went wrong",
        className: "info",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // "left" "right " and "center"
        style: {
          background: "linear-gradient(to right, #E6DBE2, #E6FFCE)",
          fontSize: "17px",
          color: "black",
        }
      }).showToast();
}

function showToastFunction3(){
    Toastify({
        text: "Invalid Input",
        className: "info",
        gravity: "bottom", // `top` or `bottom`
        position: "right", // "left" "right " and "center"
        style: {
          background: "linear-gradient(to right, #E6DBE2, #E6FFCE)",
          fontSize: "17px",
          color: "black",
          
        }
      }).showToast();
}