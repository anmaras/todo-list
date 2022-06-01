import { projectArray } from "./arrays";
import { todoHeaderTitle } from "./dom-elements";

class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.todoList = [];
  }
}

class Todo {
  constructor(name, projectId, todoId) {
    this.todoName = name;
    this.projectId = projectId;
    this.todoId = todoId;
    this.date = null;
    this.notes = "";
    this.priority = "";
    this.checkbox = "";
  }
}

export { Project, Todo };
