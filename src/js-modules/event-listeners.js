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
  todoList,
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
  deleteTodoFromArray,
  deleteDomTodoItem,
} from "./utilities-functions";

import { projectArray } from "./arrays";

/* Home Section  */
home.addEventListener("click", function (e) {
  const target = e.target.closest("div");
  if (target && home.contains(target)) {
    /* Highlight selection on click */
    highlight(target);
  }
});

/* Project Sections */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    /* Create a new instance object from Project class */
    const project = new Project(e.target.value);
    /* Push the new instance into projectArray */
    projectArray.push(project);
    /* Call the function to render the project on DOM and bind it with call */
    renderProjectListItem.call(project);
    /* Clear the input value after  */
    clearInputValue();
    /* Hide the Img and text after create the first project */
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
    /* Delete Dom Element & Object from Array */
    if (targetId === "garbageIcon") {
      deleteProjectFromArray(objectIndex);
      deleteDomProjectListItem(list, listTarget);
      toggleMiddleElementsVisibility();
      deleteDomTodoItem.call(project);
      // toggleNotProjectScreen();
    }

    if (
      (project.todoList.length && todoList.childNodes.length) ||
      (!project.todoList.length && todoList.childNodes.length)
    ) {
      todoList.replaceChildren();
    }

    if (project.todoList.length && !todoList.childNodes.length) {
      project.todoList.forEach((todo) => {
        renderProjectTodoListItem.call(todo);
      });
    }

    if (!project.todoList.length && !todoList.childNodes.length) return;
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
    const projectIndex = objectArrayIndex(Number(target.dataset.id));
    const projectObject = projectArray[projectIndex];
    const todoObject = new Todo(inputText, projectObject.id);

    addTodoObjectToArray.call(projectObject, todoObject);

    renderProjectTodoListItem.call(todoObject);

    // console.log("projectObject array", projectArray);
    // console.log(projectArray[projectIndex]);
    // console.log("projectObject todo list", projectArray[projectIndex].todoList);
  }
});

todoList.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  const todoId = Number(target.dataset.todoId);
  const todoObjIndex = objectArrayIndex(todoId);
  const todoObj = projectArray;

  // console.log(e.target.type);
  // console.log(todoList.contains(target));
  /*  if (target && todoList.contains(target)) {
    e.preventDefault();
    if (e.target.id === "delete") {
      console.log(target.dataset.todoId);
      for (let project of projectArray) {
        console.log(project);
      }
    }
  } */
});
