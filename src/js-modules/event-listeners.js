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
  shortingArrow,
} from "./dom-elements";
import * as utilities from "./utilities-functions";
import { projectArray, todoArray } from "./arrays";
const sortSwitch = utilities.conditionSwitcher();

window.addEventListener("load", () => {
  /* If local storage is empty do nothing */
  if (!localStorage.length) return;

  utilities.getProject().forEach((item) => {
    /* Push everything to projectArray because its empty */
    projectArray.push(item);
    /* And render them on load */
    renderModule.renderProjectListItem.call(item);
  });
  /* Close the noproject img  */
  utilities.toggleNotProjectScreen();

  /* Update all the todo numbers at home section */
  utilities.updateTodoByDateTotals();
});

/* Home Section  */
home.addEventListener("click", function (e) {
  const target = e.target.closest("div");
  const titleText = target.children[1].textContent;
  const targetData = e.target.closest("div").dataset.array;
  if (!localStorage.length || !targetData) return;

  /* Extract the data by the array that contains only the todos set by date */
  const { [targetData]: byDateObjectProperty } = utilities.getTodoByDate();
  /* If that array has data */
  if (byDateObjectProperty.length) {
    /* Highlight the corresponding tab at home section */
    utilities.highlight(target);
    /* Set the data at sort button value to the specific array that will be used so to sort it*/
    sortButton.setAttribute("data-mode", `${targetData}`);
    /* Change the header title content to show the name of the home tab name */
    todoTitle.textContent = titleText;
    /* Make the header visible */
    header.classList.add("visible");
    /* Disable the new todo input */
    todoInput.classList.remove("visible");
    /* Clear the todo list  */
    todoList.replaceChildren();
    /* Render items in the array */
    byDateObjectProperty.forEach((item) => renderModule.renderProjectTodoListItem.call(item));
  }
});

/* Project Sections */
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    const projectName = e.target.value;
    /* Create a new instance object from Project class */
    const object = new Project(projectName, utilities.randomNumber());
    /* Push the new instance into projectArray */
    projectArray.push(object);
    /* Save it to json */
    utilities.saveProjectToLocalStorage(projectArray);
    /* Clear the input value after  */
    utilities.clearInputValue();
    /*Render the object at DOM*/
    renderModule.renderProjectListItem.call(object);
    /* Hide the Img and text after create the first project */
    utilities.toggleNotProjectScreen();
  }
});

/* Project List */
projectList.addEventListener("click", function (e) {
  const projectListItemSelection = e.target.closest("li");
  const projectListItemId = e.target.id;
  /* if that selection is falsy return */
  if (!projectListItemSelection) return;
  /* Every time you click on a project find The index of project in array
  using target id and project id */
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectListItemSelection.id)
  );
  /* Find the project object in array using the index above */
  const specificProject = projectArray[projectIndex];
  /* If the specificProject does not exist return */
  if (!projectArray.includes(specificProject)) return;
  /* If list specificProject item is in specificProject list container and the target id is not garbage icon */
  if (
    projectListItemSelection &&
    projectList.contains(projectListItemSelection) &&
    projectListItemId !== "garbageIcon"
  ) {
    /* HighLight the specificProject list item on selection */
    utilities.highlight(projectListItemSelection);
    /* Make header visible */
    header.classList.add("visible");
    /* Make todo input container */
    todoInput.classList.add("visible");
    /* Add the specificProject name at header title */
    todoTitle.textContent = specificProject.name;
    /* add custom data set to todo input */
    utilities.createTodoDataSet.call(specificProject);
  }
});

/* Delete specificProject section */
projectList.addEventListener("click", function (e) {
  const projectListItemSelection = e.target.closest("li");
  if (!projectListItemSelection) return;
  const projectIndex = projectArray.findIndex(
    (obj) => obj.id === Number(projectListItemSelection.id)
  );
  const specificProject = projectArray[projectIndex];

  if (!projectArray.includes(specificProject)) return;
  /* If target id is this icon */
  if (e.target.id === "garbageIcon") {
    /* remove the specificProject from project array */
    projectArray.splice(projectIndex, 1);
    /* Remove the rendered item from dom */
    projectList.removeChild(projectListItemSelection);
    /* Remove the visible class from header */
    header.classList.remove("visible");
    /* Remove the visible class from the todo input */
    todoInput.classList.remove("visible");
    /* Change the main title content to empty */
    todoTitle.textContent = "";
    /* Clear the html inside the todoList  */
    todoList.innerHTML = "";
    /* Remove local storage entries */
    // utilities.removeProjectFromStorage(project.id);
    utilities.saveProjectToLocalStorage(projectArray);

    utilities.updateTodoByDateTotals();

    /* If the project array is empty */
    if (!projectArray.length) {
      /* Clear its list inner html */
      projectList.innerHTML = "";
      /* Clear again the todo list inner html just in case */
      todoList.innerHTML = "";
      /* Turn on the no project state  */
      utilities.toggleNotProjectScreen();
      /* Clear the local storage */
      utilities.clearLocalStorage();
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

        utilities.saveProjectToLocalStorage(projectArray);

        return project;
      });
  }
});

