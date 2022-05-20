import { Project, Todo } from "./project-class";

/* Create new Instance */
function createNewProjectInstance(name) {
  return new Project(name);
}
function createNewTodoInstance(name, todoName = null) {
  return new Todo(name, todoName);
}

export { createNewProjectInstance, createNewTodoInstance };
