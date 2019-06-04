class toDoList {
    constructor() {
        this.input = document.querySelector('input');
        document.querySelector('span').addEventListener('click', this.startApp.bind(this));

    }
    render() {}
    startApp() {
        const task = this.input.value;
    }
}

const todolist = new toDoList;