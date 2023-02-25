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

//INPUT FIELDS
const taskTitleInput = document.querySelector(".user-input-title");
const taskDescriptionInput = document.querySelector(".user-input-description");
const taskDateInput = document.querySelector(".user-input-date");
const taskPriorityInput = document.querySelector(".user-input-priority");

const TodoListStorage = new Storage();

TodoListStorage.determineStorage();

const createTaskModalSuccess = function () {
  const SingleTask = new Task(
    taskTitleInput.value,
    taskDescriptionInput.value,
    taskDateInput.value,
    taskPriorityInput.value
  );
  TodoListStorage.addTask(SingleTask);
  // console.log(TodoListStorage.getTodoListTasks());
};

//USE THIS TO TEST IF THE APP IS CRUD
// TodoListStorage.setTodoListTasks({ message: "HI THERE GUYS CRUD IS COOL" });
// TodoListStorage.updateTodoListData();
// console.log(TodoListStorage);
// console.log(TodoListStorage.getTodoListTasks());

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
