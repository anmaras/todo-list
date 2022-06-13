import { sortButton, todoList } from "/src/js-modules/dom-elements.js";
import * as renderModule from "/src/js-modules/render-project.js";

export function renderTodoWhileSwitchingProjects(project) {
  /*Add attribute to sort button while click on project items so the sorting work for them*/
  sortButton.setAttribute("data-mode", false);

  todoList.replaceChildren();

  project.todoList.forEach((todo) => {
    renderModule.renderProjectTodoListItem.call(todo);
  });
}