/* Render todo while switching projects */
projectList.addEventListener("click", (e) => {
  const listTarget = e.target.closest("li");
  if (!listTarget) return;
  const todoListItems = document.querySelectorAll(`[data-projectid="${listTarget.id}"]`);
  const todoListItem = document.querySelector(`[data-projectid="${listTarget.id}"]`);
  const projectIndex = projectArray.findIndex((obj) => obj.id === Number(listTarget.id));
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;
  sortButton.setAttribute("data-mode", false);

  todoList.replaceChildren();

  if (todoList.contains(todoListItem)) return;
  /* Replace the todo list content  */

  /* For selected project search in its todo array  */
  projectArray[projectIndex].todoList.forEach((todo) => {
    renderModule.renderProjectTodoListItem.call(todo);
  });
  // todoSortOrder.classList.remove("visibility");
});

/* -----------------Add functionality to todo input -----------------------------------------*/

todoInput.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const inputText = target.value;
  const projectId = Number(e.target.dataset.projectTodoId);
  const objectIndex = projectArray.findIndex((obj) => obj.id === Number(projectId));

  if (e.key === "Enter" && target.value !== "") {
    /* Create new todo */
    const todoObject = new Todo(inputText, projectId, utilities.randomNumber());

    /* Push the todo to project array todo list */
    projectArray[objectIndex].todoList.push(todoObject);

    /* Save todo in local storage */
    utilities.saveProjectToLocalStorage(projectArray);

    /* Render the todo */
    renderModule.renderProjectTodoListItem.call(todoObject);

    /* Clear the todo input */
    target.value = "";

    utilities.updateTodoByDateTotals();
  }
});

