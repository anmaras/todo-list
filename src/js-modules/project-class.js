const projectList = document.querySelector(
  ".left-section__projects__container ul"
);

function createNewProjectInstance(input) {
  const project = new Project(input);
  return project;
}

class Project {
  constructor(name) {
    this.name = name;
  }
}

export { projectList, Project, createNewProjectInstance };
