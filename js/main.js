class ToDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.span = document.querySelector('span.add');
        this.taskNumber = document.querySelector('span.taskNumber');
        this.ul = document.querySelector('ul');
        this.span.addEventListener('click', this.startApp.bind(this));
        this.tasks = [];
        this.taskNumber.textContent = this.tasks.length;
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
        newLi.addEventListener('click', e => {
            this.done(e);
        });
        this.ul.append(newLi);
        this.taskNumber.textContent = this.tasks.length;
    }
    add(value) {
        this.tasks.push(value);
        return this.tasks;
    }
    remove(e) {
        const index = e.target.parentNode.dataset.key;
        this.tasks.splice(index, 1);
        e.target.parentNode.remove();
        this.taskNumber.textContent = this.tasks.length;
    }
    done(e) {
        e.target.classList.add('checked');
    }
    startApp() {
        if (this.input.value === "") return alert("Write task!");
        this.tasks = this.add(this.input.value);
        this.render();
        this.input.value = "";
    }
}

const app = new ToDoList;