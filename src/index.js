import "./css/shared-style.css";
import "./css/middle-section/main-middle-style.css";
import "./css/left-section/main-left-style.css";
import "./css/left-section/add-project-btn.css";
import "./css/left-section/home-container.css";
import "./css/left-section/project-container.css";
import "./css/left-section/project-create-form.css";
import "./css/middle-section/middle-header.css";
import "./css/middle-section/middle-sorting-box.css";
import "./css/middle-section/middle-todo-list.css";
import "./css/middle-section/noproject-style.css";
import "./css/header-style.css";
import "jb-date-input";
import {
  format,
  compareAsc,
  nextWednesday,
  endOfToday,
  getHours,
  isToday,
  isTomorrow,
} from "date-fns";

import html from "./admin.html";
import { projectArray, todoArray } from "./js-modules/arrays";

import * as events from "./js-modules/event-listeners";

import { createNewTodoInstance } from "./js-modules/create-project";

/* function getObjects() {
  return JSON.parse(localStorage.getItem("projects") || "[]");
}

console.log(getObjects());
 */

/* const result = isToday(new Date());

document.body.addEventListener("click", (e) => {
  console.log(result);
});
 */
