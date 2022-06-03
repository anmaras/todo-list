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
import { projectArray, todoArray } from "./arrays";
import { Project, Todo } from "./project-class";
import * as dateFns from "date-fns";
import { el } from "date-fns/locale";
import { renderProjectTodoListItem } from "./render-project";

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

export function test(input, project, property, condition) {
  /* Object Destructuring  with dynamic export and use as default the project todolist */
  const { [input]: byDateObjectProperty = project } = getTodoByDate();

  /* Sort the array */
  byDateObjectProperty.sort(compare(property, condition));

  todoList.innerHTML = "";

  byDateObjectProperty.forEach((todo) => {
    renderProjectTodoListItem.call(todo);
  });
}

export function sortOptionToPropertyName(text) {
  return text === "Priority"
    ? "priority"
    : text === "Alphabetically"
    ? "todoName"
    : text === "Due Date"
    ? "date"
    : "";
}

export function conditionSwitcher() {
  let condition = true;

  function changeCondition() {
    condition = !condition;
    return condition;
  }
  return changeCondition;
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

/* Need to find a way to make those 3 into 1 */
export function classSetForTodayButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "today") {
    return "activeDate";
  }
}

export function classSetForTomorrowButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "tomorrow") {
    return "activeDate";
  }
}
export function classSetForSpecificButtons() {
  if (!this.dateId) return "";

  if (this.dateId === "specific") {
    return "activeDate";
  }
}

export function dateReference() {
  return this.date;
}

export function setDate(data, id) {
  const specificDate = document.querySelector(`[data-specific-id="${id}"]`);
  const dateReference = document.querySelector(`[data-reference-id="${id}"]`);

  if (!specificDate) return;
  if (data === "today") {
    this.dateId = data;
    this.date = dateFns.format(new Date(), "yyyy-MM-dd");
  }
  if (data === "tomorrow") {
    this.dateId = data;
    this.date = dateFns.format(dateFns.startOfTomorrow(), "yyyy-MM-dd");
  }
  if (data === "specific") {
    this.dateId = data;
    this.date = specificDate.value;
  }
  dateReference.textContent = `Due Date ${this.date}`;

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

/* Toggle how the todo opens */
export function toggleListItemSize(targetListTodo) {
  const listDropArrow = document.querySelector(`[data-chevron-id="${this.todoId}"]`);
  listDropArrow.classList.toggle("rotate");
  targetListTodo.classList.toggle("visible");
  for (let i = 1; i < targetListTodo.childElementCount; i++) {
    targetListTodo.children[i].classList.toggle("hidden");
  }
}

export function getTodoByDate() {
  let allArray = [];
  getProject().forEach((project) => {
    allArray.push(...project.todoList);
  });
  const todayArray = allArray.filter((item) => item.dateId === "today");
  const tomorrowArray = allArray.filter((item) => item.dateId === "tomorrow");
  const scheduledArray = allArray.filter((item) => item.dateId === "specific");

  return { allArray, todayArray, tomorrowArray, scheduledArray };
}

export function updateTodoByDateTotals() {
  const todoArrayObject = getTodoByDate();

  const all = document.querySelector(".left-section__home-container__all-tasks");
  const today = document.querySelector(".left-section__home-container__today");
  const tomorrow = document.querySelector(".left-section__home-container__tomorrow");
  const scheduled = document.querySelector(".left-section__home-container__scheduled");

  all.lastElementChild.textContent = todoArrayObject.allArray.length;
  today.lastElementChild.textContent = todoArrayObject.todayArray.length;
  tomorrow.lastElementChild.textContent = todoArrayObject.tomorrowArray.length;
  scheduled.lastElementChild.textContent = todoArrayObject.scheduledArray.length;
}
