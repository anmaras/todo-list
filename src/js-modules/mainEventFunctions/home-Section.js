import * as utilities from "/src/js-modules/utilities-functions.js";
import * as renderModule from "/src/js-modules/render-project.js";
import * as domElement from "/src/js-modules/dom-elements.js";

function homeSectionFunctionality(dataSet, text, projectProperty, homeSpecificDiv) {
  /* Highlight the corresponding tab at home section */
  utilities.highlight(homeSpecificDiv);
  /* Set the data at sort button value to the specific array that will be used so to sort it*/
  domElement.sortButton.setAttribute("data-mode", `${dataSet}`);
  /* Change the header title content to show the name of the home tab name */
  domElement.todoHeaderTitle.textContent = text;
  /* Make the header visible */
  domElement.todoHeaderContainer.classList.add("visible");
  /* Disable the new todo input */
  domElement.addTodoTaskInputContainer.classList.remove("visible");
  /* Clear the todo list  */
  domElement.todoList.replaceChildren();
  /* Render items in the array */
  projectProperty.forEach((item) => renderModule.renderProjectTodoListItem.call(item));
}

export function homeSectionHandler(e) {
  const target = e.target.closest("div");
  /* Select the text of the target */
  const titleText = target.children[1].textContent;
  /* Get the dataset after clicking on target */
  const targetData = e.target.closest("div").dataset.array;
  /* If local storage and target data falsy return */
  if (!localStorage.length || !targetData) return;

  /* Extract the data by the array that contains only the todo set by date */
  const { [targetData]: byDateObjectProperty } = utilities.getTodoByDate();
  /* If that array has data user can click on it */
  if (byDateObjectProperty.length) {
    /* Render the todo */
    homeSectionFunctionality(targetData, titleText, byDateObjectProperty, target);
  }
}
