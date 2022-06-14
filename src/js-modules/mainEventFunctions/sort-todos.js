import * as utilities from "/src/js-modules/utilities-functions.js";
import { projectArray } from "/src/js-modules/arrays.js";
import * as domElement from "/src/js-modules/dom-elements.js";
import * as renderModule from "/src/js-modules/render-project.js";

const sortSwitch = utilities.conditionSwitcher();

/* Sorting function */
function compare(property, condition) {
  /* if it is for priority sorting */
  if (property === "priority") {
    if (condition) {
      return function (a, b) {
        return changeToNum(a[property]) < changeToNum(b[property])
          ? -1
          : changeToNum(a[property]) > changeToNum(b[property])
          ? 1
          : 0;
      };
    } else {
      return function (a, b) {
        return changeToNum(a[property]) > changeToNum(b[property])
          ? -1
          : changeToNum(a[property]) < changeToNum(b[property])
          ? 1
          : 0;
      };
    }
  }
  /* Sort for letters and numbers */
  if (condition) {
    return function (a, b) {
      if (!a[property] || !b[property]) return;
      return a[property].toLowerCase() < b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() > b[property].toLowerCase()
        ? 1
        : 0;
    };
  } else {
    return function (a, b) {
      if (!a[property] || !b[property]) return;
      return a[property].toLowerCase() > b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() < b[property].toLowerCase()
        ? 1
        : 0;
    };
  }
}

function sortTodo(input, project, property, condition) {
  const { [input]: byDateObjectProperty = project } = utilities.getTodoByDate();

  return byDateObjectProperty.sort(compare(property, condition));
}

function renderSortedArray(sortedArray) {
  domElement.todoList.innerHTML = "";
  sortedArray.forEach((todo) => {
    renderModule.renderProjectTodoListItem.call(todo);
  });
}

/* function that change the names of sorting options to match the object property names */
function sortOptionToPropertyName(text) {
  return text === "Priority" ? "priority" : text === "Alphabetically" ? "todoName" : text === "Due Date" ? "date" : "";
}

/* Change priority options to numbers it get sorted by numbers  */
function changeToNum(input) {
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

function sortOptionContainerVisibility(button) {
  domElement.todoSortOptionsContainer.classList.toggle("visible", !button);
}

export function sortTodoHandler(e) {
  const sortByButton = e.target.closest("div div > p");
  if (!sortByButton) return;
  /* check id if its NaN at load, if it is NaN load the id of the first project in the list
  so it wont return error */
  const projectId = +domElement.todoHeaderContainer.dataset.projectId || projectArray[0].id;
  const projectIndex = utilities.getIndex(projectArray, projectId);
  const todoArray = projectArray[projectIndex].todoList;
  const todoProperty = sortOptionToPropertyName(sortByButton.textContent);
  const homeData = domElement.sortButton.getAttribute("data-mode");
  const sortedArray = sortTodo(homeData, todoArray, todoProperty, sortSwitch());

  sortOptionContainerVisibility(sortByButton);

  renderSortedArray(sortedArray);
}
