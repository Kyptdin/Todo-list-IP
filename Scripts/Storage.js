"use strict";
class Storage {
  #todoListTasks;

  // GETTERS AND SETTERS FOR THE INSTANCE VARIABLE
  getTodoListTasks() {
    return this.#todoListTasks;
  }

  setTodoListTasks(e) {
    this.#todoListTasks = e;
  }

  //ADD Task
  addTask(t) {
    console.log(this.getTodoListTasks());
    // When I push in a string everything works
    //When I push in an object, the object is displayed as empty in the local storage
    // YOU CAN'T STORE ES6 OBJECTS INSIDE LOCAL STORAGE
    const task = {};

    this.getTodoListTasks().push(t);
    this.#todoListTasks.tasks = JSON.stringify(this.#todoListTasks.tasks);
    this.setLocalObj(this.getTodoListTasks());
  }

  setLocalObj(e) {
    let objSer = JSON.stringify(e);
    console.log(objSer);
    localStorage.setItem("userTodos", objSer);
  }

  getLocalObj() {
    const jsonObj = JSON.parse(localStorage.getItem("userTodos"));
    return jsonObj;
  }

  determineStorage() {
    //If the localstorage value doesn't exist just the value to blank obj
    if (!localStorage.getItem("userTodos")) {
      console.log("Doesn't exist");
      this.setLocalObj(this.getTodoListTasks());
    } else {
      // If it does exist
      console.log("Item exist");
      this.#todoListTasks = this.getLocalObj();
    }
  }

  constructor() {
    this.#todoListTasks = [];
  }
}

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
const userInput = prompt("Do you want to store a number");
if (userInput === "yes") {
  const desiredNumberStored = prompt("What number kid?");
  const numberObect = {
    num: desiredNumberStored,
  };

  // We do this beause all data in local storage is stored as strings
  let objSer = JSON.stringify(numberObect);
  localStorage.setItem("userNumber", objSer);
} else if (userInput === "no") {
  // We do this to convert the string in local storage into an object that we can use
  let objDe = JSON.parse(localStorage.getItem("userNumber"));
  let realNumber = objDe.num;
  console.log(realNumber);
  console.log(`Getting a fake value ${localStorage.getItem("joeydog")}`);
}
