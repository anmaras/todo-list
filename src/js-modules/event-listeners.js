import {
  renderProjectListItem,
  renderTodoHeaderTitle,
  renderTodoAddTaskInput,
  renderProjectTodoListItem,
} from "./render-project";
import { Project, Todo } from "./project-class";

import {
  projectInputDomElement as input,
  projectListDomElement as list,
  homeListDomeElement as home,
  middleSection as rightSection,
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  sortButton,
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
  toggleSortingOptionVisibility,
  createTodoDataSet,
  addTodoObjectToArray,
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
    const project = new Project(e.target.value);
    projectArray.push(project);
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
    createTodoDataSet.call(project);
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

/* Toggle sorting options display */
sortButton.addEventListener("click", toggleSortingOptionVisibility);

todoInput.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");

  if (e.key === "Enter" && target.value !== "") {
    const inputText = target.value;
    const objectIndex = objectArrayIndex(Number(target.dataset.id));
    const project = projectArray[objectIndex];
    const todoObject = new Todo(inputText, project.id);

    addTodoObjectToArray.call(project, todoObject);

    renderProjectTodoListItem.call(todoObject);

    console.log("project array", projectArray);
    console.log(projectArray[objectIndex]);
    console.log("project todo list", projectArray[objectIndex].todoList);
  }
});

/* Dokimase na baleis to id to object sto input tou todo dynamicaly */
