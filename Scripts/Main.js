"use strict";
/**MODAL USED TO CREATE A TASK**/
const taskModal = document.querySelector(".section-task-input-modal");
const taskOverlay = document.querySelector(".overlay-task");
const taskModalCloseBtn1 = document.querySelector(".close-modal-btn");
const taskModalCloseBtn2 = document.querySelector(".task-input-cancel");
const taskModalOpenBtn1 = document.querySelector(".options-icon-add");
const taskModalActionBtn = document.querySelector(".task-input-add");
/**INPUTS REQUIRED TO CREATE A TASK**/
const taskTitleInput = document.querySelector(".user-input-title");
const taskDescriptionInput = document.querySelector(".user-input-description");
const taskDateInput = document.querySelector(".user-input-date");
const taskPriorityInput = document.querySelector(".user-input-priority");
/**TODO LIST UI**/
const taskCountEl = document.querySelector(".task-count");
const todoFilterBtn = document.querySelector(".options-icon--filter");
const todoAddBtn = document.querySelector(".options-icon--add");
const tasksContainerEl = document.querySelector(".section-todo-list-task");
const todoListUI = document.querySelector(".todo-list");
/**ERROR MODAL THAT APPEARS**/
const errorModal = document.querySelector(".error-message");
const errorOverlay = document.querySelector(".overlay-error");
const errorModalCloseBtn = document.querySelector(".close-error");
/**DESCRIPTION MODAL**/
const taskDescModal = document.querySelector(".task-description");
const taskDescModalOverlay = document.querySelector(".overlay-desc");
const taskDescModalCloseBtn = document.querySelector(".close-description");
/**MODAL USED TO EDIT A TASK**/
const taskEditModal = document.querySelector(".section-task-edit-modal");
const taskEditModalOverlay = document.querySelector(".overlay-edit");
const taskEditModalCloseBtn1 = document.querySelector(".close-modal-btn--edit");
const taskEditModalCloseBtn2 = document.querySelector(".task-edit-cancel");
const taskEditModalActionBtn = document.querySelector(".task-edit-add");

console.log(taskEditModalCloseBtn1, taskEditModalCloseBtn2);
const TodoListStorage = new Storage();

const taskEditFun = function () {
  //3. Go through the array until you find an object with edit : true
  //4. Set that object's properties to the input values
  //5. Remove the edit property
  //6. Update the data
};

const ErrorModal = new Modal(errorModal, errorOverlay, null, null, [
  errorModalCloseBtn,
]);

const TaskEditModal = new FormModal(
  taskEditModal,
  taskEditModalOverlay,
  taskEditModalActionBtn,
  null,
  [taskEditModalCloseBtn1, taskEditModalCloseBtn2],
  ErrorModal,
  taskEditFun
);

TaskEditModal.addModalEventProp();

const TaskDescModal = new Modal(
  taskDescModal,
  taskDescModalOverlay,
  null,
  null,
  [taskDescModalCloseBtn]
);

TaskDescModal.addModalEventProp();

ErrorModal.addModalEventProp();

const createTaskModalSuccess = function () {
  // If the date is not valid don't store the todo
  if (!Dates.isValidDate(taskDateInput)) {
    CreateTaskModal.changeErrorModalMsg("Please select a proper date");
    CreateTaskModal.showErrorModal();
    return;
  }
  const SingleTask = new Task(
    taskTitleInput.value,
    taskDescriptionInput.value,
    taskDateInput.value
    // taskPriorityInput.value
  );
  SingleTask.setDateUS();
  TodoListStorage.addTask(SingleTask);
  TodoListUI.updateUI();
};

const CreateTaskModal = new FormModal(
  taskModal,
  taskOverlay,
  taskModalActionBtn,
  [taskModalOpenBtn1],
  [taskModalCloseBtn1, taskModalCloseBtn2],
  ErrorModal,
  createTaskModalSuccess
);
CreateTaskModal.addModalEventProp();

const TodoListUI = new TodoList(
  taskCountEl,
  todoFilterBtn,
  todoAddBtn,
  tasksContainerEl,
  CreateTaskModal,
  todoListUI,
  TaskDescModal,
  TaskEditModal
);
//PASS THE STORAGE OBJECT RIGHT HERE
TodoListUI.addTodoEventProp(TodoListStorage);

if (TodoListStorage.determineStorage()) {
  TodoListUI.updateUI();
}
Dates.determineCurrentDate(taskDateInput);
