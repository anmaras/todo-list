import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { Todo } from "/src/js-modules/project-class.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { deleteTodo } from "./todo-delete";
import { todoWindowToggleSize } from "./todo-window-toggle";
import { todoCheckBoxFunctionality } from "./todo-checkbox";
import { getTodoDates } from "./todo-Dates";
import { getTodoPriority } from "./todo-priority";

export function todoSectionHandler(e) {
  const target = e.target.closest("li");
  if (!target) return;
  const todoId = target.dataset.todoId;
  const projectId = target.dataset.projectid;
  const projectIndex = utilities.getIndex(projectArray, projectId);
  const todoArray = projectArray[projectIndex].todoList;

  const todoIndex = utilities.getTodoListIndex(todoArray, todoId);
  const project = projectArray[projectIndex];
  const dateBtnDataSet = e.target.dataset;
  const targetId = e.target.id;
  const isChecked = e.target.checked;
  const todoTitle = e.target.parentElement.lastElementChild;
  const priority = document.querySelector(`[data-select-id ="${todoId}"]`);
  const todo = todoArray[todoIndex];
  const calendarDisplay = document.getElementById(
    "main__task-list__list-item__date"
  );
  // if (!projectArray.includes(project)) return;

  todoWindowToggleSize(targetId, target, todoId);

  deleteTodo(targetId, projectIndex, todoIndex, target);

  todoCheckBoxFunctionality(e, todoTitle, isChecked, todoArray, todoIndex);

  getTodoDates(dateBtnDataSet, todoId, todo, calendarDisplay);

  getTodoPriority(todo, target, priority);
}
