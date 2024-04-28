// //  Javascript Code for the Expense Tracker App

// //  Steps to solve the problem 
// //  Globally Declare the state Object

// const state = {
//     earnings: 0,
//     expense: 0,
//     net: 0,
//     transactions:[

//         // {
//     //     id: 5,
//     //     text : "Demo",
//     //     amount: 500,
//     //     type: "credit"
//     // },
//     // {
//     //     id: 5,
//     //     text : "Demo Debit",
//     //     amount: 400,
//     //     type: "debit"
//     // }

//     // {   
//     //     id: Math.floor(Math.random() * 1000),
//     //      id: 4,
//     //     text: "Example",
//     //     amount: 10,   // String to number conversion
//     //     type: "credit",
//     // },
// ],
// };


// //  For handling the transaction from the UI
// let isUpdate = false;
// let tid;




// const transactionFormIdEl = document.getElementById("transactionFormId");

// //  Rendering the transaction Details on the user Interface

// const renderTransactions = () => {
//     const transactionContainerEl = document.querySelector(".transactions");
//     const netAmountEl = document.getElementById("netAmount");
//     const earningEl = document.getElementById("earning");
//     const expenseEl = document.getElementById("expense");

//     const transactions = state.transactions;
//     let earning = 0;
//     let expense = 0;
//     let net = 0;
//     transactionContainerEl.innerHTML = "";
    
//     transactions.forEach((transaction) => {

//   const {id, amount , text , type} = transaction;
//   const isCredit = type === "credit" ? true :false;

//   const sign = isCredit ? '+' : '-';

//       const transactionEl = 

//       `<div class="transaction" id="${id}">
              
//     <div class="content" onclick = "showEdit(${id})">
//       <div class="left">
//            <p>${text}</p>
//            <p>${sign} $${amount}</p>
//            </div>
//            <div class="status ${isCredit ? "credit" : "debit"}">${isCredit ? "C" : "D"}</div>
//     </div>
//     <div class="lower">
//        <div class="icon" onclick = "handleUpdate(${id})>
//            <img src="./pen.svg" alt="Click Here">
//        </div>
//        <div class="icon" onclick = "handleDelete(${id})>
//            <img src="./trash.svg" alt="Click Here">
//        </div>
//     </div>

//    </div>`;


// earning += isCredit ? amount : 0;
// expense += !isCredit ? amount : 0;
// net = earning - expense;

//   transactionContainerEl.insertAdjacentHTML("afterbegin",transactionEl);
//     });

//     console.log({net,earning , expense});

//     netAmountEl.innerHTML = `$ ${net}`; 
//      earningEl.innerHTML = `$ ${earning}`;
//      expenseEl.innerHTML =  `$ ${expense}`;
// };


// // 1. Grab the input data from the input Field
// const addTransaction = (event) => {
//   event.preventDefault();


//   const isEarn = event.submitter.id == "earnBtn" ? true : false;
// //   console.log(isEarn);

//  const formData = new FormData(transactionFormIdEl);
// const tData = {};
//  formData.forEach((value,key) => {

//      tData[key] = value;

//     });
//      const {text , amount} = tData; 
//     // for maintaining the transaction details
//     const transaction = {
//         id: isUpdate ? tid : Math.floor(Math.random() * 1000),
//         text: text,
//         amount: +amount,   // String to number conversion
//         type: isEarn ? "credit" : "debit",
//     };

//        if(isUpdate){
        
//         const tIndex = state.transactions.findIndex((t) => t.id === tid);
//         state.transactions[tIndex] = transaction;
//         isUpdate = false;
//         tid = null;



//        }else{
//          state.transactions.push(transaction);
//        }

//     //  Pushing the data Into the central Hub
//     state.transactions.push(transaction);
//     renderTransactions();

//     transactionFormIdEl.reset();
//     console.log({state});
//     // console.log({state});
// };
// renderTransactions();


// //  Handle the bottom part of the transaction...
// const showEdit = (id) => {

// const selectedTransaction = document.getElementById(id);
// const lowerEl = selectedTransaction.querySelector(".lower");

// lowerEl.classList.toggle("showTransaction");

// }

