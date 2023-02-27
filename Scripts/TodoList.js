class TodoList {
  #todoCountEl;
  #filterBtn;
  #createTaskBtn;
  #todoListContainerEl;
  #taskCreateModal;
  #todoListUI;
  #taskDesModal;
  #taskEditModal;

  getTodoCountEl() {
    return this.#todoCountEl;
  }

  getTaskEditModal() {
    return this.#taskEditModal;
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

  getTaskCreateModal() {
    return this.#taskCreateModal;
  }

  getTaskDesModal() {
    return this.#taskDesModal;
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
            <button class="task-option task-option--info">
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

  showCreateTaskModal() {
    this.getTaskCreateModal().showModal();
  }

  //HUGE IDEA I'M GOING TO PASS THE STORAGE OBJECT HERE TO MULTIPLATE THE DATA
  addTodoEventProp(storage) {
    const obj = this;
    this.#todoListUI.addEventListener("click", function (e) {
      e.preventDefault();
      const clicked = e.target;
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

        if (clickedTaskOpt.closest(".task-option--info")) {
          const dataSetStored =
            clicked.closest(".todo-list-task").dataset.index;
          // const message = obj.getTaskDesModal().querySelector(".modal-message");
          // message.textContent = `${storage.getTaskDesc(dataSetStored)}`;
          const message = obj
            .getTaskDesModal()
            .getModal()
            .querySelector(".modal-message");
          message.textContent = `${storage.getTaskDesc(dataSetStored)}`;
          obj.getTaskDesModal().showModal();
          return;
        }

        if (clickedTaskOpt.closest(".task-option--edit")) {
          console.log("You clicked the edit button yay!");
          obj.getTaskEditModal().showModal();
          //1. Get the index of the clicked object
          const dataSetStored =
            clicked.closest(".todo-list-task").dataset.index;
          console.log(dataSetStored);
          //2. Set the edit to true inside the object
          storage.getTodoListTasks()[dataSetStored].edit = true;
          console.log(storage.getTodoListTasks());
        }
      }

      if (clickedTodoOpt) {
        if (clickedTodoOpt.closest(".options-icon--add")) {
          obj.showCreateTaskModal();
          return;
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
    todoListUI,
    taskDesModal,
    taskEditModal
  ) {
    this.#todoCountEl = todoCount;
    this.#filterBtn = filterBtn;
    this.#createTaskBtn = createTaskBtn;
    this.#todoListContainerEl = todoListContainer;
    this.#taskCreateModal = taskCreateModal;
    this.#todoListUI = todoListUI;
    this.#taskDesModal = taskDesModal;
    this.#taskEditModal = taskEditModal;
  }
}
