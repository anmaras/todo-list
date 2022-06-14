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
    this.date = "";
    this.notes = "";
    this.priority = "";
    this.checkbox = "";
    this.dateId = "";
  }
}

export { Project, Todo };
