// //  Javascript Code for the Toast Notification.
// let toastBoxEl = document.getElementById("toastBox");
// let successMsg = '<i class="fas fa-check-circle"></i> Successfully Submitted';
// let errorMsg = '<i class="fas fa-times-circle"></i> Something went wrong';
// let invalidMsg = '<i class="fas fa-exclamation-circle"></i> Invalid Input Check Again';


// function showToastFunction(message){
//     let toast = document.createElement("div");
//           toast.classList.add("toast");
//     toast.innerHTML = message;
//    toastBoxEl.appendChild(toast);

//    if(message.includes('wrong')){
//     toast.classList.add("wrong");
//    }else if(message.includes("Invalid")){
//     toast.classList.add("invalid");
//    }
//    setTimeout(() => {
//     toast.remove();
//    },6000);

// }


// //  Javascript Code for the toast notification by myself

const toastBoxEl = document.getElementById("toastBox");
let successMsg = "<i class='fas fa-check-circle'></i> Confirm Successfully";
let errorMsg = "<i class='fas fa-times-circle'></i> Something Went Wrong";
let invalidMsg = "<i class='fas fa-exclamation-circle'></i> Invalid Message";


function showToastFunction(successMsg){

      let toastEl = document.createElement("div");
      toastEl.classList.add("toast");
      toastEl.innerHTML = successMsg;
      toastBoxEl.appendChild(toastEl);

      if(successMsg.includes("Wrong")){
            toastEl.classList.add("wrong");
      }else if(successMsg.includes("Invalid")){
            toastEl.classList.add("invalid");
      }

      setTimeout(() => {
            toastEl.remove();
      },5000);
}




















