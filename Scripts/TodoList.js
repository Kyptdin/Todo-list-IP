class TodoList {
  #todoCountEl;
  #filterBtn;
  #createTaskBtn;
  #todoListContainerEl;
  #taskCreateModal;

  getTodoCountEl() {
    return this.#todoCountEl;
  }

  getFiltherBtn() {
    return this.#filterBtn;
  }

  getCreateTaskBtn() {
    return this.#createTaskBtn;
  }

  getTodoListContainerEl() {
    return this.#todoListContainerEl;
  }

  displayAllTask(storageObj) {
    storageObj.forEach((ob, i) =>
      this.#todoListContainerEl.insertAdjacentHTML(
        "beforeend",
        `<div class="todo-list-task" data-task-index ="${i}">
          <div class="task-left">
            <ion-icon class="task-uncheck md hydrated" name="ellipse-outline" role="img" aria-label="ellipse outline"></ion-icon>
            <div class="todo-list-task-heading">${ob.title}</div>
          </div>
          <div class="task-right">
            <div class="task-date">${ob.dueDate}</div>
            <ion-icon class="task-option task-option-edit md hydrated" name="create-outline" role="img" aria-label="create outline"></ion-icon>
            <ion-icon class="task-option task-option-trash md hydrated" name="trash-outline" role="img" aria-label="trash outline"></ion-icon>
            <ion-icon class="task-option tash-option-info md hydrated" name="information-circle-outline" role="img" aria-label="information circle outline"></ion-icon>
          </div>
        </div>`
      )
    );
  }

  changeTaskCount(storageOb) {
    this.getTodoCountEl().textContent = `Task (${storageOb.length})`;
  }

  updateUI() {
    const jsonObj = JSON.parse(localStorage.getItem("userTodos"));
    this.getTodoListContainerEl().innerHTML = "";
    this.displayAllTask(jsonObj);
    this.changeTaskCount(jsonObj);
  }

  addTodoEventProp() {
    const obj = this;
    this.getTodoListContainerEl().addEventListner("click", function () {
      console.log("sup");
    });
  }

  constructor(
    todoCount,
    filterBtn,
    createTaskBtn,
    todoListContainer,
    taskCreateModal
  ) {
    this.#todoCountEl = todoCount;
    this.#filterBtn = filterBtn;
    this.#createTaskBtn = createTaskBtn;
    this.#todoListContainerEl = todoListContainer;
    this.#taskCreateModal = taskCreateModal;
  }
}
