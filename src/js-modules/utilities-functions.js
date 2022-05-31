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
        return a.changeToNum(a[property]) < b.changeToNum(b[property])
          ? -1
          : a.changeToNum(a[property]) > b.changeToNum(b[property])
          ? 1
          : 0;
      };
    } else {
      return function (a, b) {
        return a.changeToNum(a[property]) > b.changeToNum(b[property])
          ? -1
          : a.changeToNum(a[property]) < b.changeToNum(b[property])
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
export function saveProject(projects) {
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
  saveProject(storedObjects);
}
