import { projectArray } from "./arrays";

class Project {
  static id = 0;

  constructor(name) {
    this.name = name;
    this.id = Project.id++;
    this.todo = [];
    /* add static method to constructor so every time an instance
    is created it will be stored to the external project array */
    Project.addToArray(this);
  }

  static addToArray(instance) {
    projectArray.push(instance);
  }
}

class Todo extends Project {
  constructor(name, todoName) {
    super(name);
    this.todoName = todoName;
  }

  show() {
    return this;
  }
}

export { Project, Todo };
