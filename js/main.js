class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.ul = document.querySelector('ul');
        this.addTasker = new AddingTasker;
        this.num = 0;
        document.querySelector('span').addEventListener('click', this.startApp.bind(this));
    }
    render() {
        const newLi = document.createElement('li');
        this.addTasker.tasks.forEach((task) => {
            newLi.textContent = task;
        })
        this.ul.append(newLi);
        this.num++;
    }
    startApp() {
        console.log(this.addTasker.tasks);
        const task = this.input.value;
        this.addTasker.addTask(this.input.value);
        this.render();
    }
}

const todolist = new toDoList;