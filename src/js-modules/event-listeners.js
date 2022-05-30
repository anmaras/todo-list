import * as renderModule from "./render-project";
import { Project, Todo } from "./project-class";
import {
  projectInputDomElement as input,
  projectListDomElement as projectList,
  homeListDomeElement as home,
  addTodoTaskInputContainer as todoInput,
  todoHeaderTitle as todoTitle,
  todoHeaderContainer as header,
  sortButton,
  todoList,
  todoSortOptionsContainer,
  todoSortOrder,
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

const counter = utilities.increment();
/* Project Sections */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const name = e.target.value;
    // count++;
    /* Create a new instance object from Project class */
    const object = new Project(name, counter());
    /* Push the new instance into projectArray */
    projectArray.push(object);
    /*Render the object at DOM*/
    renderModule.renderProjectListItem.call(object);
    /* Clear the input value after  */
    utilities.clearInputValue();
    /* Hide the Img and text after create the first project */
    utilities.toggleNotProjectScreen();
  }
});

/* Project List */
projectList.addEventListener("click", function (e) {
  /* Select the closest li element inside project list */
  const listTarget = e.target.closest("li");
  const targetId = e.target.id;
  /* if that selection is falsy return */
  if (!listTarget) return;
  /* Every time you click on a project find The index of project in array
  using target id and project id */
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(listTarget.id)
  );
  /* Find the project object in array using the index above */
  const project = projectArray[projectIndex];
  /* If the project does not exist return */
  if (!projectArray.includes(project)) return;
  /* If list project item is in project list container and the target id is not garbage icon */
  if (
    listTarget &&
    projectList.contains(listTarget) &&
    targetId !== "garbageIcon"
  ) {
    /* HighLight the project list item on selection */
    utilities.highlight(listTarget);
    /* Make header visible */
    header.classList.add("visible");
    /* Make todo input container */
    todoInput.classList.add("visible");
    /* Add the project name at header title */
    todoTitle.textContent = project.name;
    /* add custom data set to todo input */
    utilities.createTodoDataSet.call(project);
  }
});

projectList.addEventListener("click", function (e) {
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(listTarget.id)
  );
  const project = projectArray[projectIndex];

  if (!projectArray.includes(project)) return;
  /* If target id is this icon */
  if (e.target.id === "garbageIcon") {
    /* remove the project from project array */
    projectArray.splice(projectIndex, 1);
    /* Remove the rendered item from dom */
    projectList.removeChild(listTarget);
    /* Remove the visible class from header */
    header.classList.remove("visible");
    /* Remove the visible class from the todo input */
    todoInput.classList.remove("visible");
    /* Change the main title content to empty */
    todoTitle.textContent = "";
    /* Clear the html inside the todoList  */
    todoList.innerHTML = "";
    /* If the project array is empty */
    if (!projectArray.length) {
      /* Clear its list inner html */
      projectList.innerHTML = "";
      /* Reset the counter function */
      counter.reset();
      /* Clear again the todo list inner html just in case */
      todoList.innerHTML = "";
      /* Turn on the no project state  */
      utilities.toggleNotProjectScreen();
    }
  }
});

/* Rename Project Object and its dom elements */
projectList.addEventListener("keypress", (e) => {
  const newText = e.target.value;
  const projectId = e.target.parentElement.dataset.projectId;

  if (e.key === "Enter" && newText) {
    /* filter the array using the parent id */
    projectArray
      .filter((project) => project.id === Number(projectId))
      .map((project) => {
        /* Rename the project name */
        project.name = newText;
        todoTitle.textContent = project.name;
        return project;
      });
  }
});

/* Render todo while switching projects */
projectList.addEventListener("click", function (e) {
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const todoListItems = document.querySelectorAll(
    `[data-projectid="${listTarget.id}"]`
  );
  const todoListItem = document.querySelector(
    `[data-projectid="${listTarget.id}"]`
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(listTarget.id)
  );
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;

  /* Replace the todo list content  */

  if (todoList.contains(todoListItem)) return;

  todoList.replaceChildren(...todoListItems, ...todoListItems);

  /* For selected project search in its todo array  */
  projectArray[projectIndex].todoList.forEach((todo) => {
    /* Save the todo in item variable using the data set and todo id */
    let item = document.querySelector(`[data-todo-id="${todo.todoId}"]`);
    /* If the item already exist in list in dom return*/
    // if (todoList.contains(todoListItem)) return;
    // if (item && todoList.contains(item)) return;
    /* if the todo it does not exist in dom render it */
    renderModule.renderProjectTodoListItem.call(todo);
  });
  todoSortOrder.classList.remove("visibility");
  // document.querySelector(".main__sorting-order svg").setAttribute("data-position", "up");
});

/* -----------------Add functionality to todo input -----------------------------------------*/
const todoCounter = utilities.increment();

todoInput.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const inputText = target.value;
  const projectId = Number(e.target.dataset.projectTodoId);
  const objectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  /* CHECK IT FOR LATER IT MAKES THE TODO ID TO START FROM 0
  IN CASE ID MESSED UP THE TODO IDS */
  // const todoId = projectArray[objectIndex].todoList.length;

  if (e.key === "Enter" && target.value !== "") {
    /* Create new todo */
    const todoObject = new Todo(inputText, projectId, todoCounter());

    /* Push the todo to project array todo list */
    projectArray[objectIndex].todoList.push(todoObject);

    /* Render the todo */
    renderModule.renderProjectTodoListItem.call(todoObject);

    /* Clear the todo input */
    target.value = "";

    return;
  }
});

