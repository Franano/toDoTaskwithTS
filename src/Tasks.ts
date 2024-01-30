import ITask from "./ITask";


let tasks: ITask[] = [];

const createTask = (task: ITask):void => 
{
    tasks.push(task);
}

const readAllTask = (): ITask[] =>
{
    return tasks;
}

const readOneTask = (id: number) => 
{
    const task =  tasks.find(task => task.id === id);

    if(!task)
    {
        throw new Error('Task with this ID not found!');
    }

    return task;

}

const updateTask = (id: number, title: string, done: boolean) =>
{
    const task =  tasks.find(task => task.id === id);

    if(!task)
    {
        throw new Error('Task with this ID not found!');
    }

    task.title = title;
    task.done = done;
}

const deleteTask = (id: number) => 
{
    const taskIndex =  tasks.findIndex(task => task.id === id);

    if(taskIndex === -1)
    {
        throw new Error('Task with this ID not found!');
    }

    tasks.splice(taskIndex, 1);
}

export { createTask, readAllTask, readOneTask, updateTask, deleteTask };