import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { projectArray } from "/src/js-modules/arrays.js";

export function localStorageHandler() {
  /* If local storage is empty do nothing */
  if (!localStorage.length) return;
  /* Get all the data from json file */
  utilities.getProject().forEach((item) => {
    /* Push everything to projectArray because its empty */
    projectArray.push(item);
    /* And render them on load */
    renderModule.renderProjectListItem.call(item);
  });

  /* Update all the todo numbers at home section */
  utilities.updateTodoByDateTotals();
  /* Close the no project img  */
  utilities.toggleNotProjectScreen();
}
