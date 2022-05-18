import { Project } from "./project-class";

/* Create new Instance */
function createNewProjectInstance(name) {
  return new Project(name);
}

export { createNewProjectInstance };
