import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";

export function getTodoTextArea(e, todoArray, targetTextArea, todoIndex) {
  if (e.key === "Enter") {
    todoArray[todoIndex].notes = targetTextArea.value;
    utilities.saveProjectToLocalStorage(projectArray);
  }
}
