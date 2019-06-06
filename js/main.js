class ToDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.span = document.querySelector('span.add');
        this.taskNumber = document.querySelector('span.taskNumber');
        this.ul = document.querySelector('ul');
        this.span.addEventListener('click', this.startApp.bind(this));
        this.tasks = [];
    }
    render() {
        const newLi = document.createElement('li');
        this.tasks.forEach((task, index) => {
            newLi.innerHTML = `${task} <span class='close'>x</span>`;
            newLi.dataset.key = index;
        });
        newLi.querySelector('span.close').addEventListener('click', e => {
            this.remove(e);
        });
        this.ul.append(newLi);

    }
    add(value) {
        console.log(this.tasks);
        this.tasks.push(value);
        return this.tasks;
    }
    remove(e) {
        const index = e.target.parentNode.dataset.key;
        console.log(index);
        console.log(this.tasks[index]);
        this.tasks.splice(index, 1);
        console.log(this.tasks);
        e.target.parentNode.remove();
    }
    startApp() {
        if (this.input.value === "") return alert("Write task!");
        this.tasks = this.add(this.input.value);
        this.render();
        this.input.value = "";
    }
}

const app = new ToDoList;