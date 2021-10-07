import {Worker} from "./worker.js";
  
let workerBob = new Worker("Bob", "King", 8, 28);
let workerFill = new Worker("Fill", "Bond", 10, 24);

workerBob.getSalary();
workerFill.getSalary();