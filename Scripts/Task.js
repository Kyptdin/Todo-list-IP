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
    return this.getDueDate().split("-").reverse().join("-");
  }

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#dueDate = this.setDateUS();
    this.#priority = priority;
  }
}
