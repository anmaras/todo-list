import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import {
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  todoList,
} from "/src/js-modules/dom-elements.js";

export function deleteProjectListItem(projectSelection, list, index) {
  header.classList.remove("visible");
  todoInput.classList.remove("visible");

  todoTitle.textContent = "";

  utilities.deleteFromArray(projectArray, index);

  list.removeChild(projectSelection);

  todoList.replaceChildren();

  utilities.saveProjectToLocalStorage(projectArray);

  utilities.updateTodoByDateTotals();

  if (!projectArray.length) {
    todoList.replaceChildren();
    utilities.clearLocalStorage();
    utilities.toggleNotProjectScreen();
  }
}
