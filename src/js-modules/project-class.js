import { projectArray } from "./arrays";

class Project {
  constructor(name) {
    this.name = name;
    /* add static method to constructor so every time an instance
    is created it will be stored to the external project array */
    Project.addToArray(this);
  }

  static addToArray(instance) {
    projectArray.push(instance);
  }
}

export { Project };
