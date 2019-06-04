class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.ul = document.querySelector('ul');
        this.addTasker = new AddingTasker;
        document.querySelector('span').addEventListener('click', this.startApp.bind(this));
    }
    render() {}
    startApp() {
        const task = this.input.value;
        this.addTasker.addTaskToList(task, this.ul);
        this.input.value = "";
    }
}

const todolist = new toDoList;