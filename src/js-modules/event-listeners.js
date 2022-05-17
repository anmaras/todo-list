import { renderProjectListItem } from "./render-project";
import { projectInputDomElement } from "./dom-elements";

projectInputDomElement.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderProjectListItem();
  }
});
