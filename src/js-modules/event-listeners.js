import { renderProjectListItem } from "./render-project";
import { projectInputDomElement as input } from "./dom-elements";
import { projectArray } from "./arrays";
import { clearInputValue } from "./utilities-functions";
import { Project } from "./project-class";

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    renderProjectListItem();
    clearInputValue();
    console.log(projectArray);
  }
});
