import { projectListDomElement } from "./dom-elements";
import { createNewProjectInstance } from "./create-project";

/* Garbage Icon */
const garbageIcon = `<svg
  id="garbageIcon"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
  />
</svg>
`;

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

/* Render Dom Elements Function */
function renderProjectListItem() {
  const markup = `<li class="project-list__item">
                  ${projectIcon}
                  <p>${createNewProjectInstance().name}</p>
                  ${garbageIcon}
                </li>`;
  projectListDomElement.insertAdjacentHTML("beforeend", markup);

  return projectListDomElement;
}

export { renderProjectListItem };
