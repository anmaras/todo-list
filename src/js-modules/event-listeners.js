import { renderProjectListItem } from "./render-project";

import {
  projectInputDomElement as input,
  projectListDomElement as list,
  homeListDomeElement as home,
} from "./dom-elements";

import {
  clearInputValue,
  highlight,
  deleteDomProjectListItem,
  objectArrayIndex,
  deleteProjectFromArray,
  renameProject,
  toggleNotProjectScreen,
} from "./utilities-functions";

import { createNewProjectInstance } from "./create-project";

// import { projectArray } from "./arrays";

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const project = createNewProjectInstance(e.target.value);
    renderProjectListItem(project.name, project.id);
    clearInputValue();
    toggleNotProjectScreen();
  }
});

home.addEventListener("click", function (e) {
  const target = e.target.closest("div");
  if (target && home.contains(target)) {
    highlight(target);
  }
});

list.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor that matches the selector. */
  let target = e.target.closest("li");
  let targetId = e.target.id;
  let text = e.target.value;
  let className = e.target.className;
  /* find the object index in the array  */
  let objectIndex = objectArrayIndex(Number(e.target.parentElement.id));

  /* Highlight the Project Selection */
  if (target && list.contains(target)) {
    highlight(target);
  }
  /* Delete Dom Element & Object from Array */
  if (targetId === "garbageIcon") {
    deleteProjectFromArray(objectIndex);
    deleteDomProjectListItem(list, target);
    toggleNotProjectScreen();
  }
  /* Rename Object */
  if (targetId === "projectInput") {
    renameProject(text, objectIndex);
  }
});
