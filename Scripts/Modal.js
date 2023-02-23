"use strict";
/*The modal class is used to create a modal and to show and hide a modal. The modals that use this class include the error message and the todo creation modal*/
class Modal {
  #modal;
  #overlay;
  #closeBtn1;
  #closeBtn2;
  #openBtn1;

  hideModal() {
    this.modal.classList.add("hidden");
    this.#overlay.classList.add("hidden");
  }

  showModal() {
    // The this keyword here is the object that event listner is attached
    //However since I used bind the this keyword is now the OOP object
    this.#modal.classList.remove("hidden");
    this.#overlay.classList.remove("hidden");
  }

  addOpenBtnEventLis() {
    // The this keyword here CreateTaskModal
    this.#openBtn1.addEventListener("click", this.showModal.bind(this));
  }

  modalEventPropFunc(e) {
    if (e.target != e.currentTarget) {
      console.log("You didn't click on the container");
    }
  }

  sup() {
    console.log(hi);
  }

  addModalEventProp() {
    // I couldn't use .bind because I'll get a reference error so I decided to create a copy of the this keyword
    const obj = this;
    this.#modal.addEventListener("click", function (e) {
      const clicked = e.target;
      //If you clicked the container stop
      if (clicked === this) return;
      if (clicked === obj.#closeBtn1) {
        console.log("You clicked a close button 1");
      }
      if (clicked === obj.#closeBtn2) {
        console.log("You clicked a close button 2");
        console.log(obj.#closeBtn1);
      }
    });
  }

  constructor(modal, overlay, closeBtn1, closeBtn2, openBtn1) {
    this.#modal = modal;
    this.#overlay = overlay;
    this.#closeBtn1 = closeBtn1;
    this.#closeBtn2 = closeBtn2;
    this.#openBtn1 = openBtn1;
    this.addOpenBtnEventLis();
    this.addModalEventProp();
  }
}
