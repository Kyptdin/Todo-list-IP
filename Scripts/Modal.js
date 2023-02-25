"use strict";
/*The modal class is used to create a modal and to show and hide a modal. The modals that use this class include the error message and the todo creation modal*/
class Modal {
  #modal;
  #overlay;
  #closeBtns;
  #openBtns;
  // This is like a submit button for a modal or a press "okay" button on the modal
  #actionBtn;

  getModal() {
    return this.#modal;
  }

  getOverlay() {
    return this.#overlay;
  }

  getCloseBtns() {
    return this.#closeBtns;
  }

  getOpenBtns() {
    return this.#actionBtn;
  }

  getActionBtn() {
    return this.#actionBtn;
  }

  hideModal() {
    this.getModal().classList.add("hidden");
    this.getOverlay().classList.add("hidden");
  }

  showModal() {
    // The this keyword here is the object that event listner is attached
    //However since I used bind the this keyword is now the OOP object
    this.getModal().classList.remove("hidden");
    this.getOverlay().classList.remove("hidden");
  }

  modalEventPropFunc(e) {
    if (e.target != e.currentTarget) {
      console.log("You didn't click on the container");
    }
  }

  modalEventPropFun(e) {
    console.log("Event prog from the modal class");
    const clicked = e.target;
    const clickedParent = clicked.parentElement;
    console.log(clicked);
    console.log(clickedParent);

    if (clicked === this) return;

    if (obj.#closeBtns.includes(clicked)) {
      obj.hideModal.call(obj);
      return;
    }

    if (obj.#closeBtns.includes(clicked.parentElement)) {
      obj.hideModal.call(obj);
      return;
    }
  }

  addModalEventProp() {
    // I couldn't use .bind because I'll get a reference error so I decided to create a copy of the this keyword
    const obj = this;
    this.#modal.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      const clicked = e.target;
      const clickedParent = clicked.parentElement;
      console.log("Event propgating");

      if (clicked === this) return;

      if (obj.getCloseBtns().includes(clicked)) {
        obj.hideModal();
        return;
      }

      if (obj.getCloseBtns().includes(clicked.parentElement)) {
        obj.hideModal();
        return;
      }
    });
  }

  // If the object created is a sub class then the event progration form the constructor below will be removed
  // consolidateProp() {
  //   if (!(this instanceof FormModal)) {
  //     console.log("Isn't from the formmodal class");
  //   } else {
  //     // this.getModal().removeEventListner("click", this.modalEventPropFun);
  //     const copy = this;
  //     console.log("hi there mom");
  //     this.getModal().removeEventListener("click", copy.modalEventPropFun);
  //   }
  // }

  constructor(modal, overlay, actionBtn, openBtns, closeBtns) {
    this.#modal = modal;
    this.#overlay = overlay;
    this.#actionBtn = actionBtn;
    this.#openBtns = openBtns;
    this.#closeBtns = closeBtns;
    // MAYBE DON'T DO THIS INSTEAD DO THIS IN THE MAIN.JS
    // this.addModalEventProp();
    // this.consolidateProp();
  }
}
