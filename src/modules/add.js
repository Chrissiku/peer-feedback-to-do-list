/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { addNewTask } from "./variables.js";
// import TaskList from "./task.js";
import myObject from "./task.js";
import displayTask from "./display.js";

const addN = (tasksList) => {
  if (!addNewTask.value) return;
  const index = tasksList.length + 1;
  const description = addNewTask.value;
  let completed;
  tasksList = [...tasksList, myObject(index, description, completed)];
  localStorage.setItem("tasks", JSON.stringify(tasksList));
  displayTask(tasksList);
  addNewTask.value = "";
};

export default addN;
