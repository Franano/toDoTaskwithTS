"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.readOneTask = exports.readAllTask = exports.createTask = void 0;
let tasks = [];
const createTask = (task) => {
    tasks.push(task);
};
exports.createTask = createTask;
const readAllTask = () => {
    return tasks;
};
exports.readAllTask = readAllTask;
const readOneTask = (id) => {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        throw new Error('Task with this ID not found!');
    }
    return task;
};
exports.readOneTask = readOneTask;
const updateTask = (id, title, done) => {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        throw new Error('Task with this ID not found!');
    }
    task.title = title;
    task.done = done;
};
exports.updateTask = updateTask;
const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        throw new Error('Task with this ID not found!');
    }
    tasks.splice(taskIndex, 1);
};
exports.deleteTask = deleteTask;
