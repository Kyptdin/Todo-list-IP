"use strict";
class Modal {
  #modal;
  #overlay;
  constructor(modalEl, overlayEl) {
    this.#modal = modalEl;
    this.#overlay = overlayEl;
  }

  hideModal() {
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
  }

  showModal() {
    this.modal.classList.remove("hidden");
    this.overlay.classList.remove("hidden");
  }
}
