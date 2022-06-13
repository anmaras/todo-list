import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import * as domElement from "/src/js-modules/dom-elements.js";

export function deleteTodo(targetId, projectIndex, todoIndex, target) {
  if (targetId === "delete") {
    /* Delete todo from project property array */
    projectArray[projectIndex].todoList.splice(todoIndex, 1);
    /* delete it from dom */
    domElement.todoList.removeChild(target);
    /* Update json */
    utilities.saveProjectToLocalStorage(projectArray);
    /* Update home section numbers */
    utilities.updateTodoByDateTotals();
  }
}
