import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import * as domElement from "/src/js-modules/dom-elements.js";

function hideDomeElements() {
  domElement.todoHeaderContainer.classList.remove("visible");
  domElement.addTodoTaskInputContainer.classList.remove("visible");
}

function clearHeaderTitleText() {
  domElement.todoHeaderTitle.textContent = "";
}

function deleteFromArrayAndDom(projectSelection, list, index) {
  utilities.deleteFromArray(projectArray, index);
  list.removeChild(projectSelection);
  domElement.todoList.replaceChildren();
}

export function deleteProjectListItem(projectSelection, list, index) {
  hideDomeElements();

  clearHeaderTitleText();

  deleteFromArrayAndDom(projectSelection, list, index);

  utilities.saveProjectToLocalStorage(projectArray);

  utilities.updateTodoByDateTotals();

  if (!projectArray.length) {
    domElement.todoList.replaceChildren();
    utilities.clearLocalStorage();
    utilities.toggleNotProjectScreen();
  }
}
