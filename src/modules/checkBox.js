/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import displayTask from "./display.js";

const checkedChange = (ev, tasksList) => {
  if (ev.target.checked) {
    ev.target.nextElementSibling.classList.add("checked");
    const index = ev.target.id;
    tasksList[index - 1].completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    displayTask(tasksList);
  } else {
    ev.target.nextElementSibling.classList.remove("checked");
    const index = ev.target.id;
    tasksList[index - 1].completed = false;
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    displayTask(tasksList);
  }
};

export default checkedChange;
