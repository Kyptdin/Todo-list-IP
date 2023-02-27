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
    // When I push in a string everything works
    //When I push in an object, the object is displayed as empty in the local storage
    // YOU CAN'T STORE ES6 OBJECTS INSIDE LOCAL STORAGE
    const taskLiteral = {
      title: t.getTitle(),
      description: t.getDescription(),
      dueDate: t.getDueDate(),
      // priority: t.getPriority(),
      strike: false,
    };

    this.getTodoListTasks().push(taskLiteral);
    this.setLocalObj(this.getTodoListTasks());
  }

  // GETTERS AND SETTERS TO GET THE LOCAL STORAGE OBJECT
  setLocalObj(e) {
    let objSer = JSON.stringify(e);
    localStorage.setItem("userTodos", objSer);
  }

  getLocalObj() {
    const jsonObj = JSON.parse(localStorage.getItem("userTodos"));
    return jsonObj;
  }

  updateStrike(indexOfObject) {
    const currentStrike = this.getTodoListTasks()[indexOfObject].strike;
    console.log(currentStrike);
    if (currentStrike) {
      this.getTodoListTasks()[indexOfObject].strike = false;
    } else {
      this.getTodoListTasks()[indexOfObject].strike = true;
    }
    this.setLocalObj(this.getTodoListTasks());
  }

  deleteTask(indexOfObject) {
    //Delete object from the object stored in code
    this.getTodoListTasks().splice(indexOfObject, 1);
    this.setLocalObj(this.getTodoListTasks());
  }

  getTaskDesc(indexOfObject) {
    const todoList = this.getTodoListTasks();
    return todoList[indexOfObject].description;
  }

  determineStorage() {
    //If the localstorage value doesn't exist just the value to blank obj
    if (!localStorage.getItem("userTodos")) {
      //Doesnt' exist
      this.setLocalObj(this.getTodoListTasks());
      return false;
    }
    //Does exist
    this.#todoListTasks = this.getLocalObj();
    return true;
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
//   console.log(`Getting a fake value ${localStorage.getItem("joeydog")}`);
// }
