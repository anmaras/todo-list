import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";

export function todoRename(e, todoArray, targetInput, newTodoName, todoId) {
  if (e.key === "Enter") {
    /* for the specific project using the projectIndex filter its todoList
    for the todo item and then with map rename it */
    todoArray
      .filter((todoItem) => todoItem.todoId === todoId)
      .map((todo) => {
        /* todo name equals to new todo name */
        todo.todoName = newTodoName;
        /* Dom todo name change to new todo object name */
        targetInput.value = todo.todoName;

        utilities.saveProjectToLocalStorage(projectArray);

        return todo;
      });
  }
}
