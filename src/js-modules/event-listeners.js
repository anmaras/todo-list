import * as renderModule from "./render-project";
import { Project, Todo } from "./project-class";
import {
  projectInputDomElement as input,
  projectListDomElement as projectList,
  homeListDomeElement as home,
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  sortButton,
  todoList,
  todoSortOptionsContainer,
  todoSortOrder,
  shortingArrow,
} from "./dom-elements";
import * as utilities from "./utilities-functions";
import { projectArray, todoArray } from "./arrays";
import { loadUpdateRenderLocalStorage } from "./mainEventFunctions/window-Load";
import { homeSectionRenderHandler } from "./mainEventFunctions/home-Section";
import { createProject } from "./mainEventFunctions/project-Create";
import { projectSectionSelectionHandler } from "./mainEventFunctions/project-Item-Functionality";
import { renameProjectListItem } from "./mainEventFunctions/project-Rename";
import { createTodoHandler } from "./mainEventFunctions/todo-create";
import { todoSectionHandler } from "./mainEventFunctions/todo-item-functionality";

const sortSwitch = utilities.conditionSwitcher();

window.addEventListener("load", loadUpdateRenderLocalStorage);

home.addEventListener("click", homeSectionRenderHandler);

/* Create Project  */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    createProject(e);
  }
});
/* Project Section List */
projectList.addEventListener("click", projectSectionSelectionHandler);

/* Rename Project Object and its dom elements */
projectList.addEventListener("keypress", renameProjectListItem);

todoInput.addEventListener("keypress", createTodoHandler);

todoList.addEventListener("click", todoSectionHandler);

// todoList.addEventListener("click", (e) => {
//   const target = e.target.closest("li");
//   if (!target) return;
//   const dateBtnDataSet = e.target.dataset;
//   const targetId = e.target.id;
//   const todoId = Number(target.dataset.todoId);
//   const projectId = Number(target.dataset.projectid);
//   const projectIndex = projectArray.findIndex(
//     (obj) => obj.id === Number(projectId)
//   );
//   const todoIndex = projectArray[projectIndex].todoList.findIndex(
//     (todo) => todo.todoId === Number(todoId)
//   );
//   const project = projectArray[projectIndex];
//   const isChecked = e.target.checked;
//   const todoTitle = e.target.parentElement.lastElementChild;
//   const priority = document.querySelector(`[data-select-id ="${todoId}"]`);
//   const todo = projectArray[projectIndex].todoList[todoIndex];
//   const calendarDisplay = document.getElementById(
//     "main__task-list__list-item__date"
//   );
//   const TODAY = "today";
//   const TOMORROW = "tomorrow";
//   const SPECIFIC = "specific";

//   if (!projectArray.includes(project)) return;

//   /* Delete todo object and its dom element */
//   if (targetId === "delete") {
//     /* Delete todo from project property array */
//     projectArray[projectIndex].todoList.splice(todoIndex, 1);
//     /* delete it from dom */
//     todoList.removeChild(target);
//     /* Update json */
//     utilities.saveProjectToLocalStorage(projectArray);
//     /* Update home section numbers */
//     utilities.updateTodoByDateTotals();
//   }

//   /* Need to be more specific with todoTitle variable value because
//   it check the parent element
//   */
//   if (e.target.type === "checkbox") {
//     /* Change the class of todo parent to checked if toggle if its not with toggle argument */
//     todoTitle.classList.toggle("checked", isChecked);
//   }

//   //   /* Checkbox condition check for refactor it later  using todos project checkbox property*/
//   if (isChecked && e.target.type === "checkbox") {
//     projectArray[projectIndex].todoList[todoIndex].checkbox = "checked";
//     todoTitle.disabled = isChecked;
//     utilities.saveProjectToLocalStorage(projectArray);
//   }
//   if (!isChecked && e.target.type === "checkbox") {
//     projectArray[projectIndex].todoList[todoIndex].checkbox = "";
//     todoTitle.disabled = isChecked;
//     utilities.saveProjectToLocalStorage(projectArray);
//   }

