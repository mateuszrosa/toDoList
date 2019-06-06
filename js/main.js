class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.span = document.querySelector('span.add');
        this.taskNumber = document.querySelector('span.taskNumber');
        this.span.addEventListener('click', this.startApp.bind(this));
        this.tasks = [];
    }
    add(value) {
        this.tasks.push(value);
        return this.tasks;
    }
    startApp() {
        if (this.input.value === "") return alert("Wtire task!");
        this.add(this.input.value);
    }
}

const todolist = new toDoList;