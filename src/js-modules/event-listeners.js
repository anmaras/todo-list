import { renderProjectListItem } from "./render-project";
import {
  projectInputDomElement as input,
  projectListDomElement as list,
  projectItemsOptions as userOptions,
} from "./dom-elements";
import {
  clearInputValue,
  highlight,
  deleteDomProjectListItemAndArray,
} from "./utilities-functions";
import { projectArray } from "./arrays";
import { Project } from "./project-class";
import { createNewProjectInstance } from "./create-project";

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    renderProjectListItem();
    clearInputValue();
  }
});

list.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor that matches the selector. */
  let target = e.target.closest("li");
  /* Select inside li the p element */
  let targetText = target.children[1].textContent;
  let targetId = e.target.id;
  /* If condition met highlight the li item */
  if (target && list.contains(target)) {
    highlight(target);
  }
  /* If condition met delete the dom element and remove it from array */
  if (targetId === "garbageIcon") {
    deleteDomProjectListItemAndArray(list, target, targetText);
  }
});