// /* Delete todo object and its dom element */
todoList.addEventListener("click", (e) => {
  const dateBtnDataSet = e.target.dataset;
  const target = e.target.closest("li");
  /* check target if its falsy and if it is return */
  if (!target) return;
  const targetId = e.target.id;
  const todoId = Number(target.dataset.todoId);
  const projectId = Number(target.dataset.projectid);
  const projectIndex = projectArray.findIndex((obj) => obj.id === Number(projectId));
  const todoIndex = projectArray[projectIndex].todoList.findIndex(
    (todo) => todo.todoId === Number(todoId)
  );
  const project = projectArray[projectIndex];
  const isChecked = e.target.checked;
  const todoTitle = e.target.parentElement.lastElementChild;
  const priority = document.querySelector(`[data-select-id ="${todoId}"]`);
  const todo = projectArray[projectIndex].todoList[todoIndex];
  const calendarDisplay = document.getElementById("main__task-list__list-item__date");
  const TODAY = "today";
  const TOMORROW = "tomorrow";
  const SPECIFIC = "specific";

  if (!projectArray.includes(project)) return;

  if (targetId === "delete") {
    /* Delete todo from project property array */
    projectArray[projectIndex].todoList.splice(todoIndex, 1);
    /* delete it from dom */
    todoList.removeChild(target);

    utilities.saveProjectToLocalStorage(projectArray);

    utilities.updateTodoByDateTotals();
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
    utilities.saveProjectToLocalStorage(projectArray);
  }
  if (!isChecked && e.target.type === "checkbox") {
    projectArray[projectIndex].todoList[todoIndex].checkbox = "";
    todoTitle.disabled = isChecked;
    utilities.saveProjectToLocalStorage(projectArray);
  }

  /* Dates  */
  if (
    dateBtnDataSet.date === TODAY ||
    dateBtnDataSet.date === TOMORROW ||
    dateBtnDataSet.date === SPECIFIC
  ) {
    const todayBtn = document.querySelector(`[data-today-id="${todoId}"]`);
    const tomorrowBtn = document.querySelector(`[data-tomorrow-id="${todoId}"]`);
    const specificDateBtn = document.querySelector(`[data-specific-id ="${todoId}"]`);

    /* Set the date depends the button */
    utilities.setDate.call(todo, dateBtnDataSet.date, todoId);

    /* That way when user select from day picker dayRef and todo object update instant 
    otherwise need dblclick (need to refactor that somehow) */
    todoList.addEventListener("change", () => {
      const dateReference = document.querySelector(`[data-reference-id="${todoId}"]`);
      if (!dateReference) return;
      const { date } = todo;
      dateReference.textContent = date;
      utilities.setDate.call(todo, dateBtnDataSet.date, todoId);
      utilities.updateTodoByDateTotals();
    });

    utilities.updateTodoByDateTotals();

    /* Class added for buttons to stay stick to action mode after date select */
    todayBtn.classList.toggle("activeDate", dateBtnDataSet.date === TODAY);
    tomorrowBtn.classList.toggle("activeDate", dateBtnDataSet.date === TOMORROW);
    specificDateBtn.classList.toggle("activeDate", dateBtnDataSet.date === SPECIFIC);
  }

  /* When the user select today or tomorrow the date display is reset */
  if (dateBtnDataSet.date === TODAY || dateBtnDataSet.date === TOMORROW) {
    calendarDisplay.value = "";
  }

  /* Toggle list item size */
  if (e.target.id === "list-arrow") {
    utilities.toggleListItemSize.call(todo, target);
  }

  /* Priority */

  /* If there is no check for that value it reset the todo priority */
  if (priority.value === "none") return;

  if (todo.hasOwnProperty("priority")) {
    todo.priority = priority.value;
    target.classList.toggle("low", priority.value === "low");
    target.classList.toggle("medium", priority.value === "medium");
    target.classList.toggle("high", priority.value === "high");
    utilities.saveProjectToLocalStorage(projectArray);
  }

  todo.priority = priority.value;
});

/* Todo rename functionality */
todoList.addEventListener("keypress", (e) => {
  const target = e.target.closest("input");
  const newTodoName = e.target.value;
  if (!target) return;
  const projectId = Number(target.parentElement.parentElement.parentElement.dataset.projectid);
  const todoId = Number(target.parentElement.parentElement.parentElement.dataset.todoId);
  const projectIndex = projectArray.findIndex((obj) => obj.id === Number(projectId));
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
        utilities.saveProjectToLocalStorage(projectArray);

        return todo;
      });
  }
});

todoList.addEventListener("keypress", (e) => {
  const targetTextArea = e.target.closest("textarea");
  if (!targetTextArea) return;
  const todoId = targetTextArea.dataset.textareaId;
  const projectId = Number(targetTextArea.parentElement.parentElement.dataset.projectid);
  const projectIndex = projectArray.findIndex((obj) => obj.id === Number(projectId));

  const todoIndex = projectArray[projectIndex].todoList.findIndex(
    (todo) => todo.todoId === Number(todoId)
  );
  const project = projectArray[projectIndex];
  if (!projectArray.includes(project)) return;
  if (e.key === "Enter") {
    projectArray[projectIndex].todoList[todoIndex].notes = targetTextArea.value;
    utilities.saveProjectToLocalStorage(projectArray);
  }
});

/* -----------------Toggle sorting options display ------------------------------------------*/
sortButton.addEventListener("click", utilities.toggleSortingOptionVisibility);

/* Sorting option  */
todoSortOptionsContainer.addEventListener("click", (e) => {
  const sortByButton = e.target.closest("div div > p");
  if (!sortByButton) return;
  /* check id if its NaN at load, if it is NaN load the id of the first project in the list
  so it wont return error */
  const projectId = +header.dataset.projectId || projectArray[0].id;
  const projectIndex = projectArray.findIndex((obj) => obj.id === Number(projectId));
  const project = projectArray[projectIndex];
  const todoProperty = utilities.sortOptionToPropertyName(sortByButton.textContent);
  todoSortOptionsContainer.classList.toggle("visible", !sortByButton);
  const homeData = sortButton.getAttribute("data-mode");

  utilities.sortTodo(homeData, project.todoList, todoProperty, sortSwitch());
});
