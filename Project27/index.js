//  Javascript Code for the color Pallette 

// const colorBtnEl = document.getElementById("colorBtn");


// const singleHexColorGenerator = () => {
//     const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//     let hexColor = "#";

//     for(let i = 0 ; i < 6 ; ++i){
//         let random = Math.floor(Math.random() * hex.length);
//          hexColor = hexColor + hex[random];
//     }
//     return hexColor;
// }


// const colorPalletteGenerator = () => {
//     const colorPallette = [];

//     for(let i = 0 ; i < 4 ; ++i){
        
//        colorPallette.push(singleHexColorGenerator());

//     }
//     return colorPallette;
// }

// const renderCOlorPallette = () => {

//     const color_Container = document.querySelector(".colorContainer");
//     color_Container.innerHTML = "";

//    const colorPallette  = colorPalletteGenerator();   // Return the array of hex color name

//       colorPallette.forEach((color,i) => {

//         const colorDiv = document.createElement("div");
//         colorDiv.id = `color${i + 1}`;                // We need to start from 1 so thats why we add a 1
//         colorDiv.style.backgroundColor = color;
//         colorDiv.className = "colorBox";

//         const colorTag = document.createElement("p");
//         colorTag.id = `color${i + 1}Tag`;
//         colorTag.className = "colorTag";
//         colorTag.innerHTML = color;
//         colorDiv.appendChild(colorTag);
//          color_Container.appendChild(colorDiv);
//       })

//       const copyToClipboard = (id) => {
//             const el = document.getElementById(id);

//             navigator.clipboard.writeText(el.innerText).then(() => {
//                alert("Copied Successfully");    
//             }).catch((err) => {
//                 alert("Could Not Copy");
//             });
//       }

//       const colorTags = document.querySelectorAll(".colorTag");           // Returns the array of elements
//      colorTags.forEach((colorTag , i) => {
//      colorTag.addEventListener("click", () => copyToClipboard(`color${i + 1}Tag`));

//      })

    
// }


// renderCOlorPallette();
// colorBtnEl.addEventListener("click",renderCOlorPallette);


//  Code By Myself for the color Palette Generator
// const colorBtnEl = document.getElementById("colorBtn");


// //  Firstly Create a Hexcode Generator Function

// const hexCodeGenerator = () => {

//     const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//     let hash = "#";
//     for(let i = 1; i <= 6; i++){
//         let random = Math.floor(Math.random() * hexArray.length);
//           hash += hexArray[random];
//     }
//     return hash;
// }
// // console.log(hexCodeGenerator());

// //  Function of the ColorPalette Generator 
// const colorPaletteGenerator = () => {
//   const colorPalet = [];

//   for(let i=1 ; i<5 ;++i){
//      colorPalet.push(hexCodeGenerator());
//   }
//   return colorPalet;
// }

// const rendercolorPalette = () => {
//     const colorContainerEl = document.querySelector(".colorContainer");
//     colorContainerEl.innerHTML = "";

//     const colorPalet = colorPaletteGenerator();

//     colorPalet.forEach((value,index) => {


//         //  These lines are important 
//         const colorDiv = document.createElement("div");
//         colorDiv.id = `color${index + 1}`;
//         colorDiv.style.background = value;
//         colorContainerEl.appendChild(colorDiv);
        
        
//         const colorTag = document.createElement("p");
//         colorTag.id = `color${index + 1}Tag`;
//         colorTag.className = "colorTag";
//         colorTag.innerHTML = value;
//         colorDiv.appendChild(colorTag);


//     })



    
// }
// colorBtnEl.addEventListener("click", rendercolorPalette);



//  Again Code for the Color Palette Generator by myself

const colorBtnEl = document.getElementById("colorBtn");
const colorContainerEl = document.querySelector(".colorContainer");
//  First Step to generate the hex color code for the pallette

const generateHexCode = () => {

    const hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hashValue = "#";

    for(let i = 0;i<6 ;++i){
     
        const index =  Math.floor(Math.random() * hexArray.length);
        hashValue = hashValue + hexArray[index]; 
    }
    return hashValue;
}

const colorPalette = () => {

    const paletteArray = [];
    for(let i = 0; i<4; ++i){
       paletteArray.push(generateHexCode());
    }
  return paletteArray;
}

// console.log(colorPalette());

const renderColorPalette = () => {
const palletteArray = colorPalette();

colorContainerEl.innerHTML = "";


palletteArray.forEach((value,index) => {

    const colorDiv = document.createElement("div");
    colorDiv.id = `color${index + 1}`;
    colorDiv.className = "colorBox";
    colorDiv.style.backgroundColor = value;
    colorContainerEl.append(colorDiv);

    const colorTag = document.createElement("p");
    colorTag.className = `colorTag`;
    colorTag.id = `color${index + 1}Tag`;
    colorTag.innerText = value;
    colorDiv.append(colorTag);

});

const copyClipboard = (id) => {
const copyBoard = document.getElementById(id);
navigator.clipboard.writeText(copyBoard.innerText).then(() => {
    alert("Copied SuccessFully");
}).catch(() => {
    alert("Something Went Wrong");
});
};

const colorTags = document.querySelectorAll(".colorTag");
colorTags.forEach((colorTag , index) => {

    //  First Method to copy the innerText
    colorTag.addEventListener("click", () => copyClipboard(`color${index + 1}Tag`));

    // Second Method to copy the innerText
//    colorTag.addEventListener("click", () => {
//     const copyBoard = document.getElementById(`color${index + 1}Tag`);
// navigator.clipboard.writeText(copyBoard.innerText).then(() => {
//     alert("Copied SuccessFully");
// }).catch(() => {
//     alert("Something Went Wrong");
// });
//    })

})
}

colorBtnEl.addEventListener("click",renderColorPalette);



