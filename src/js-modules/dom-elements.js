/* Project Input Dom Element */
const projectInputDomElement = document.querySelector(
  "#main__task-list__add-task"
);
/* Project List Dom Element */
const projectListDomElement = document.querySelector(
  ".left-section__projects__container ul"
);
/* Project List Dom Item Element */
const projectListItem = document.querySelectorAll(".project-list__item");

const projectInputValue = document.querySelector("#project");

const homeListDomeElement = document.querySelector(
  ".left-section__home-container"
);

const notProjectYetContainer = document.querySelector(
  ".middle-section__noprojects__container"
);

export {
  projectInputDomElement,
  projectListDomElement,
  projectListItem,
  projectInputValue,
  homeListDomeElement,
  notProjectYetContainer,
};
