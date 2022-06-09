/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const clearCompletedTask = (tasksList) => {
  const uncompletedTasks = tasksList.filter(
    (element) => element.completed !== true
  );
  const newTaskList = uncompletedTasks.map((elem, index) => {
    elem.index = index + 1;
    return elem;
  });
  localStorage.setItem("tasks", JSON.stringify(newTaskList));
  window.location.reload();
};

export default clearCompletedTask;
