import { deleteTask, updateTask } from "./api";

export class createNewTask {
    constructor(task) {
            this.title = task.title;
            this.description = task.description;
            this.id = task.id;
            this.done = task.done;

            this.template = document.querySelector('template');
            this.clone = this.template.content.cloneNode(true);
            this.taskContainer = this.clone.querySelector('.task__container');
            this.descriptionInput;

    }

    create() {

        const container = document.querySelector('.tasks__container'); 
    
      /*  const taskTitle = clone.querySelector('.task__title');
       taskTitle.value = this.title; */

       this.createTextField('title');

       this.descriptionInput = this.createTextField('description');

       this.createCheckbox();


      /*  const taskDescription = this.clone.querySelector('.task__description'); */
     this.addListenersTaskContainer()

      /*  if (this.description === '') {
            taskDescription.classList.add('editDescription');
       } else {

       taskDescription.textContent = this.description;
       } */


/* 
       taskTitle.addEventListener('keyup', (e) => {
        this.title= e.target.value;
        taskTitle.value = this.title;
        updateTask(this.id, {title: e.target.value})
       }
       )

       taskDescription.value = this.description;

       taskDescription.addEventListener('keyup', (e) => {
        this.description = e.target.value;
        taskDescription.value = this.description;
        updateTask(this.id, {description: e.target.value})
        }) */

      

       container.append(this.taskContainer);
    
    }

    createTextField(type) {
        const inputField = this.clone.querySelector(`.task__${type}`);
        inputField.value = this[type];

        inputField.addEventListener('keyup', (e) => {
            this[type] = e.target.value;
            inputField.value = this[type];
            updateTask(this.id, {type: e.target.value})
           }
        )

        inputField.addEventListener('click', (e) => {
            if (e.target.value === 'edit description') {
                e.target.value = '';
            }
        })

        return inputField;
    }

    addListenersTaskContainer() {
                this.taskContainer.addEventListener('mouseover', () => {
                    if (this.description === '') {
                        this.descriptionInput.value = 'edit description'
                    }
                })

                this.taskContainer.addEventListener('mouseout', () => {
                    if (this.description === '') {
                        this.descriptionInput.value = ''
                    }

                })

            this.taskContainer.addEventListener('click', (e) => {
                    this.delete(e);

            })
    }

    delete(event) {
        if (event.target.tagName === 'IMG') {
            this.taskContainer.remove();
            deleteTask(this.id);
        }
    }

    createCheckbox() {
        const checkbox = this.clone.querySelector('.checkbox1');       
        checkbox.checked = this.done ? 'checked': null;

        checkbox.addEventListener('click', () =>  {
            this.done = !this.done;
            updateTask(this.id, {done : this.done});
        })
    }

}