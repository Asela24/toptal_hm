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
        const container = document.querySelector('.tasks__container')
        
        this.createTextField('title')
        this.descriptionInput = this.createTextField('description')
        this.createCheckbox()
        this.addListenersTaskContainer()
        container.append(this.taskContainer) 
    }

    createTextField(typeOfInput) {
        const inputField = this.clone.querySelector(`.task__${typeOfInput}`)
        inputField.value = this[typeOfInput]

        inputField.addEventListener('keyup', (e) => {
            this[typeOfInput] = e.target.value;
            inputField.value = this[typeOfInput];
            updateTask(this.id,  {[typeOfInput]: e.target.value})
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
        this.createListenersForMouse('mouseover', 'edit description');
        this.createListenersForMouse('mouseout', '');

        this.taskContainer.addEventListener('click', (e) => {
                this.delete(e);
        })
    }

    createListenersForMouse(eventType, value) {
        this.taskContainer.addEventListener(eventType, () => {
            if (this.description === '') {
                this.descriptionInput.value = value;
            }
        })
    }

    delete(event) {
        if (event.target.tagName === 'IMG') {
            this.taskContainer.remove();
            deleteTask(this.id);
        }
    }

    createCheckbox() {
        const checkbox = this.clone.querySelector('.checkbox');       
        checkbox.checked = this.done ? 'checked': null;

        checkbox.addEventListener('click', () =>  {
            this.done = !this.done;
            updateTask(this.id, {done : this.done});
        })
    }
}