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

const chevronUp = `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                      />
                    </svg>`;
/* Render Project Dom Elements Function */
function renderProjectListItem() {
  const createProjectElement = document.createElement("li");
  createProjectElement.id = this.id;
  createProjectElement.setAttribute("data-project-id", this.id);
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

function renderProjectTodoListItem() {
  const todoList = document.querySelector(".main__task-list__list");

  const listItemMarkup = `<li class="main__task-list__list-item ${this.classSetForSelect()}" data-todo-id = ${
    this.todoId
  } data-projectId = ${this.projectId}>

                <!-- Header -->
                <div class="main__task-list__list-item__title-container">
                  <div>
                    <label for="main__task-list__list-item__checkbox"></label>
                    <input
                      type="checkbox" ${this.checkbox}
                      id="main__task-list__list-item__checkbox "
                    />
                    <label for="main__task-list__list-item__title"></label>
                    <input type="text" id="main__task-list__list-item__title" class="${
                      this.checkbox
                    }"
                    value="${this.todoName}"
                   ${this.classSetForCheck()} />
                  </div>
                  <div>
                    <p class="main__task-list__list-item__date-reference">Date</p>
                    ${chevronUp}
                  </div>
                </div>

                <!-- Notes -->
                <div class="main__task-list__list-item__notes-container">
                  <label for="main__task-list__list-item__textarea"
                    >Notes</label
                  >
                  <textarea
                    id="main__task-list__list-item__textarea"
                    data-textarea-id = ${this.todoId}
                    placeholder = "Add your notes here..."
                  >${this.notes}</textarea>
                </div>

                <!-- Date -->
                <div class="main__task-list__list-item__date-container">
                  <p class="main__task-list__list-item__date-title">Due Date</p>
                  <div>
                    <button id="today-btn">Today</button>
                    <button id="tomorrow-btn">Tomorrow</button>
                    <label for="main__task-list__list-item__date"></label>
                    <input type="date" id="main__task-list__list-item__date" />
                  </div>
                </div>

                <!-- Priority -->
                <div class="main__task-list__list-item__priority-container">
                  <label for="main__task-list__list-item__priority"
                    >Priority</label
                  >
                  <select
                    name="select-priority"
                    id="main__task-list__list-item__priority"
                    data-select-id = ${this.todoId}
                  >
                    <option value="none" selected="Select an option" disabled hidden>
                      ${this.select()}
                    </option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="None">None</option>
                  </select>
                </div>
                
                <!-- Delete Btn -->
                <button id="delete" class="main__task-list__list-item__delete-task__btn">
                  Delete
                </button>
              </li>`;

  return todoList.insertAdjacentHTML("beforeend", listItemMarkup);
}

export { renderProjectListItem, renderProjectTodoListItem };
