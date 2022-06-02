import { projectListDomElement } from "./dom-elements";
import * as utilities from "./utilities-functions";

import Icon from "/src/icons/delete-outline.png";
import chevron from "/src/icons/chevron-down.png";

/* Render Project Dom Elements Function */
function renderProjectListItem() {
  const createProjectElement = document.createElement("li");
  createProjectElement.id = this.id;
  createProjectElement.setAttribute("data-project-id", this.id);
  createProjectElement.className = "project-list__item";

  const projectListLabelInputMarkUp = `
         <input value="${this.name}" id="projectInput">
            <img src=${Icon} id="garbageIcon">`;
  createProjectElement.insertAdjacentHTML("beforeend", projectListLabelInputMarkUp);

  projectListDomElement.append(createProjectElement);
  return projectListDomElement;
}

function renderProjectTodoListItem() {
  const todoList = document.querySelector(".main__task-list__list");

  const listItemMarkup = `<li 
  class="main__task-list__list-item ${utilities.classSetForSelect.call(this)} visible" 
  data-todo-id = ${this.todoId} data-projectId = ${this.projectId} >
   <!-- Header -->
   <div class="main__task-list__list-item__title-container">
      <div>
         <label for="main__task-list__list-item__checkbox"></label>
         <input
         type="checkbox" ${this.checkbox}
         id="main__task-list__list-item__checkbox "
         />
         <label for="main__task-list__list-item__title"></label>
         <input type="text" id="main__task-list__list-item__title" class="${this.checkbox}"
         value="${this.todoName}"
         ${utilities.classSetForCheck.call(this)} />
      </div>
      <div>
         <p class="main__task-list__list-item__date-reference"
         data-reference-id = ${this.todoId}>
         Due Date ${utilities.dateReference.call(this)}</p>
        <img src=${chevron} id="list-arrow" data-chevron-id=${this.todoId} alt="chevron icon" />

      </div>
   </div>
   <!-- Notes -->
   <div class="main__task-list__list-item__notes-container hidden">
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
   <div class="main__task-list__list-item__date-container hidden">
      <p class="main__task-list__list-item__date-title">Due Date</p>
      <div>
         <button 
         id="today-btn" 
         data-date="today" 
         data-today-id=${this.todoId}
         class="${utilities.classSetForTodayButtons.call(this)}" >
         Today
         </button>

         <button 
         id="tomorrow-btn"
         data-date="tomorrow" 
         data-tomorrow-id = ${this.todoId}
         class="${utilities.classSetForTomorrowButtons.call(this)}"
         >Tomorrow
         </button>

         <label for="main__task-list__list-item__date">
         </label>
         <input type="date" 
         value ="${utilities.valueForDateDisplay.call(this)}" 
         id="main__task-list__list-item__date" 
         class="${utilities.classSetForSpecificButtons.call(this)}"
         data-date="specific" 
         data-specific-id="${this.todoId}">
      </div>
   </div>
   <!-- Priority -->
   <div class="main__task-list__list-item__priority-container hidden">
      <label for="main__task-list__list-item__priority"
         >Priority</label
         >
      <select
         name="select-priority"
         id="main__task-list__list-item__priority"
         data-select-id = ${this.todoId}
         >
         <option value="none" selected="Select an option" disabled hidden>
            ${utilities.selectTagText.call(this)}
         </option>
         <option value="low">Low</option>
         <option value="medium">Medium</option>
         <option value="high">High</option>
         <option value="no">None</option>
      </select>
   </div>
   <!-- Delete Btn -->
   <button id="delete" class="main__task-list__list-item__delete-task__btn hidden">
   Delete
   </button>
</li>`;

  return todoList.insertAdjacentHTML("beforeend", listItemMarkup);
}

export { renderProjectListItem, renderProjectTodoListItem };
