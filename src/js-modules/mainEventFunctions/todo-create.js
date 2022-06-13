import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { Todo } from "/src/js-modules/project-class.js";
import * as renderModule from "/src/js-modules/render-project.js";

export function createTodoHandler(e) {
  const target = e.target.closest("input");
  const inputText = target.value;
  const projectId = e.target.dataset.projectTodoId;
  const objectIndex = utilities.getIndex(projectArray, projectId);

  if (e.key === "Enter" && target.value !== "") {
    /* Create new todo */
    const todoObject = new Todo(inputText, projectId, utilities.randomNumber());

    /* Push the todo to project array todo list */
    projectArray[objectIndex].todoList.push(todoObject);

    /* Save todo in local storage */
    utilities.saveProjectToLocalStorage(projectArray);

    /* Render the todo */
    renderModule.renderProjectTodoListItem.call(todoObject);

    /* Clear the todo input */
    target.value = "";

    /* Update the home section numbers */
    utilities.updateTodoByDateTotals();
  }
}
