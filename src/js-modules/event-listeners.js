import * as renderModule from "./render-project";
import { Project, Todo } from "./project-class";
import {
  projectInputDomElement as input,
  projectListDomElement as projectList,
  homeListDomeElement as home,
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  sortButton,
  todoList,
  todoSortOptionsContainer,
  todoSortOrder,
  shortingArrow,
} from "./dom-elements";
import * as utilities from "./utilities-functions";
import { projectArray, todoArray } from "./arrays";
import { loadUpdateRenderLocalStorage } from "./mainEventFunctions/window-Load";
import { homeSectionRenderHandler } from "./mainEventFunctions/home-Section";
import { createProject } from "./mainEventFunctions/project-Create";
import { projectSectionSelectionHandler } from "./mainEventFunctions/project-Item-Functionality";
import { renameProjectListItem } from "./mainEventFunctions/project-Rename";
import { createTodoHandler } from "./mainEventFunctions/todo-create";
import {
  todoSectionHandler,
  todoRenameHandler,
  todoTextAreaHandler,
} from "./mainEventFunctions/todo-item-functionality";
import { getTodoTextArea } from "./mainEventFunctions/todo-textArea";

const sortSwitch = utilities.conditionSwitcher();

window.addEventListener("load", loadUpdateRenderLocalStorage);

home.addEventListener("click", homeSectionRenderHandler);

/* Create Project  */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    createProject(e);
  }
});
/* Project Section List */
projectList.addEventListener("click", projectSectionSelectionHandler);

/* Rename Project Object and its dom elements */
projectList.addEventListener("keypress", renameProjectListItem);

todoInput.addEventListener("keypress", createTodoHandler);

todoList.addEventListener("click", todoSectionHandler);

todoList.addEventListener("keypress", todoRenameHandler);

todoList.addEventListener("keypress", todoTextAreaHandler);

/* -----------------Toggle sorting options display ------------------------------------------*/
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

/* Sorting option  */
todoSortOptionsContainer.addEventListener("click", (e) => {
  const sortByButton = e.target.closest("div div > p");
  if (!sortByButton) return;
  /* check id if its NaN at load, if it is NaN load the id of the first project in the list
  so it wont return error */
  const projectId = +header.dataset.projectId || projectArray[0].id;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const project = projectArray[projectIndex];
  const todoProperty = utilities.sortOptionToPropertyName(
    sortByButton.textContent
  );
  todoSortOptionsContainer.classList.toggle("visible", !sortByButton);
  const homeData = sortButton.getAttribute("data-mode");

  utilities.sortTodo(homeData, project.todoList, todoProperty, sortSwitch());
});
