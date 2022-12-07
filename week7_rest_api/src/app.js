
import {createTask, getAll} from "./api"


getAll();

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newObject = Object.fromEntries(formData);
  newObject.done = false;
  createTask(newObject)
})



