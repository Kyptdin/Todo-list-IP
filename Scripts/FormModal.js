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

  getEntireErrorModal() {
    return this.#entireErrorModal;
  }

  showErrorModal() {
    this.#entireErrorModal.showModal();
  }

  changeErrorModalMsg(msg) {
    this.getEntireErrorModal()
      .getModal()
      .querySelector("p").textContent = `${msg}`;
  }

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

  addModalEventProp(storage) {
    const obj = this;
    // console.log(this.getRequiredInputs());
    this.getModal().addEventListener("click", function (e) {
      const clicked = e.target;
      const clickedParent = clicked.parentElement;
      console.log(e.target, e.target.parentElement);

      //If the container was clicked just return
      if (clicked === this) return;

      // If the user clicked the action  button
      if (clicked === obj.getActionBtn()) {
        //If there's some fields that aren't filled out
        if (obj.isSomeRequiredEmpty.call(obj)) {
          CreateTaskModal.changeErrorModalMsg(
            "Please fill in all required fields"
          );
          CreateTaskModal.showErrorModal();
        } else {
          console.log("All fields are FILLED");
          obj.excuteSuccessFun();
        }
        return;
      }

      // If the user clicked the close button
      if (obj.getCloseBtns().includes(e.target)) {
        obj.hideModal();
        const editIndex = -1;
        // 3. Go through all the objects and find the object with the edit property
        storage.getTodoListTasks().forEach((ob, i) => {
          if (ob.edit) {
            editIndex = i;
            return;
          }
        });
      }
      // 4. Delete the edit property of the object
      // RIGHT HERE
      /*If the user clicked the close button but the clicked element was nested 
      inside the close button */
      if (obj.getCloseBtns().includes(e.target.parentElement)) {
        obj.hideModal();
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
