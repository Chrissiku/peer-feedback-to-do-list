/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

import { tasks } from "./variables.js";

// display tasks function
const displayTask = (myStorage) => {
  tasks.innerHTML = myStorage
    .map(
      (task) => `
        <div id="${task.index}" class="task">
          <div>
              <input id="${
                task.index
              }" class="checkbox" type="checkbox" name="checkbox" ${
        !task.completed ? "" : "checked"
      } />
              <input id="task" type='text' class=" ${
                !task.completed ? "" : "checked"
              } " value="${task.description}" />
          </div>
          <i id="ellips-btn" class="fa-solid fa-ellipsis-vertical ellips hidden"></i>
          <i id="trash" class="fa-solid fa-trash trash"></i>
      </div>
        `
    )
    .join("");
};

export default displayTask;
