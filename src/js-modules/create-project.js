import { Project } from "./project-class";
import { projectInputDomElement } from "./dom-elements";

function createNewProjectInstance() {
  return new Project(projectInputDomElement.value);
}

export { createNewProjectInstance };
