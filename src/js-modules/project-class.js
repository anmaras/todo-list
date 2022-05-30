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
      return this.priority.charAt(0).toUpperCase() + this.priority.slice(1);
    }
  }

  changeToNum(input) {
    let num;
    if (input === "low") {
      num = 3;
      return num;
    }
    if (input === "medium") {
      num = 2;
      return num;
    }
    if (input === "high") {
      num = 1;
      return num;
    }
    if (!input || input === "no") {
      num = 4;
      return num;
    }
  }

  test() {
    console.log("test");
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
