import { createTask, readAllTask, readOneTask, updateTask, deleteTask } from "./Tasks";
import ITask from "./ITask";

const task1: ITask = { id: 1, title: 'Task 1', done: true };
const updatedTask: ITask = {id: 1, title: 'Task 2', done: false};

createTask(task1);

console.log(readAllTask());
updateTask(1, 'Task 2', false);


//console.log(readOneTask());
console.log(readAllTask());

deleteTask(1);
console.log(readAllTask());