// /* Delete todo object and its dom element */
todoList.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  /* check target if its falsy and if it is return */
  if (!target) return;
  const targetId = e.target.id;
  const todoId = Number(target.dataset.todoId);
  const projectId = Number(target.dataset.projectid);
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const todoIndex = projectArray[projectIndex].todoList.findIndex(
    (todo) => todo.todoId === Number(todoId)
  );
  const project = projectArray[projectIndex];
  const isChecked = e.target.checked;
  const todoTitle = e.target.parentElement.lastElementChild;
  const priority = document.querySelector(`[data-select-id ="${todoId}"]`);
  const todo = projectArray[projectIndex].todoList[todoIndex];

  if (!projectArray.includes(project)) return;

  if (targetId === "delete") {
    /* Delete todo from project property array */
    projectArray[projectIndex].todoList.splice(todoIndex, 1);
    /* delete it from dom */
    todoList.removeChild(target);
    if (!projectArray[projectIndex].todoList.length) {
      // todoList.innerHTML = "";
      todoCounter.reset();
    }
  }

  /* Need to be more specific with todoTitle variable value because 
  it check the parent element
  */
  if (e.target.type === "checkbox") {
    todoTitle.classList.toggle("checked", isChecked);
  }

  //   /* Checkbox condition check for refactor it later  using todos project checkbox property*/
  if (isChecked && e.target.type === "checkbox") {
    projectArray[projectIndex].todoList[todoIndex].checkbox = "checked";
    todoTitle.disabled = isChecked;
  }
  if (!isChecked && e.target.type === "checkbox") {
    projectArray[projectIndex].todoList[todoIndex].checkbox = "";
    todoTitle.disabled = isChecked;
  }

  if (priority.value === "none") return;
  if (todo.hasOwnProperty("priority")) {
    todo.priority = priority.value;
    target.classList.toggle("low", priority.value === "Low");
    target.classList.toggle("medium", priority.value === "Medium");
    target.classList.toggle("high", priority.value === "High");
  }
});

/* Todo rename functionality */
todoList.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const newTodoName = e.target.value;
  if (!target) return;
  const projectId = Number(
    target.parentElement.parentElement.parentElement.dataset.projectid
  );
  const todoId = Number(
    target.parentElement.parentElement.parentElement.dataset.todoId
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const project = projectArray[projectIndex];

  if (!projectArray.includes(project)) return;
  if (e.key === "Enter") {
    /* for the specific project using the projectIndex filter its todoList
    for the todo item and then with map rename it */
    projectArray[projectIndex].todoList
      .filter((todoItem) => todoItem.todoId === todoId)
      .map((todo) => {
        /* todo name equals to new todo name */
        todo.todoName = newTodoName;
        /* Dom todo name change to new todo object name */
        target.value = todo.todoName;
        return todo;
      });
  }
});

todoList.addEventListener("keypress", (e) => {
  const targetTextArea = e.target.closest("textarea");
  if (!targetTextArea) return;
  const todoId = targetTextArea.dataset.textareaId;
  const todoNotes = document.querySelector(`[data-textarea-id="${todoId}"]`);
  // const newTodoName = e.target.value;
  // if (!target) return;
  const projectId = Number(
    targetTextArea.parentElement.parentElement.dataset.projectid
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );

  const todoIndex = projectArray[projectIndex].todoList.findIndex(
    (todo) => todo.todoId === Number(todoId)
  );
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;
  if (e.key === "Enter") {
    projectArray[projectIndex].todoList[todoIndex].notes = targetTextArea.value;
  }
});

/* -----------------Toggle sorting options display ------------------------------------------*/
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

todoSortOptionsContainer.addEventListener("click", (e) => {
  /* Target the sort option button element  */
  const sortButton = e.target.matches(".sortBy");
  const targetButton = e.target.closest("div div > p");
  /* Select the p in sorting order container so to change its text  */
  const todoSortingName = document.querySelector(".main__sorting-order p");
  const projectList = document.querySelector(".project-list");
  const projectId = +header.dataset.projectId;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectId)
  );
  const project = projectArray[projectIndex];
  const arrow = document.querySelector(".main__sorting-order svg");
  let state = 0;

  const button = document.querySelector(".sortBy");
  console.log(button);

  if (sortButton && todoSortOptionsContainer.contains(targetButton)) {
    state = 1;
    todoSortingName.textContent = targetButton.textContent;
    // arrow.setAttribute("data-position", "up");
    todoSortOptionsContainer.classList.toggle("visible");
    todoSortOrder.classList.toggle("visibility", state > 0);
  }
});

/* document
  .querySelector(".main__sorting-order svg")
  .addEventListener("click", function () {
    const projectId = +header.dataset.projectId;
    const projectIndex = projectArray.findIndex(
      (obj) => obj.id === Number(projectId)
    );
    const project = projectArray[projectIndex];

    project.todoList.sort((a, b) => {
      const nameA = a.todoName.toLowerCase();
      const nameB = b.todoName.toLowerCase();
      if (this.dataset.position === "up") {
        this.setAttribute("data-position", "down");

        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      }
      if (this.dataset.position === "down") {
        this.setAttribute("data-position", "up");

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      }
      return 0;
    });

    todoList.innerHTML = "";
    project.todoList.forEach((todo) => {
      renderModule.renderProjectTodoListItem.call(todo);
    });
  }); */
