/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import "./style.css";
import displayTask from "./modules/display.js";
import edit from "./modules/edit.js";
// import TaskList from "./modules/task.js";

import {
  enter,
  addNewTask,
  enterKey,
  tasks,
  refresh,
} from "./modules/variables.js";
import checkedChange from "./modules/checkBox.js";
import clearCompletedTask from "./modules/clear.js";
import addN from "./modules/add.js";

const clearAll = document.querySelector("#clear");

let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

// delete task function
const deleteTask = (e) => {
  const item = e.target;
  if (item.classList.contains("fa-trash")) {
    const removeParent = item.parentElement;
    removeParent.remove();
    const newTaskList = tasksList.filter(
      (elem) => +elem.index !== +removeParent.id
    );
    const updateTaskList = newTaskList.map((elem, index) => {
      elem.index = index + 1;
      return elem;
    });
    localStorage.setItem("tasks", JSON.stringify(updateTaskList));
    tasksList = updateTaskList;
    displayTask(tasksList);
  }
  // deleteT(e, tasksList);
};
tasks.addEventListener("click", deleteTask);

// editing task function
tasks.addEventListener("keypress", (ev) => {
  edit(ev, tasksList);
});

// referesh on click refereshing button function
refresh.addEventListener("click", () => {
  window.location.reload();
});

const addTask = () => {
  enter.addEventListener("click", () => {
    if (!addNewTask.value) return;
    const index = tasksList.length + 1;
    const description = addNewTask.value;
    let completed;
    tasksList = [...tasksList, (index, description, completed)];
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    displayTask(tasksList);
    addNewTask.value = "";
  });

  enterKey.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      addN(tasksList);
    }
  });
};

// Update task list on checked checbox
tasks.addEventListener("change", (ev) => {
  checkedChange(ev, tasksList);
});

// Clear  all commpleted tasks
clearAll.addEventListener("click", () => {
  clearCompletedTask(tasksList);
});

window.addEventListener("DOMContentLoaded", () => {
  displayTask(tasksList);
  addTask();
});
