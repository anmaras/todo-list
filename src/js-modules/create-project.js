import { Project } from "./project-class";
import { projectInputDomElement } from "./dom-elements";

function createNewProjectInstance() {
  const newProject = new Project(projectInputDomElement.value);
  return newProject;
}

export { createNewProjectInstance };
