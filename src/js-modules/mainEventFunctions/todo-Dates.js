import * as utilities from "/src/js-modules/utilities-functions.js";
import * as dateFns from "date-fns";
import { projectArray } from "/src/js-modules/arrays.js";
import * as domElement from "/src/js-modules/dom-elements.js";
const TODAY = "today";
const TOMORROW = "tomorrow";
const SPECIFIC = "specific";

export function getTodoDates(dateBtnDataSet, todoId, todo, calendarDisplay) {
  if (
    dateBtnDataSet.date === TODAY ||
    dateBtnDataSet.date === TOMORROW ||
    dateBtnDataSet.date === SPECIFIC
  ) {
    setObjectInstanceDateProperty.call(todo, dateBtnDataSet.date, todoId);

    /* That way when user select from day picker dayRef and todo object update instant
       otherwise need dblclick (need to refactor that somehow) */
    domElement.todoList.addEventListener("change", () => {
      const dateReference = document.querySelector(
        `[data-reference-id="${todoId}"]`
      );
      // if (!dateReference) return;
      const { date } = todo;
      dateReference.textContent = date;
      setObjectInstanceDateProperty.call(todo, dateBtnDataSet.date, todoId);
      utilities.updateTodoByDateTotals();
    });

    utilities.updateTodoByDateTotals();

    dateButtonActionFocus(todoId, TODAY, TOMORROW, SPECIFIC, dateBtnDataSet);

    resetDateInputDisplay(dateBtnDataSet, calendarDisplay);
  }
}

/* Set the date in object depends the button */
function setObjectInstanceDateProperty(data, id) {
  const specificDate = document.querySelector(`[data-specific-id="${id}"]`);
  const dateReference = document.querySelector(`[data-reference-id="${id}"]`);

  // if (!specificDate) return;
  if (data === "today") {
    this.dateId = data;
    this.date = dateFns.format(new Date(), "yyyy-MM-dd");
  }
  if (data === "tomorrow") {
    this.dateId = data;
    this.date = dateFns.format(dateFns.startOfTomorrow(), "yyyy-MM-dd");
  }
  if (data === "specific") {
    this.dateId = data;
    this.date = specificDate.value;
  }

  dateReference.textContent = `Due Date ${this.date}`;

  utilities.saveProjectToLocalStorage(projectArray);
}

/* Class added for buttons to stay stick to action mode after date select */
function dateButtonActionFocus(
  todoId,
  today,
  tomorrow,
  specific,
  dateBtnDataSet
) {
  const todayBtn = document.querySelector(`[data-today-id="${todoId}"]`);
  const tomorrowBtn = document.querySelector(`[data-tomorrow-id="${todoId}"]`);
  const specificDateBtn = document.querySelector(
    `[data-specific-id ="${todoId}"]`
  );
  todayBtn.classList.toggle("activeDate", dateBtnDataSet.date === today);

  tomorrowBtn.classList.toggle("activeDate", dateBtnDataSet.date === tomorrow);
  specificDateBtn.classList.toggle(
    "activeDate",
    dateBtnDataSet.date === specific
  );
}

/* When the user select today or tomorrow the date at date input display reset */
function resetDateInputDisplay(dateBtnDataSet, calendarDisplay) {
  if (dateBtnDataSet.date === TODAY || dateBtnDataSet.date === TOMORROW) {
    calendarDisplay.value = "";
  }
}
