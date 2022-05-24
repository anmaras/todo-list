import { projectArray } from "./arrays";

class Project {
  static id = 0;

  constructor(name) {
    this.name = name;
    this.id = Project.id++;
    this.todoList = [];

    /* add static method to constructor so every time an instance
    is created it will be stored to the external project array */
  }
}

class Todo {
  constructor(name, projectId, todoId) {
    this.todoName = name;
    this.projectId = projectId;
    this.todoId = todoId;
    this.date = null;
    this.notes = null;
    this.priority = null;
    this.checkbox = "";
  }
}

export { Project, Todo };
