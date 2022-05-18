import { renderProjectListItem } from "./render-project";
import {
  projectInputDomElement as input,
  projectListDomElement as list,
} from "./dom-elements";
import {
  clearInputValue,
  highlight,
  deleteDomProjectListItem,
  deleteProjectFromArray,
  renameProject,
} from "./utilities-functions";
import { createNewProjectInstance } from "./create-project";

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const project = createNewProjectInstance(e.target.value);
    renderProjectListItem(project.name, project.id);
    clearInputValue();
  }
});

list.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor that matches the selector. */
  let target = e.target.closest("li");
  let targetId = e.target.id;
  let index = e.target.parentElement.id;
  let text = e.target.value;
  let className = e.target.className;

  /* Highlight the Project Selection */
  if (target && list.contains(target)) {
    highlight(target);
  }
  /* Delete Dom Element & Object from Array */
  if (targetId === "garbageIcon" && e.target !== null) {
    deleteDomProjectListItem(list, target);
    deleteProjectFromArray(index);
  }
  /* Rename Object */
  if (className === "project") {
    renameProject(text, index);
  }
});
