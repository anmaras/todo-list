import {
  projectInputDomElement as input,
  notProjectYetContainer,
  todoHeaderTitle,
  todoHeaderContainer,
  addTodoTaskInputContainer,
  todoSortOptionsContainer,
  addTodoTaskInputContainer as newTodoInput,
  todoList,
} from "./dom-elements";
import { projectArray } from "./arrays";
import { Project, Todo } from "./project-class";
import * as dateFns from "date-fns";
import { el } from "date-fns/locale";

let selectedLi;

/* Clear Input values after event listener fired */
export function clearInputValue() {
  input.value = "";
}

/* HighLight List Items And remove Highlight when another list item is clicked */
export function highlight(li) {
  if (selectedLi) {
    /* if selected listItem is true remove class
  at first its falsy but when i click the first li it turns truthy */
    selectedLi.classList.remove("active");
  }
  /* add truthy value to variable outside the scope of the function */
  selectedLi = li;
  selectedLi.classList.add("active");
}

/* Create a new project instance and push it to projectArray */
export function createProjectInstanceAndPush(projectName) {
  return new Project(projectName);
}

/* Find the index of the object in array using its name string */
export function objectArrayIndex(input) {
  return projectArray.findIndex((object) => object.id === input);
}

/* Remove project DOM item  */
export function deleteDomProjectListItem(list, listItem) {
  list.removeChild(listItem);
}

export function deleteDomTodoItem() {
  if (!projectArray.includes(this)) {
    todoList.innerHTML = "";
  }
}

/* Remove the object from the array */
export function deleteProjectFromArray(input) {
  projectArray.splice(input, 1);
}

export function deleteTodoFromArray(index) {
  this.todoList.splice(index, 1);
}

/* Rename the array Object and DOM Element names*/
export function renameProject(newName) {
  this.name = newName;
  // todoHeaderTitle.textContent = this.name;
}

/* Increment Function */
export function increment() {
  let count = 0;
  function counter() {
    count += 1;
    return count;
  }
  counter.reset = () => (count = 0);
  return counter;
}

/* Toggle notProjectScreen class */
export function toggleNotProjectScreen() {
  if (projectArray.length) {
    notProjectYetContainer.classList.add("hidden");
  } else {
    notProjectYetContainer.classList.remove("hidden");
  }
}

/* Change the name of todo title */
export function createTodoName() {
  return (todoHeaderTitle.textContent = this.name);
}

/* Create Data-set for todo input */
export function createTodoDataSet() {
  todoHeaderContainer.setAttribute("data-project-id", this.id);
  const todoInput = newTodoInput.lastElementChild;
  todoInput.setAttribute("data-project-Todo-ID", this.id);
}

/* Toggle the visibility for middle section title and todo input element */
export function toggleMiddleElementsVisibility() {
  if (projectArray.length) {
    todoHeaderContainer.classList.add("visible");
    addTodoTaskInputContainer.classList.add("visible");
  } else {
    todoHeaderContainer.classList.remove("visible");
    addTodoTaskInputContainer.classList.remove("visible");
  }
}

/* Toggle function for sort option container */
export function toggleSortingOptionVisibility() {
  todoSortOptionsContainer.classList.toggle("visible");
}

/* Sorting function */
export function compare(property, condition) {
  /* if it is for priority sorting */
  if (property === "priority") {
    if (condition) {
      return function (a, b) {
        /* Use object method to turn the priority value to number */
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
      return a[property].toLowerCase() < b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() > b[property].toLowerCase()
        ? 1
        : 0;
    };
  } else {
    return function (a, b) {
      return a[property].toLowerCase() > b[property].toLowerCase()
        ? -1
        : a[property].toLowerCase() < b[property].toLowerCase()
        ? 1
        : 0;
    };
  }
}
/* Generate a random number */
export function randomNumber() {
  return Math.floor(Math.random() * 9999);
}

/* Get the projects back from local storage */
export function getProject() {
  return JSON.parse(localStorage.getItem("projects") || []);
}

/* Save the projects in to the local storage*/
export function saveProjectToLocalStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

/* Clear the local storage */
export function clearLocalStorage() {
  localStorage.clear();
}

/* Delete an object from local storage */
export function removeProjectFromStorage(projectId) {
  /* Get the data from local storage */
  let storedObjects = JSON.parse(localStorage.getItem("projects"));

  /* Find the index of the object  */
  let objectIndex = storedObjects.findIndex((item) => item.id === projectId);

  /* Remove the object using the id */
  storedObjects.splice(objectIndex, 1);

  /* Set again the new array back to the local storage */
  saveProjectToLocalStorage(storedObjects);
}

export function updateProjectFromStorage(projectId, input) {
  /* Get the data from local storage */
  let storedObjects = JSON.parse(localStorage.getItem("projects"));

  /* Find the index of the object  */
  let objectIndex = storedObjects.findIndex((item) => item.id === projectId);

  /* Rename the project */
  storedObjects[objectIndex].name = input;

  /* Set again the new array back to the local storage */
  saveProjectToLocalStorage(storedObjects);
}

export function selectTagText() {
  if (!this.priority) {
    let text = "Select an option";
    return text;
  }
  if (this.priority) {
    return this.priority.charAt(0).toUpperCase() + this.priority.slice(1);
  }
}

export function changeToNum(input) {
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

export function classSetForSelect() {
  if (!this.priority) {
    return this.priority;
  }
  if (this.priority) {
    return this.priority.toLowerCase();
  }
}

export function classSetForCheck() {
  if (!this.checkbox) {
    return "";
  }
  if (this.checkbox) {
    return "disabled";
  }
}

export function classSetForDateButtons() {
  if (!this.dateId) return "";

  if (
    this.dateId === "today" ||
    this.dateId === "tomorrow" ||
    this.dateId === "specific"
  ) {
    return "activeDate";
  }
}

export function setDate(data, id) {
  if (data === "today") {
    this.date = dateFns.format(new Date(), "yyyy-MM-dd");
  }
  if (data === "tomorrow") {
    this.date = dateFns.format(dateFns.startOfTomorrow(), "yyyy-MM-dd");
  }
  if (data === "specific") {
    this.date = document.querySelector(`[data-id="${id}"]`).value;
  }

  this.dateId = data;

  saveProjectToLocalStorage(projectArray);
}

/* Rendered date input value */
export function valueForDateDisplay() {
  /* make a new date object from todo date */
  const date = new Date(this.date);
  /* Check if todo day is today */
  const todayCheck = dateFns.isToday(date);
  /* Check if todo day is tomorrow */
  const tomorrowCheck = dateFns.isTomorrow(date);

  /* If condition met return ""
 that function is used in render module to keep the display
 value of date input to this.date if is set for days that are neither 
 today or tomorrow */
  if (todayCheck || tomorrowCheck) return "";

  return this.date;
}
