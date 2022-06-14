import {
  projectInputDomElement as input,
  projectListDomElement as projectList,
  homeListDomeElement as home,
  addTodoTaskInputContainer as todoInput,
  sortButton,
  todoList,
  todoSortOptionsContainer,
} from "./dom-elements";
import * as utilities from "./utilities-functions";
import { localStorageHandler } from "./mainEventFunctions/window-Load";
import * as homeFunc from "./mainEventFunctions/home-Section";
import { newProjectHandler } from "./mainEventFunctions/project-Create";
import { projectSectionSelectionHandler } from "./mainEventFunctions/project-Item-Functionality";
import { renameProjectListItem } from "./mainEventFunctions/project-Rename";
import { createTodoHandler } from "./mainEventFunctions/todo-create";
import {
  todoSectionHandler,
  todoRenameHandler,
  todoTextAreaHandler,
} from "./mainEventFunctions/todo-item-functionality";
import { sortTodoHandler } from "./mainEventFunctions/sort-todos";

window.addEventListener("load", localStorageHandler);
// home.addEventListener("click", homeSectionHandler);
home.addEventListener("click", (e) => {
  const { target, titleText, targetData, byDateObjectProperty } = homeFunc.createDataObject(e);
  // if (!localStorage.length || !targetData) return;

  if (byDateObjectProperty.length) {
    homeFunc.highlightHomeTabs(target);

    homeFunc.setAttributeToSortButton(targetData);

    homeFunc.changeTodoContainerTitle(titleText);

    homeFunc.makeHeaderVisible();

    homeFunc.makeTodoInputHidden();

    homeFunc.deleteTodoDomList();

    homeFunc.renderTasksByDate(byDateObjectProperty);
  }
});

input.addEventListener("keypress", newProjectHandler);
projectList.addEventListener("click", projectSectionSelectionHandler);
projectList.addEventListener("keypress", renameProjectListItem);
todoInput.addEventListener("keypress", createTodoHandler);
todoList.addEventListener("click", todoSectionHandler);
todoList.addEventListener("keypress", todoRenameHandler);
todoList.addEventListener("keypress", todoTextAreaHandler);
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);
todoSortOptionsContainer.addEventListener("click", sortTodoHandler);
