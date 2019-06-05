class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.ul = document.querySelector('ul');
        this.addTasker = new AddingTasker;
        document.querySelector('span').addEventListener('click', this.startApp.bind(this));
    }
    render() {
        const newLi = document.createElement('li');
        this.addTasker.tasks.forEach((task) => {
            newLi.innerHTML = `${task} <span class='close'>x</span>`;
        })
        this.ul.append(newLi);
        this.input.value = "";
    }
    startApp() {
        console.log(this.addTasker.tasks);
        const task = this.input.value;
        this.addTasker.addTask(this.input.value);
        this.render();
    }
}

const todolist = new toDoList;