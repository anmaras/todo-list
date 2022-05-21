import {
  renderProjectListItem,
  renderTodoHeaderTitle,
  renderTodoAddTaskInput,
} from "./render-project";
import { Todo } from "./project-class";

import {
  projectInputDomElement as input,
  projectListDomElement as list,
  homeListDomeElement as home,
  middleSection as rightSection,
  addTodoTaskInputContainer,
  todoHeaderTitle as todoTitle,
} from "./dom-elements";

import {
  clearInputValue,
  highlight,
  deleteDomProjectListItem,
  objectArrayIndex,
  deleteProjectFromArray,
  renameProject,
  toggleNotProjectScreen,
  createTodoName,
  toggleMiddleElementsVisibility,
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
    renderProjectListItem.call(project);
    clearInputValue();
    // toggleNotProjectScreen();
  }
});

list.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor that matches the selector. */
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const targetId = e.target.id;
  const objectIndex = objectArrayIndex(Number(listTarget.id));

  if (listTarget && list.contains(listTarget)) {
    const project = projectArray[objectIndex];
    highlight(listTarget);
    createTodoName.call(project);
    toggleMiddleElementsVisibility();
  }

  /* Delete Dom Element & Object from Array */
  if (targetId === "garbageIcon") {
    deleteProjectFromArray(objectIndex);
    deleteDomProjectListItem(list, listTarget);
    toggleMiddleElementsVisibility();
    // toggleNotProjectScreen();
  }
});

/* Rename Object and dom elements */
list.addEventListener("keypress", function (e) {
  const listTarget = e.target.closest("li");
  const objectIndex = objectArrayIndex(Number(listTarget.id));
  const object = projectArray[objectIndex];
  const newName = e.target.value;

  if (e.key === "Enter" && newName !== "") {
    renameProject.call(object, newName);
  }
});
