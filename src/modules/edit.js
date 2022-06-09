/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const edit = (ev, myStorage) => {
  if (ev.target.type === "text" && ev.key === "Enter") {
    const targetedElem = ev.target.parentElement.parentElement;
    myStorage.filter((e) => +e.index === +targetedElem.id);
    myStorage[targetedElem.id - 1].description = ev.target.value;
    localStorage.setItem("tasks", JSON.stringify(myStorage));
  }
};

export default edit;