//   /* Dates  */
//   if (
//     dateBtnDataSet.date === TODAY ||
//     dateBtnDataSet.date === TOMORROW ||
//     dateBtnDataSet.date === SPECIFIC
//   ) {
//     const todayBtn = document.querySelector(`[data-today-id="${todoId}"]`);
//     const tomorrowBtn = document.querySelector(
//       `[data-tomorrow-id="${todoId}"]`
//     );
//     const specificDateBtn = document.querySelector(
//       `[data-specific-id ="${todoId}"]`
//     );

//     /* Set the date in object depends the button */
//     utilities.dateReference.call(
//       todo,
//       dateBtnDataSet.date,
//       todoId
//     );

//     /* That way when user select from day picker dayRef and todo object update instant
//     otherwise need dblclick (need to refactor that somehow) */
//     todoList.addEventListener("change", () => {
//       const dateReference = document.querySelector(
//         `[data-reference-id="${todoId}"]`
//       );
//       if (!dateReference) return;
//       const { date } = todo;
//       dateReference.textContent = date;
//       utilities.setObjectInstanceDateProperty.call(
//         todo,
//         dateBtnDataSet.date,
//         todoId
//       );
//       utilities.updateTodoByDateTotals();
//     });

//     utilities.updateTodoByDateTotals();

//     /* Class added for buttons to stay stick to action mode after date select */
//     todayBtn.classList.toggle("activeDate", dateBtnDataSet.date === TODAY);
//     tomorrowBtn.classList.toggle(
//       "activeDate",
//       dateBtnDataSet.date === TOMORROW
//     );
//     specificDateBtn.classList.toggle(
//       "activeDate",
//       dateBtnDataSet.date === SPECIFIC
//     );
//   }

//   /* When the user select today or tomorrow the date at date input display reset */
//   if (dateBtnDataSet.date === TODAY || dateBtnDataSet.date === TOMORROW) {
//     calendarDisplay.value = "";
//   }

//   /* Toggle list item window size*/
//   if (e.target.id === "list-arrow") {
//     utilities.toggleListItemSize.call(todo, target);
//   }

//   /* Priority */

//   /* If there is no check for that value it reset the todo priority */
//   if (priority.value === "none") return;

//   if (todo.hasOwnProperty("priority")) {
//     todo.priority = priority.value;
//     target.classList.toggle("low", priority.value === "low");
//     target.classList.toggle("medium", priority.value === "medium");
//     target.classList.toggle("high", priority.value === "high");
//     utilities.saveProjectToLocalStorage(projectArray);
//   }

//   todo.priority = priority.value;
// });

/* Todo rename functionality */
todoList.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const newTodoName = e.target.value;
  if (!target) return;
  const projectId = Number(
    target.parentElement.parentElement.parentElement.dataset.projectid
  );
  const todoId = Number(
    target.parentElement.parentElement.parentElement.dataset.todoId
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const project = projectArray[projectIndex];

  if (!projectArray.includes(project)) return;
  if (e.key === "Enter") {
    /* for the specific project using the projectIndex filter its todoList
    for the todo item and then with map rename it */
    projectArray[projectIndex].todoList
      .filter((todoItem) => todoItem.todoId === todoId)
      .map((todo) => {
        /* todo name equals to new todo name */
        todo.todoName = newTodoName;
        /* Dom todo name change to new todo object name */
        target.value = todo.todoName;
        utilities.saveProjectToLocalStorage(projectArray);

        return todo;
      });
  }
});
/* TextArea */
todoList.addEventListener("keypress", (e) => {
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
  if (e.key === "Enter") {
    projectArray[projectIndex].todoList[todoIndex].notes = targetTextArea.value;
    utilities.saveProjectToLocalStorage(projectArray);
  }
});

/* -----------------Toggle sorting options display ------------------------------------------*/
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

/* Sorting option  */
todoSortOptionsContainer.addEventListener("click", (e) => {
  const sortByButton = e.target.closest("div div > p");
  if (!sortByButton) return;
  /* check id if its NaN at load, if it is NaN load the id of the first project in the list
  so it wont return error */
  const projectId = +header.dataset.projectId || projectArray[0].id;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const project = projectArray[projectIndex];
  const todoProperty = utilities.sortOptionToPropertyName(
    sortByButton.textContent
  );
  todoSortOptionsContainer.classList.toggle("visible", !sortByButton);
  const homeData = sortButton.getAttribute("data-mode");

  utilities.sortTodo(homeData, project.todoList, todoProperty, sortSwitch());
});
