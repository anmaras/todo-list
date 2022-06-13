import { projectArray } from "/src/js-modules/arrays.js";
import * as utilities from "/src/js-modules/utilities-functions.js";

export function todoCheckBoxFunctionality(
  e,
  todoTitle,
  isChecked,
  todoArray,
  todoIndex
) {
  if (e.target.type === "checkbox") {
    todoTitle.classList.toggle("checked", isChecked);
  }

  if (isChecked && e.target.type === "checkbox") {
    todoArray[todoIndex].checkbox = "checked";
    todoTitle.disabled = isChecked;
    utilities.saveProjectToLocalStorage(projectArray);
  }
  if (!isChecked && e.target.type === "checkbox") {
    todoArray[todoIndex].checkbox = "";
    todoTitle.disabled = isChecked;
    utilities.saveProjectToLocalStorage(projectArray);
  }
}
