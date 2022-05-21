import { projectListDomElement } from "./dom-elements";

import Icon from "/src/icons/delete-outline.png";

/* Project Icon */
const projectIcon = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z"
                    />
                  </svg> `;

/* Render Project Dom Elements Function */
function renderProjectListItem() {
  const createProjectElement = document.createElement("li");
  createProjectElement.id = this.id;
  createProjectElement.className = "project-list__item";

  const projectListLabelInputMarkUp = `
                    ${projectIcon}
                    <input value="${this.name}" id="projectInput"  ></>
                                <img src=${Icon} id="garbageIcon">`;
  createProjectElement.insertAdjacentHTML(
    "beforeend",
    projectListLabelInputMarkUp
  );

  projectListDomElement.append(createProjectElement);
  return projectListDomElement;
}

export { renderProjectListItem };
