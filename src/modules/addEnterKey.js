/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

import displayTask from "./display.js";
import { addNewTask } from "./variables.js";
import TaskList from "./task.js";

const addByEnterKey = (e, tasksList) => {
  if (e.keyCode === 13) {
    if (!addNewTask.value) return;
    const index = tasksList.length + 1;
    const description = addNewTask.value;
    let completed;
    tasksList = [...tasksList, new TaskList(index, description, completed)];
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    displayTask(tasksList);
    addNewTask.value = "";
  }
};

export default addByEnterKey;
