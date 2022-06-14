import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import * as domElement from "/src/js-modules/dom-elements.js";

// function homeSectionFunctionality(dataSet, text, projectProperty, homeSpecificDiv) {
// utilities.highlight(homeSpecificDiv);
// domElement.sortButton.setAttribute("data-mode", `${dataSet}`);
// domElement.todoHeaderTitle.textContent = text;
// domElement.todoHeaderContainer.classList.add("visible");
// domElement.addTodoTaskInputContainer.classList.remove("visible");
// domElement.todoList.replaceChildren();
// }

export function setAttributeToSortButton(dataSet) {
  domElement.sortButton.setAttribute("data-mode", `${dataSet}`);
}

export function changeTodoContainerTitle(text) {
  domElement.todoHeaderTitle.textContent = text;
}

export function makeHeaderVisible() {
  domElement.todoHeaderContainer.classList.add("visible");
}
export function makeTodoInputHidden() {
  domElement.addTodoTaskInputContainer.classList.remove("visible");
}

export function deleteTodoDomList() {
  domElement.todoList.replaceChildren();
}

export function highlightHomeTabs(homeSpecificDiv) {
  utilities.highlight(homeSpecificDiv);
}

export function renderTasksByDate(projectProperty) {
  projectProperty.forEach((item) => renderModule.renderProjectTodoListItem.call(item));
}

export function createDataObject(e) {
  const target = e.target.closest("div");
  const titleText = target.children[1].textContent;
  const targetData = e.target.closest("div").dataset.array;
  const { [targetData]: byDateObjectProperty } = utilities.getTodoByDate();

  // if (!localStorage.length || !targetData) return;

  // if (byDateObjectProperty.length) {
  //   homeSectionFunctionality(targetData, titleText, byDateObjectProperty, target);
  // }

  return { target, titleText, targetData, byDateObjectProperty };
}
