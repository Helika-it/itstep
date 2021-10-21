import {Student} from "./student.js";

class Aspirant extends Student {

scientificWork;

  constructor(firstName, lastName, group, averageMark, scientificWork){
    super(firstName, lastName, group, averageMark, scientificWork)
    this.scientificWork = scientificWork;
  }

  getScholarship(){
    if (this.averageMark == 5) {
      return "200$";
    } else {
      return "180$";
    }
  }
}

export {Aspirant};