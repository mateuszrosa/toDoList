class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.ul = document.querySelector('ul');
        this.addTasker = new AddingTasker;
        this.spanCounter = document.querySelector('span.taskNumber')
        this.spanCounter.textContent = this.addTasker.countingTask();
        document.querySelector('span').addEventListener('click', this.startApp.bind(this));
    }
    render() {
        const newLi = document.createElement('li');
        this.addTasker.tasks.forEach((task, index) => {
            newLi.innerHTML = `${task} <span class='close'>x</span>`;
            newLi.dataset.key = index;
            newLi.classList.add('task');
        })
        this.ul.append(newLi);
        newLi.querySelector('span.close').addEventListener('click', RemovingTasker.removeTaskFromList);
        this.spanCounter.textContent = this.addTasker.countingTask();
        this.input.value = "";
    }
    startApp() {
        const task = this.input.value;
        if (task === "") return alert("Write task!");
        this.addTasker.addTask(this.input.value);
        this.render();
    }
}

const todolist = new toDoList;