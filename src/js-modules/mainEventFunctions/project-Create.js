import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { Project } from "../project-class";
import * as domElement from "/src/js-modules/dom-elements.js";

export function newProjectHandler(e) {
  const projectName = e.target.value;
  const projectId = utilities.randomNumber();
  const project = new Project(projectName, projectId);

  if (e.key === "Enter" && domElement.projectInputDomElement.value !== "") {
    projectArray.push(project);

    utilities.saveProjectToLocalStorage(projectArray);

    utilities.clearInputValue();

    renderModule.renderProjectListItem.call(project);
  }
  utilities.toggleNotProjectScreen();
}
