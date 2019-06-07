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

        // newLi.querySelector('span.close').addEventListener('click', e => {
        //     this.remove(e);
        // });
        // newLi.addEventListener('click', e => {
        //     this.done(e);
        // });
        this.ul.append(this.add(this.input.value));
        this.taskNumber.textContent = this.tasks.length;
    }
    add(value) {
        const newLi = document.createElement('li');
        newLi.classList.add('task');
        newLi.innerHTML = `${value} <span class='close'>x</span>`;
        newLi.querySelector('span.close').addEventListener('click', this.remove);
        return newLi;
    }
    remove(e) {
        this.parentNode.remove();
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