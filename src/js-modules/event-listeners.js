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
} from "./dom-elements";
import * as utilities from "./utilities-functions";
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
import { sortTodoHandler } from "./mainEventFunctions/sort-todos";

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
todoSortOptionsContainer.addEventListener("click", sortTodoHandler);
