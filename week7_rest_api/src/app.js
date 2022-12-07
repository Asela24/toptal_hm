
import {createTask, getAll, getById, update} from "./api"


console.log('1')

getAll();

const startTaskTracker = () => {

}

const input = document.querySelectorAll('input');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
     e.preventDefault();
   const formData = new FormData(e.target);
   const newObject = Object.fromEntries(formData);
   newObject.done = false;
   createTask(newObject)
})

getById(3)

