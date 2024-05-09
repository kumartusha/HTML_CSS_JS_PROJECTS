const url = "https://api.quotable.io/random?tags=technology";

const firstButtonIdEl = document.getElementById("firstButtonId");
const contentQuoteEl = document.getElementById("contentQuote");
const authorQuoteEl = document.getElementById("authorQuote");
const secondButtonIdEl = document.getElementById("secondButtonId");

const fetchQuote = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        
        if(!response.ok){
            alert("Some thing went wrong");
        }else{
           contentQuoteEl.innerText = "-> "+data.content +"";
           authorQuoteEl.innerText = "Author:- "+ data.author;
        }

    } catch (error) {
        console.log("Something went wrong...");
    }
}

const twitterOpen = () => {
    window.open("https://twitter.com/intent/tweet?text=" + contentQuoteEl.innerText +" "+ authorQuoteEl.innerText);
}
firstButtonIdEl.addEventListener("click",fetchQuote);
secondButtonIdEl.addEventListener("click",twitterOpen);