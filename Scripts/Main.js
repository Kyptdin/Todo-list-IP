"use strict";
console.log("Im here");
const taskModal = document.querySelector(".section-task-input-modal");
const taskOverlay = document.querySelector(".overlay-task");
const taskModalCloseBtn1 = document.querySelector(".close-modal-btn");
const taskModalCloseBtn2 = document.querySelector(".task-input-cancel");
const taskModalOpenBtn1 = document.querySelector(".options-icon-add");

const CreateTaskModal = new Modal(
  taskModal,
  taskOverlay,
  taskModalCloseBtn1,
  taskModalCloseBtn2,
  taskModalOpenBtn1
);
