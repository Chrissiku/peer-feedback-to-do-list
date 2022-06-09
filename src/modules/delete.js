/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

import displayTask from "./display.js";

const deleteT = (e, tasksList) => {
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
};

export default deleteT;
