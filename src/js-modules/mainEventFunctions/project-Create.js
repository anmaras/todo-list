import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { Project } from "../project-class";

export function createProject(event) {
  const projectName = event.target.value;
  const projectId = utilities.randomNumber();
  const project = new Project(projectName, projectId);

  projectArray.push(project);

  utilities.saveProjectToLocalStorage(projectArray);

  utilities.clearInputValue();

  renderModule.renderProjectListItem.call(project);

  utilities.toggleNotProjectScreen();
}
