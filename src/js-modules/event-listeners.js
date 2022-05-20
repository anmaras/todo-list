import { renderProjectListItem, renderTodoHeaderTitle } from "./render-project";
import { Todo } from "./project-class";

import {
  projectInputDomElement as input,
  projectListDomElement as list,
  homeListDomeElement as home,
  todoHeaderContainer,
} from "./dom-elements";

import {
  clearInputValue,
  highlight,
  deleteDomProjectListItem,
  objectArrayIndex,
  deleteProjectFromArray,
  renameProject,
  toggleNotProjectScreen,
  renameTodoTitle,
} from "./utilities-functions";

import { projectArray } from "./arrays";

home.addEventListener("click", function (e) {
  const target = e.target.closest("div");
  if (target && home.contains(target)) {
    highlight(target);
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const project = new Todo(e.target.value, null);
    renderProjectListItem(project.name, project.id);
    clearInputValue();
    console.log(projectArray);
    // toggleNotProjectScreen();
  }
});

list.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor that matches the selector. */
  let target = e.target.closest("li");
  let targetId = e.target.id;
  let text = e.target.value;
  /* find the object index in the array  */
  let objectIndex = objectArrayIndex(Number(target.id));

  /* Highlight the Project Selection */
  if (target && list.contains(target)) {
    highlight(target);
    console.log(projectArray[objectIndex]);
    /* Render Project Todo Title */
    renderTodoHeaderTitle(
      projectArray[objectIndex].name,
      projectArray[objectIndex].id
    );
  }

  /* Delete Dom Element & Object from Array */
  if (targetId === "garbageIcon") {
    deleteProjectFromArray(objectIndex);
    deleteDomProjectListItem(list, target);
    // toggleNotProjectScreen();
  }

  /* Rename Object */
  /* 
  if (e.target.className === "project-list__item") {
    // renameTodoTitle()
    // console.log(targetId);
    console.log(projectArray[objectIndex]);

    console.log(objectIndex);
  } */
});
