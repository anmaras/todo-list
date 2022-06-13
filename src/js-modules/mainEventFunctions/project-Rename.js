import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { todoHeaderTitle as todoTitle } from "/src/js-modules/dom-elements.js";

export function renameProjectListItem(e) {
  const newText = e.target.value;
  const projectId = e.target.parentElement.dataset.projectId;

  if (e.key === "Enter" && newText) {
    projectArray
      .filter((project) => project.id === Number(projectId))
      .map((project) => {
        project.name = newText;
        todoTitle.textContent = project.name;
        utilities.saveProjectToLocalStorage(projectArray);
        return project;
      });
  }
}
