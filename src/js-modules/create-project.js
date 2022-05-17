import { Project } from "./project-class";
import { projectInputDomElement } from "./dom-elements";

/* Create new Instance */
function createNewProjectInstance() {
  return new Project(projectInputDomElement.value);
}

export { createNewProjectInstance };
