import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import { Todo } from "/src/js-modules/project-class.js";
import * as renderModule from "/src/js-modules/render-project.js";
import { deleteTodo } from "./todo-delete";
import { todoWindowToggleSize } from "./todo-window-toggle";
import { todoCheckBoxFunctionality } from "./todo-checkbox";
import { getTodoDates } from "./todo-Dates";
import { getTodoPriority } from "./todo-priority";
import { getTodoTextArea } from "./todo-textArea";
import { todoRename } from "./todo-rename";

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

export function todoRenameHandler(e) {
  const target = e.target.closest("input");
  if (!target) return;

  const newTodoName = e.target.value;
  const projectId = Number(
    target.parentElement.parentElement.parentElement.dataset.projectid
  );
  const todoId = Number(
    target.parentElement.parentElement.parentElement.dataset.todoId
  );
  const projectIndex = utilities.getIndex(projectArray, projectId);
  const todoArray = projectArray[projectIndex].todoList;

  todoRename(e, todoArray, target, newTodoName, todoId);
}

export function todoTextAreaHandler(e) {
  const targetTextArea = e.target.closest("textarea");
  if (!targetTextArea) return;
  const todoId = targetTextArea.dataset.textareaId;
  const projectId = Number(
    targetTextArea.parentElement.parentElement.dataset.projectid
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );

  const todoIndex = projectArray[projectIndex].todoList.findIndex(
    (todo) => todo.todoId === Number(todoId)
  );
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;

  const todoArray = projectArray[projectIndex].todoList;

  getTodoTextArea(e, todoArray, targetTextArea, todoIndex);
}
