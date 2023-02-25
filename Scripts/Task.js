"use strict";
class Task {
  #title;
  #description;
  #dueDate;
  #priority;

  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getPriority() {
    return this.#priority;
  }

  setDateUS() {
    const [year, month, day] = this.getDueDate().split("-");
    this.#dueDate = `${month}-${day}-${year}`;
  }

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }
}
