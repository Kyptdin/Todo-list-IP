class Dates {
  static determineCurrentDate(e) {
    const elaspedTime = new Date().getTime();
    const date = new Date(elaspedTime);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    e.min = `${year}-${month + 1}-${day}`;
  }

  static isValidDate(e) {
    const minDate = new Date(`${e.min}`);
    const inputDate = new Date(`${e.value}`);
    inputDate.setDate(inputDate.getDate() + 1);

    if (inputDate >= minDate) {
      return true;
    } else {
      return false;
    }
  }
}
