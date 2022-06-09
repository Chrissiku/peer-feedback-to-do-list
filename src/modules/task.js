/* eslint-disable linebreak-style */
class TaskList {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

const myObject = new TaskList();
export default myObject;
