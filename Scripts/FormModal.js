class FormModal extends Modal {
  #entireErrorModal;
  #requiredInputs;
  #successFunction;

  //Get required inptus
  getRequiredInputs() {
    return this.#requiredInputs;
  }

  getEntireErrorModal() {
    return this.#entireErrorModal;
  }

  excuteSuccessFun() {
    this.#successFunction();
  }

  // Dom travesing to get all the element with the required class
  // setAllRequired() {
  //   this.#requiredInputs = this.getModal().querySelectorAll(".required");
  // }

  //Returns true or false if EVERY required input is not filled in
  isSomeRequiredEmpty() {
    return Array.from(this.getRequiredInputs()).some(
      (el) => el.value.length === 0
    );
  }

  printAllRequiredVal() {
    Array.from(this.getRequiredInputs()).forEach((el) =>
      console.log(el.value, el.value.length === 0)
    );
  }

  addModalEventProp() {
    const obj = this;
    // console.log(this.getRequiredInputs());
    this.getModal().addEventListener("click", function (e) {
      const clicked = e.target;
      const clickedParent = clicked.parentElement;

      //If the container was clicked just return
      if (clicked === this) return;

      // If the user clicked the action  button
      if (clicked === obj.getActionBtn()) {
        //If there's some fields that aren't filled out
        if (obj.isSomeRequiredEmpty.call(obj)) {
          console.log("Some fields not filled out");
        } else {
          //If there isn't some field empty
          console.log("All fields are FILLED");
          obj.excuteSuccessFun();
          //Task.js - Create a new task object with the inputs
          //LocalStorage.js - add the task object to the local-storage array of objects
          //Todo-list.js - display the new todo list
        }
        return;
      }

      // If the user clicked the close button
      if (obj.getCloseBtns().includes(clicked)) {
        obj.hideModal.call(obj);
        return;
      }

      /*If the user clicked the close button but the clicked element was nested 
      inside the close button */
      if (obj.getCloseBtns().includes(clicked.parentElement)) {
        obj.hideModal.call(obj);
        return;
      }
    });
  }

  constructor(
    modal,
    overlay,
    actionBtn,
    openBtns,
    closeBtns,
    errorModal,
    successFunction
  ) {
    // The this keyword could be messed up
    super(modal, overlay, actionBtn, openBtns, closeBtns);
    this.#entireErrorModal = errorModal;
    this.#requiredInputs = this.getModal().querySelectorAll(".required");
    this.#successFunction = successFunction;
    // this.addModalEventProp();
  }
}
