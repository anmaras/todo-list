import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";

export function getTodoPriority(todo, target, priority) {
  /* If there is no check for that value it reset the todo priority */
  if (priority.value === "none") return;

  if (todo.hasOwnProperty("priority")) {
    todo.priority = priority.value;
    target.classList.toggle("low", priority.value === "low");
    target.classList.toggle("medium", priority.value === "medium");
    target.classList.toggle("high", priority.value === "high");
    utilities.saveProjectToLocalStorage(projectArray);
  }

  // todo.priority = priority.value;
}
