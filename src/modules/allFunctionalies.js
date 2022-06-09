/* eslint-disable linebreak-style */
export default class PrintTasks {
  constructor() {
    this.tasksCollection = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  add(task) {
    this.tasksCollection.push(task);
    localStorage.setItem("tasks", JSON.stringify(this.tasksCollection));
  }

  remove(id) {
    this.tasksCollection.splice(id - 1, 1);
    this.tasksCollection.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasksCollection));
  }

  update(id, description) {
    this.tasksCollection.forEach((element, collectionIndex) => {
      if (element.index === parseInt(id, 10)) {
        this.tasksCollection[collectionIndex].description = description;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasksCollection));
  }

  changeStatus(id, status) {
    this.tasksCollection.forEach((element, collectionIndex) => {
      if (element.index === parseInt(id, 10)) {
        this.tasksCollection[collectionIndex].completed = status;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasksCollection));
  }

  funcSize() {
    return this.tasksCollection.length;
  }

  removeCompletedTasks() {
    this.tasksCollection = this.tasksCollection.filter(
      (task) => !task.completed
    );
    this.tasksCollection.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem("tasks", JSON.stringify(this.tasksCollection));
  }
}
