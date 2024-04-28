//  Javascript Code for the Weather App using HTML,CSS,Javascript

//  First Process is to fetch the api::

const apiKey = "8909baa00324102632b4fde2baa4d5f9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputIdEl = document.getElementById("inputId");
const buttonIdEl = document.getElementById("buttonId");
const imageIdEl = document.querySelector("#imageId");

const fetchData = async () => {
  try {
    const userData = inputIdEl.value;
    const response = await fetch(apiUrl + userData + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    
    //  Set the values into the part of the html
    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        
    } else {
        //  Math.round(data.main.temp) + "°C";
        document.querySelector(".weather").style.display = "block";

      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      //     Render the image according to the weather
      if (data.weather[0].main == "Clouds") {
        imageIdEl.src = "./images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        imageIdEl.src = "./images/clear.png";
      } else if (data.weather[0].main == "Drizzle") {
        imageIdEl.src = "./images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        imageIdEl.src = "./images/mist.png";
      } else if (data.weather[0].main == "Rain") {
        imageIdEl.src = "./images/rain.png";
      } else if (data.weather[0].main == "Snow") {
        imageIdEl.src = "./images/snow.png";
      }
    }
  } catch (error) {
    console.log(Error);
  }
};

inputIdEl.addEventListener("input", () => {
    if(!inputIdEl.value.trim()){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
    }
})
buttonIdEl.addEventListener("click", fetchData);
