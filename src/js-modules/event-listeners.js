import * as renderModule from "./render-project";

import { Project, Todo } from "./project-class";

import {
  projectInputDomElement as input,
  projectListDomElement as list,
  homeListDomeElement as home,
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  sortButton,
  todoList,
} from "./dom-elements";

import * as utilities from "./utilities-functions";

import { projectArray } from "./arrays";

/* Home Section  */
home.addEventListener("click", function (e) {
  /* The method elem.closest(selector) returns the nearest ancestor 
  that matches the selector. */
  const target = e.target.closest("div");
  if (target && home.contains(target)) {
    /* Highlight selection on click */
    utilities.highlight(target);
  }
});

/* Project Sections */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const name = e.target.value;
    /* Create a new instance object from Project class */
    const object = new Project(name);
    /* Push the new instance into projectArray */
    projectArray.push(object);
    /*Filter the array,find the object and render it to DOM*/
    projectArray
      .filter((obj) => obj.id === object.id)
      .forEach(renderModule.renderProjectListItem, object);
    /* Clear the input value after  */
    utilities.clearInputValue();
    /* Hide the Img and text after create the first project */
    utilities.toggleNotProjectScreen();
  }
});

list.addEventListener("click", function (e) {
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const targetId = e.target.id;
  /* Find The index of project in array */
  const objectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(listTarget.id)
  );
  const project = projectArray[objectIndex];

  if (listTarget && list.contains(listTarget) && targetId !== "garbageIcon") {
    /* HighLight the project list item on selection */
    utilities.highlight(listTarget);
    /* Make header visible */
    header.classList.add("visible");
    todoInput.classList.add("visible");
    /* Add the project name at header title */
    todoTitle.textContent = project.name;
    /* add custom data set to todo input */
    utilities.createTodoDataSet.call(project);

    /* Conditions for todo list  */
    if (project.todoList.length && todoList.childNodes.length) {
      todoList.replaceChildren();

      project.todoList.forEach((todoItem) => {
        renderModule.renderProjectTodoListItem.call(todoItem);
      });
      return;
    }

    if (!project.todoList.length && todoList.childNodes.length) {
      todoList.replaceChildren();
      return;
    }

    if (project.todoList.length && !todoList.childNodes.length) {
      project.todoList.forEach((todoItem) => {
        renderModule.renderProjectTodoListItem.call(todoItem);
      });
      return;
    }
  }

  if (targetId === "garbageIcon") {
    /* remove the highlight from other projects */
    utilities.highlight(listTarget);
    /* Find the index of the object in the project array */
    /* remove the object from the array */
    projectArray.splice(objectIndex, 1);
    /* remove the dom element */
    list.removeChild(listTarget);
    /* Remove visible class from middle elements section */
    header.classList.remove("visible");
    todoInput.classList.remove("visible");
    /* If project array is empty toggle back img */
    utilities.toggleNotProjectScreen();

    todoList.replaceChildren();
  }
});

/* Rename Project Object and its dom elements */
list.addEventListener("keypress", (e) => {
  const text = e.target.value;
  const id = e.target.parentElement.id;

  if (e.key === "Enter" && text) {
    const newArray = projectArray
      .filter((obj) => obj.id === Number(id))
      .map((obj) => {
        const copyProjectArray = { ...obj };
        copyProjectArray.name = text;
        todoTitle.textContent = copyProjectArray.name;
        return copyProjectArray;
      });
  }
});

/* Toggle sorting options display */
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

/* Add functionality to todo input */
todoInput.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const inputText = target.value;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(target.dataset.id)
  );
  const counter = projectArray[projectIndex].todoList.length;

  if (e.key === "Enter" && target.value !== "") {
    /* Find the projectIndex of object in array */

    /* Create new todo */
    const todoObject = new Todo(inputText, projectIndex, counter);

    /* Push the todo to project array todo list */
    projectArray[projectIndex].todoList.push(todoObject);

    /* Render the todo */
    renderModule.renderProjectTodoListItem.call(todoObject);

    /* Clear the todo input */
    target.value = "";
  }
});

/* Delete todo object and its dom element */
todoList.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  /* check target */
  if (!target) return;
  const targetId = e.target.id;
  const todoId = Number(target.dataset.todoId);
  const projectId = Number(target.dataset.projectid);
  const input = document.querySelector("#main__task-list__list-item__title");
  const titleInputId = "main__task-list__list-item__title";

  /* Delete todo from project property array */
  if (target && todoList.contains(target) && targetId === "delete") {
    projectArray[projectId].todoList.splice(todoId, 1);
    /* delete it from dom */
    todoList.removeChild(target);
  }
});

todoList.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  console.log(target.value);
  if (!target) return;
  const targetId = e.target.id;
  const projectId = Number(
    target.parentElement.parentElement.parentElement.dataset.projectid
  );

  const todoId = Number(
    target.parentElement.parentElement.parentElement.dataset.todoId
  );
  const titleInputId = "main__task-list__list-item__title";

  if (e.key === "Enter") {
    projectArray[projectId].todoList
      .filter((todoItem) => todoItem.todoId === todoId)
      .map((todo) => {
        /* need to find a way when i  switching projects todo names to stay with the
        new array because now they change back to the original array  */
        todo.todoName = e.target.value;

        target.value = todo.todoName;

        return todo;
      });
  }
});

/* des to input giati allazei se ola ta todo
 */
