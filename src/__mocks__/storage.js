/* eslint-disable linebreak-style */
class LocalStorageMock {
  constructor() {
    this.TaskList = {};
  }

  clear() {
    this.TaskList = {};
  }

  getItem(key) {
    return this.TaskList[key] || null;
  }

  setItem(key, value) {
    this.TaskList[key] = String(value);
  }

  removeItem(key) {
    delete this.TaskList[key];
  }
}

const newList = new LocalStorageMock();
// export default newList;
module.exports = newList;
