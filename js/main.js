class ToDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.span = document.querySelector('span.add');
        this.taskNumber = document.querySelector('span.taskNumber');
        this.ul = document.querySelector('ul');
        this.span.addEventListener('click', this.startApp.bind(this));
        this.tasks = [];
    }
    render(arr) {
        const newLi = document.createElement('li');
        this.tasks.forEach((task, index) => {
            newLi.innerHTML = `${task} <span class='close'>x</span>`;
            newLi.dataset.key = index;
        });
        this.ul.append(newLi);

    }
    add(value) {
        this.tasks.push(value);
        return this.tasks;
    }
    remove() {
        console.log(this);
    }
    startApp() {
        if (this.input.value === "") return alert("Write task!");
        this.tasks = this.add(this.input.value);
        this.render();
    }
}

const app = new ToDoList;