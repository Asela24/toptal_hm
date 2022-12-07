import {createNewTask} from './TasksManager';

const URL ='http://localhost:3001/tasks';


const getAll = () => {
    fetch(URL).then(response =>  response.json())
    .then(data => data.forEach(task => {
        const newTask = new createNewTask(task);
        newTask.create()
    }))
}

const createTask = (data) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    })
    .then(response =>  response.json())
    .then(data => {
        const newTask = new createNewTask(data);
        newTask.create();
    })
}

const getById = (id) => {
   fetch(URL + '/' + id)
   .then(response => response.json())
   .catch(err => console.log(err)) 
} 

const deleteTask = (id) => {
    fetch(URL + '/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .catch(err => console.log(err)) 
}


const updateTask = (id, data) => {
    console.log(JSON.stringify(data))
     fetch(URL + '/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
     })
     .then(response => response.json())
     .catch(err => console.log(err)) 
}

export {getAll, createTask, getById, updateTask, deleteTask};