// //  handling the Delete Transaction Operation
// const handleUpdate = (id) => {
// //  Return The transaction 
//   const transaction = state.transactions.find(t => t.id == id);
// const {text , amount} = transaction;

// const textInput = document.getElementById("text");
// const amountInput = document.getElementById("amount");
 

// textInput.value = text;
// amountInput.value = amount;
// tid = id;
// isUpdate = true;

// }

// //  Handling the Updation for the transaction..
// const handleDelete = (id) => {
//    const filteredTransactions = state.transactions.filter(t => t.id != id);

//     state.transactions = filteredTransactions;
//     renderTransactions();
// };


// transactionFormIdEl.addEventListener("submit",addTransaction)





//     By Do some Coding Code
const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: [],
  };
  
  let isUpdate = false;
  let tid;
  
  const transactionFormEl = document.getElementById("transactionForm");
  
  const renderTransactions = () => {
    const transactionContainerEl = document.querySelector(".transactions");
    const netAmountEl = document.getElementById("netAmount");
    const earningEl = document.getElementById("earning");
    const expenseEl = document.getElementById("expense");
  
    const transactions = state.transactions;
  
    let earning = 0;
    let expense = 0;
    let net = 0;
    transactionContainerEl.innerHTML = "";
    transactions.forEach((transaction) => {
      const { id, amount, text, type } = transaction;
      const isCredit = type === "credit" ? true : false;
      const sign = isCredit ? "+" : "-";
  
      const transactionEl = `
       <div class="transaction" id="${id}">
          <div class="content" onclick="showEdit(${id})">
              <div class="left" >
              <p>${text}</p>
              <p>${sign} ₹ ${amount}</p>
          </div>
              <div class="status ${isCredit ? "credit" : "debit"}">${
        isCredit ? "C" : "D"
      }</div>
          </div>
          <div class="lower">
          <div class="icon" onclick="handleUpdate(${id})">
              <img src="./pen.svg" alt="pen" />
          </div>
          <div class="icon" onclick="handleDelete(${id})">
              <img src="./trash.svg" alt="trash" />
          </div>
          </div>
    </div>`;
      earning += isCredit ? amount : 0;
      expense += !isCredit ? amount : 0;
      net = earning - expense;
  
      transactionContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
    });
  
    console.log({ net, earning, expense });
  
    netAmountEl.innerHTML = `₹ ${net}`;
    earningEl.innerHTML = `₹ ${earning}`;
    expenseEl.innerHTML = `₹ ${expense}`;
  };
  
  const addTransaction = (e) => {
    e.preventDefault();
  
    const isEarn = e.submitter.id === "earnBtn" ? true : false;
  
    const formData = new FormData(transactionFormEl);
    const tData = {};
  
    formData.forEach((value, key) => {
      tData[key] = value;
    });
    const { text, amount } = tData;
    const transaction = {
      id: isUpdate ? tid : Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
      type: isEarn ? "credit" : "debit",
    };
  
    if (isUpdate) {
      const tIndex = state.transactions.findIndex((t) => t.id === tid);
  
      state.transactions[tIndex] = transaction;
      isUpdate = false;
      tid = null;
    } else {
      state.transactions.push(transaction);
    }
  
    renderTransactions();
  
    transactionFormEl.reset();
    console.log({ state });
  };
  
  const showEdit = (id) => {
    console.log("id", id);
  
    const selectedTransaction = document.getElementById(id);
    const lowerEl = selectedTransaction.querySelector(".lower");
  
    lowerEl.classList.toggle("showTransaction");
  };
  
  const handleUpdate = (id) => {
    const transaction = state.transactions.find((t) => t.id === id);
  
    const { text, amount } = transaction;
    const textInput = document.getElementById("text");
    const amountInput = document.getElementById("amount");
    textInput.value = text;
    amountInput.value = amount;
    tid = id;
    isUpdate = true;
  };
  
  const handleDelete = (id) => {
    const filteredTransaction = state.transactions.filter((t) => t.id !== id);
  
    state.transactions = filteredTransaction;
    renderTransactions();
  };
  
  renderTransactions();
  transactionFormEl.addEventListener("submit", addTransaction);