// "use strict";
/*
1. Ask the user for input if they want to store a number
  if(the user states no){
    print the number
  } yes {
    create an object 
    set the number inside the object to the input
    store the object in local storage
  }
*/

// WOW THIS IS SO COOL
// const userInput = prompt("Do you want to store a number");
// if (userInput === "yes") {
//   const desiredNumberStored = prompt("What number kid?");
//   const numberObect = {
//     num: desiredNumberStored,
//   };

//   // We do this beause all data in local storage is stored as strings
//   let objSer = JSON.stringify(numberObect);
//   localStorage.setItem("userNumber", objSer);
// } else if (userInput === "no") {
//   // We do this to convert the string in local storage into an object that we can use
//   let objDe = JSON.parse(localStorage.getItem("userNumber"));
//   let realNumber = objDe.num;
//   console.log(realNumber);
// }
