import { projectInputDomElement as input } from "./dom-elements";
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

export function objectArrayIndex(textInput) {
  return projectArray.findIndex((object) => object.name === textInput);
}

/* Delete Dom and Array Function */
export function deleteDomProjectListItem(list, listItem) {
  list.removeChild(listItem);
}

export function deleteProjectFromArray(text) {
  projectArray.splice(objectArrayIndex(text), 1);
}
