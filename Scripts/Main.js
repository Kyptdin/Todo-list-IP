"use strict";
const taskModal = document.querySelector(".section-task-input-modal");
const taskOverlay = document.querySelector(".overlay-task");
const taskModalCloseBtn1 = document.querySelector(".close-modal-btn");
const taskModalCloseBtn2 = document.querySelector(".task-input-cancel");
const taskModalOpenBtn1 = document.querySelector(".options-icon-add");
const taskModalActionBtn = document.querySelector(".task-input-add");
const errorModal = document.querySelector(".error-message");
const errorOverlay = document.querySelector(".overlay-error");
const errorModalCloseBtn = document.querySelector(".close-error");

const createTaskModalSuccess = function () {
  console.log("hi there guys");
};

const ErrorModal = new Modal(
  errorModal,
  errorOverlay,
  null,
  errorModalCloseBtn
);

const CreateTaskModal = new FormModal(
  taskModal,
  taskOverlay,
  taskModalActionBtn,
  [taskModalOpenBtn1],
  [taskModalCloseBtn1, taskModalCloseBtn2],
  ErrorModal,
  createTaskModalSuccess
);

// IT WORKS LIKE THIS GREAT
// I NEED TO GET RID OF THE FUNCTIONS INSIDE THE CONTRUCTOR FUNCTION
// THEY'RE MESSING UP THE THIS KEYWORD
CreateTaskModal.addModalEventProp();
ErrorModal.addModalEventProp();
