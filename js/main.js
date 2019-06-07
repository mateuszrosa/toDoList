class ToDoList {
    constructor() {
        this.input = document.querySelector('input');
        this.span = document.querySelector('span.add');
        this.taskNumber = document.querySelector('span.taskNumber');
        this.ul = document.querySelector('ul');
        this.span.addEventListener('click', this.startApp.bind(this));
        this.tasks = document.getElementsByClassName('task');
        this.taskNumber.textContent = this.tasks.length;
    }
    render() {
        this.ul.append(this.add(this.input.value));
        this.taskNumber.textContent = this.tasks.length;
    }
    add(value) {
        const newLi = document.createElement('li');
        newLi.classList.add('task');
        newLi.innerHTML = `${value} <span class='close'>x</span>`;
        newLi.querySelector('span.close').addEventListener('click', this.remove.bind(this));
        newLi.addEventListener('click', this.done);
        return newLi;
    }
    remove(e) {
        e.target.parentNode.remove();
        this.taskNumber.textContent = this.tasks.length;
    }
    done(e) {
        e.target.classList.toggle('checked');
    }
    startApp() {
        if (this.input.value === "") return alert("Write task!");
        this.add(this.input.value);
        this.render();
        this.input.value = "";
    }
}

const app = new ToDoList;