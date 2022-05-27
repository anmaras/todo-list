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

  select() {
    if (!this.priority) {
      let text = "Select an option";
      return text;
    }
    if (this.priority) {
      return this.priority;
    }
  }

  classSetForSelect() {
    if (!this.priority) {
      return this.priority;
    }
    if (this.priority) {
      return this.priority.toLowerCase();
    }
  }

  classSetForCheck() {
    if (!this.checkbox) {
      return "";
    }
    if (this.checkbox) {
      return "disabled";
    }
  }
}

export { Project, Todo };
