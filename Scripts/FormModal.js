class FormModal extends Modal {
  #entireErrorModal;
  #requiredInputs;

  //Get required inptus
  getRequiredInputs() {
    return this.#requiredInputs;
  }

  // Dom travesing to get all the element with the required class
  // setAllRequired() {
  //   this.#requiredInputs = this.getModal().querySelectorAll(".required");
  // }

  //Returns true or false if EVERY required input is not filled in
  filledRequiredInputs() {
    return Array.from(this.#requiredInputs).every(function (el) {
      el.value != null;
    });
  }

  addModalEventProp() {
    const ob = this;
    console.log(this.getRequiredInputs());
    // this.getModal().addEventListener("click", function (e) {
    //   console.log("Even propgation from the FormModal clas");
    //   const clicked = e.target;
    //   const clickedParent = clicked.parentElement;
    //   console.log(ob.getCloseBtns());

    //   //If the container was clicked just return
    //   if (clicked === this) return;

    //   // if (obj.getCloseBtns().includes(clicked)) {
    //   //   obj.hideModal.call(obj);
    //   //   return;
    //   // }
    // });
  }

  constructor(modal, overlay, openBtns, closeBtns, errorModal) {
    super(modal, overlay, openBtns, closeBtns);
    this.#entireErrorModal = errorModal;
    this.#requiredInputs = this.getModal().querySelectorAll(".required");
    this.addModalEventProp();
  }
}
