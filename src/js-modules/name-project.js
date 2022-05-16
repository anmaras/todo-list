import { Project, createNewProjectInstance } from "./project-class";
import { createListItem } from "./render-project";

const projectInput = document.querySelector("#main__task-list__add-task");

function getProjectName(input) {
  const projectName = input;
  return projectName;
}

projectInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createListItem();
  }
});

export { projectInput };
