//  Javascript Code for the my Portfolio


const menuMobileEl = document.querySelector(".menuMobile");
const trackIconEl = document.querySelector("#trackIcon");

const iconToggle = () => {
    // const faTimesEl = document.querySelector("#themeChange");

    menuMobileEl.classList.toggle("showMenu");
   if(trackIconEl.classList.contains("fa-bars")){
    trackIconEl.classList.remove("fa-bars");
    trackIconEl.classList.add("fa-times");
    // faTimesEl.style.color = "white";

   }else{
    trackIconEl.classList.add("fa-bars");
    trackIconEl.classList.remove("fa-times");
   }
}
const themeImageEl = document.querySelector("#themeImage");

const themeChange = (event) => {
    document.body.classList.toggle("wholeChange")
console.log("I am printing");
  if(event.target.classList.contains("fa-moon")){
    event.target.style.color = "white";
    event.target.classList.add("fa-sun");
    themeImageEl.src = "./images/themeImage.jpg";
    event.target.classList.remove("fa-moon");
  }else{
    event.target.style.color = "#0096FF";
    themeImageEl.src = "./images/image.jpg";
    event.target.classList.remove("fa-sun");
    event.target.classList.add("fa-moon");
  }
}
