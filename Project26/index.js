//  Javascript Code for the filter Product app

const url = "https://fakestoreapi.com/products";

(async () => {
  
  const productContainerIdEl = document.getElementById("productContainerId");
  const searchInputEl = document.getElementById("searchInput");


  //  Fetch the data from the randomproduct API.......
  const fetchDataStore = async () => {
    try {
        const res = await fetch(`${url}`);
        const data = await res.json();
         return data;
    } catch (error) {
      console.log(error);
    }
  }
  const products = await fetchDataStore();
  console.log(products);

  //  Display the API data where we want...........
  const generateData = (product) => {
   return `<div class="productCard">

   <div class="imageContainer">
     <img src="${product.image}" alt="Click Here">
   </div>

   <div class="contentContainer">
         <h1>${product.title}</h1>
          <p>${product.description.split(' ').slice(1,20).join(' ')}</p>
          <button>$${product.price}</button>
   </div>
</div>  `
  };

  //  Render the information about the fake data in profile card.........
  const renderProfileCard = (products) => { 
    productContainerIdEl.innerHTML = "";
    products.forEach(product => {
          productContainerIdEl.innerHTML += generateData(product);
    });
  };
  renderProfileCard(products);

//  CompareInput function for compairing the value of input and the profile card

     const compareInput = (title , searchInput) => {
       return title.toString().toLowerCase().includes(searchInput);
     }

  //    const checkTextContain = (text,searchText) => {
  //     return text.toString().toLowerCase().includes(searchText);
  
  // }


  //  Handling the input filter Search for the product cards using the filter method in javascript

  const filteredProduct = (event) => {

    console.log("I am here");
    
    // const searchText = event.target.value.toLowerCase();    // Return the input field string
    const searchText = searchInputEl.value;
    
    const filteredProduct = products.filter((product) => {
      console.log("I am here");
      return (
           compareInput(product.title , searchText) || 
           compareInput(product.description , searchText) ||
           compareInput(product.price , searchText)
      )
    });
    renderProfileCard(filteredProduct)
  }
  searchInputEl.addEventListener("keyup", filteredProduct);


})();