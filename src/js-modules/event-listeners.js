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
list.addEventListener("click", function (e) {
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
  if (listTarget && list.contains(listTarget) && targetId !== "garbageIcon") {
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

list.addEventListener("click", function (e) {
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
    list.removeChild(listTarget);
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
      list.innerHTML = "";
      /* Reset the counter function */
      counter.reset();
      /* Clear again the todo list inner html just in case */
      todoList.innerHTML = "";
      /* Turn on the no project state  */
      utilities.toggleNotProjectScreen();
    }
  }
});

list.addEventListener("click", function (e) {
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const todoListItems = document.querySelectorAll(
    `[data-projectid="${listTarget.id}"]`
  );
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(listTarget.id)
  );
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;

  /* Replace the todo list content  */
  todoList.replaceChildren(...todoListItems, ...todoListItems);

  /* For selected project search in its todo array  */
  projectArray[projectIndex].todoList.forEach((todo) => {
    /* Save the todo in item variable using the data set and todo id */
    let item = document.querySelector(`[data-todo-id="${todo.todoId}"]`);
    /* If the item already exist in list in dom return*/
    if (item && todoList.contains(item)) return;
    /* if the todo it does not exist in dom render it */
    renderModule.renderProjectTodoListItem.call(todo);
  });
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

/* Rename Project Object and its dom elements */
list.addEventListener("keypress", (e) => {
  const text = e.target.value;
  const id = e.target.parentElement.id;

  if (e.key === "Enter" && text) {
    projectArray
      .filter((obj) => obj.id === Number(id))
      .map((obj) => {
        // const copyProjectArray = { ...obj };
        obj.name = text;
        todoTitle.textContent = obj.name;
        return obj;
      });
  }
});

/* -----------------Toggle sorting options display ------------------------------------------*/
// sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

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

  if (!projectArray.includes(project)) return;

  const isChecked = e.target.checked;
  const todoTitle = e.target.parentElement.lastElementChild;

  /* Delete todo from project property array */
  if (targetId === "delete") {
    projectArray[projectIndex].todoList.splice(todoIndex, 1);

    /* delete it from dom */
    todoList.removeChild(target);

    if (!projectArray[projectIndex].todoList.length) {
      // todoList.innerHTML = "";
      todoCounter.reset();
    }

    console.log("todoId", todoId);
    console.log("projectId", projectId);
    console.log("projectIndex", projectIndex);
    console.log("todoIndex", todoIndex);
    console.log(projectArray[projectIndex].todoList);
  }
  // console.log("array after delete", projectArray[objectIndex]);

  //   /* Checkbox condition check for refactor it later */
  // if (isChecked && e.target.type === "checkbox") {
  //   projectArray[projectId].todoList[todoId].checkbox = "checked";
  //   todoTitle.classList.add("checked");
  //   todoTitle.disabled = isChecked;
  // }
  // if (!isChecked && e.target.type === "checkbox") {
  //   projectArray[projectId].todoList[todoId].checkbox = "";
  //   todoTitle.classList.remove("checked");
  //   todoTitle.disabled = isChecked;
  // }
});

// todoList.addEventListener("keypress", (e) => {
//   const target = e.target.closest("input");
//   if (!target) return;
//   const projectId = Number(
//     target.parentElement.parentElement.parentElement.dataset.projectid
//   );
//   const todoId = Number(
//     target.parentElement.parentElement.parentElement.dataset.todoId
//   );
//   if (e.key === "Enter") {
//     projectArray[projectId].todoList
//       .filter((todoItem) => todoItem.todoId === todoId)
//       .map((todo) => {
//         /* need to find a way when i switching projects todo names to stay with the
//         new array because now they change back to the original array and now i have to mutate
//         it to work */
//         todo.todoName = e.target.value;

//         target.value = todo.todoName;

//         return todo;
//       });
//   }
// });
