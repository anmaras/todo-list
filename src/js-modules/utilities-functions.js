import {
  projectInputDomElement as input,
  notProjectYetContainer,
  todoHeaderTitle,
  todoHeaderContainer,
  addTodoTaskInputContainer,
} from "./dom-elements";
import { projectArray } from "./arrays";

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

/* Find the index of the object in array using its name string */
export function objectArrayIndex(input) {
  return projectArray.findIndex((object) => object.id === input);
}

/* Remove project DOM item  */
export function deleteDomProjectListItem(list, listItem) {
  list.removeChild(listItem);
}

/* Remove the object from the array */
export function deleteProjectFromArray(input) {
  projectArray.splice(input, 1);
}

/* Rename the array Object and DOM Element names*/
export function renameProject(newName) {
  this.name = newName;
  todoHeaderTitle.textContent = this.name;
}

/* Increment Function */
export function increment() {
  let count = 0;
  function counter() {
    return count++;
  }
  return counter;
}

/* Toggle notProjectScreen class */
export function toggleNotProjectScreen() {
  if (projectArray.length) {
    // notProjectYetContainer.classList.add("opacityOff");
    notProjectYetContainer.classList.add("hidden");
    /*  setTimeout(function () {
      notProjectYetContainer.classList.add("hidden");
    }, 250); */
  } else {
    notProjectYetContainer.classList.remove("hidden");
    /*  setTimeout(function () {
      notProjectYetContainer.classList.remove("opacityOff");
    }, 0); */
  }
}

/* Change the name of todo title */
export function createTodoName() {
  return (todoHeaderTitle.textContent = this.name);
}

export function toggleMiddleElementsVisibility() {
  if (projectArray.length) {
    todoHeaderContainer.classList.add("visible");
    addTodoTaskInputContainer.classList.add("visible");
  } else {
    todoHeaderContainer.classList.remove("visible");
    addTodoTaskInputContainer.classList.remove("visible");
  }
}
