class TodoList {
  #todoCountEl;
  #filterBtn;
  #createTaskBtn;
  #todoListContainerEl;
  #taskCreateModal;
  #todoListUI;

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
        ` <div class="todo-list-task" data-index="${i}">
          <div class="task-left">
            <button class="task-status">
              <ion-icon name="${
                ob.strike ? "checkmark-circle-outline" : "ellipse-outline"
              }"></ion-icon>
            </button>
            <div class="todo-list-task-heading ${
              ob.strike === true ? "strike" : " "
            }">${ob.title}</div>
          </div>
          <div class="task-right">
            <div class="task-date">${ob.dueDate}</div>
            <button class="task-option task-option--edit">
              <ion-icon name="create-outline"></ion-icon>
            </button>
            <button class="task-option task-option--trash">
                 <ion-icon name="trash-outline"></ion-icon>
            </button>
            <button class="task-option tash-option--info">
                 <ion-icon name="information-circle-outline"></ion-icon>
            </button>
          </div>
        </div>`
      )
    );
  }

  changeTaskCount(storageOb) {
    console.log("Accessed");
    this.getTodoCountEl().textContent = `Task${
      storageOb.length > 1 ? "s" : ""
    }(${storageOb.length})`;
  }

  updateUI() {
    const jsonObj = JSON.parse(localStorage.getItem("userTodos"));
    this.changeTaskCount(this);
    this.getTodoListContainerEl().innerHTML = "";
    this.displayAllTask(jsonObj);
    this.changeTaskCount(jsonObj);
  }

  //HUGE IDEA I'M GOING TO PASS THE STORAGE OBJECT HERE TO MULTIPLATE THE DATA
  addTodoEventProp(storage) {
    const obj = this;
    this.#todoListUI.addEventListener("click", function (e) {
      e.preventDefault();
      const clicked = e.target;
      console.log(clicked);
      const clickedTaskOpt = clicked.closest(".task-option");
      const clickedTodoOpt = clicked.closest(".options-icon");
      const clickedStatusBtn = clicked.closest(".task-status");

      //If the user didn't click a button with a purpose just return
      if (!clickedTaskOpt && !clickedTodoOpt && !clickedStatusBtn) return;

      // Clicked the check button
      if (clickedStatusBtn) {
        const dataSetStored =
          clickedStatusBtn.closest(".todo-list-task").dataset.index;
        storage.updateStrike(dataSetStored);
        obj.updateUI();
        return;
      }

      if (clickedTaskOpt) {
        if (clickedTaskOpt.closest(".task-option--trash")) {
          const dataSetStored =
            clicked.closest(".todo-list-task").dataset.index;
          storage.deleteTask(dataSetStored);
          obj.updateUI();
          return;
        }

        if (clickedTaskOpt.closest(".tash-option--info")) {
        }
      }
    });
  }

  constructor(
    todoCount,
    filterBtn,
    createTaskBtn,
    todoListContainer,
    taskCreateModal,
    todoListUI
  ) {
    this.#todoCountEl = todoCount;
    this.#filterBtn = filterBtn;
    this.#createTaskBtn = createTaskBtn;
    this.#todoListContainerEl = todoListContainer;
    this.#taskCreateModal = taskCreateModal;
    this.#todoListUI = todoListUI;
  }
}
