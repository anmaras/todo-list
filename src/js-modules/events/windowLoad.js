import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { projectArray } from "/src/js-modules/arrays.js";

export function loadUpdateRenderLocalStorage() {
  /* If local storage is empty do nothing */
  if (!localStorage.length) return;

  utilities.getProject().forEach((item) => {
    /* Push everything to projectArray because its empty */
    projectArray.push(item);
    /* And render them on load */
    renderModule.renderProjectListItem.call(item);
  });
  /* Close the noproject img  */
  utilities.toggleNotProjectScreen();

  /* Update all the todo numbers at home section */
  utilities.updateTodoByDateTotals();
}
