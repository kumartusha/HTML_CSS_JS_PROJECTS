//  javascript Code for the QR Code Generator App

const generateBtnEl = document.getElementById("generateBtn");
const inputIdEl = document.getElementById("inputId");
const qrImageEl  = document.getElementById("qrImage");
const qrContainerIdEl = document.getElementById("qrContainerId");

const renderQrCode = (url) => {

    if(!url){
        return;
    }else{
        console.log(url);
       qrImageEl.src = url;
        qrContainerIdEl.classList.add("show");
    }

}

const grabUserInput = (event) => {
event.preventDefault();

const userValue = inputIdEl.value;
const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userValue}`;
renderQrCode(url);

}
generateBtnEl.addEventListener("click", grabUserInput);


inputIdEl.addEventListener("input",() => {

    if(!inputIdEl.value.trim()){
        qrContainerIdEl.classList.remove("show");
    }


})




