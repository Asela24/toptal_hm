import {createNewTask} from './TasksManager';

const URL ='http://localhost:3001/tasks';


const getAll = () => {
    fetch(URL).then(response =>  response.json())
    .then(data => data.forEach(task => {
        
        const newTask = new createNewTask(task);

        newTask.create()
    }))
}

/* const data = {
    "title": "Buy milk",
    "description": "I need it, my cat needs it.",
    "done": false
  } */

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
        console.log(data)
        newTask.create()
    })
}

const getById = (id) => {
   fetch(URL + '/' + id)
   .then(response => response.json())
   .then(data => console.log(data))
} 


const deleteTask = (id) => {
    fetch(URL + '/' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch(err => console.log(err)) // Do something with the error
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
     .then(data => console.log(data))
}

export {getAll, createTask, getById, updateTask, deleteTask};