//  Javascript Code for the Github Profile Search

const url = "https://api.github.com/users";

const searchButtonEl = document.getElementById("searchButton");
const searchInputEl = document.getElementById("searchInput");
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById("loading");

const generateProfileCard = (profile) => {

      return `<div class="profile-box">
      <div class="topSection">
          <div class="leftPart">
                 <div class="avatar">
                  <img src="${profile.avatar_url}" alt="Click Here" width="62px" height="62px">
                 </div>
                 <div class="self">
                  <h1>${profile.name}</h1>
                  <h3>${profile.login}</h3>
                 </div>
          </div>
          <a href="${profile.blog}"><button  class="primaryBtn" id="primaryBtnId">Check Profile</button></a> 
      </div>

      <div class="about">
          <h2>About</h2>
          <p>${profile.bio}</p>
      </div>

      <div class="status">
          <div class="statusItem">
              <h3>Followers</h3>
              <p>${profile.followers}</p>
          </div>
          <div class="statusItem">
              <h3>Following</h3>
              <p>${profile.following}</p>
          </div>
          <div class="statusItem">
              <h3>Repository</h3>
              <p>${profile.public_repos}</p>
          </div>
      </div>
  </div>`;
}


const fetchUserData = async () => {
      let username = searchInputEl.value;

loadingEl.innerText = "Loading...";
loadingEl.style.textTransform = "uppercase";
loadingEl.style.color = "white";
loadingEl.style.fontSize = "20px";
 
  try {
        const res = await fetch(`${url}/${username}`);
        const data =await res.json();
      //   console.log(data);
        
      
      if(data.name){
         loadingEl.innerText = "";
        profileContainerEl.innerHTML = generateProfileCard(data);
        Toastify({
            text: "Hurray User Found 😊",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // "left" "right " and "center"
            style: {
              background: "linear-gradient(to right, #E6DBE2, #E6FFCE)",
              fontSize: "17px",
              color: "black",
            }
          }).showToast();

      }else{
            let errorHandle = data.message;
            // loadingEl.style.color = "red";
            // loadingEl.style.textTransform = "uppercase";
            // loadingEl.style.fontSize = "20px";
            loadingEl.innerText = " ";
            Toastify({
                  text: "Oops Not Found !🙁",
                  className: "info",
                  gravity: "bottom", // `top` or `bottom`
                  position: "center", // "left" "right " and "center"
                  style: {
                    background: "linear-gradient(to right, #C8DEFF, #D2FFA8)",
                    fontSize: "17px",
                    color: "black",
                  }
                }).showToast();
      }
      
  } catch (error) {
    console.log(error);
  }
 }


 searchInputEl.addEventListener("input",() => {
    
      if(!searchInputEl.value.trim()){

          profileContainerEl.innerText = " ";
          Toastify({
            text: "Searching Next Profile...",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // "left" "right " and "center"
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              fontSize: "17px",
              color: "white",
            }
          }).showToast();
          

      // loadingEl.style.color = "white";
      //       loadingEl.style.textTransform = "uppercase";
      //       loadingEl.style.fontSize = "20px";
      // loadingEl.innerText = "Searching Other Person...";
      }
       })
 

 searchButtonEl.addEventListener("click",() => {fetchUserData()});