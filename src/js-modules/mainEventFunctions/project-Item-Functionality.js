import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import {
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  addTodoTaskInputContainer as newTodoInput,
} from "/src/js-modules/dom-elements.js";

import { deleteProjectListItem } from "/src/js-modules/mainEventFunctions/project-Delete.js";
import { renderTodoWhileSwitchingProjects } from "/src/js-modules/mainEventFunctions/project-Render-Todo.js";

function createTodoDataSet() {
  header.setAttribute("data-project-id", this.id);
  const todoInput = newTodoInput.lastElementChild;
  todoInput.setAttribute("data-project-Todo-ID", this.id);
}

export function projectSectionSelectionHandler(e) {
  const projectDomItem = e.target.closest("li");
  if (!projectDomItem) return;
  const projectList = projectDomItem.parentElement;
  const projectListItemId = e.target.parentElement.dataset.projectId || projectDomItem.dataset.projectId;
  const projectIndex = utilities.getIndex(projectArray, projectListItemId);
  const specificProject = projectArray[projectIndex];

  utilities.highlight(projectDomItem);

  todoTitle.textContent = specificProject.name;

  createTodoDataSet.call(specificProject);

  header.classList.add("visible");

  todoInput.classList.add("visible");

  renderTodoWhileSwitchingProjects(specificProject);

  if (e.target.id === "garbageIcon") {
    deleteProjectListItem(projectDomItem, projectList, projectIndex);
  }
}
