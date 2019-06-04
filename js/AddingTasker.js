class AddingTasker {
    constructor() {
        this.tasks = [];
    }
    addTask(text) {
        if (text !== "" || text === null) {
            this.tasks.push(text);
        } else {
            alert('Write task text into input!');
        }
    }
    addTaskToList(text, ul) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<li><button></button>${text}<button>Remove</button></li>`;
        ul.append(newLi);
    }
}

const addTasker = new AddingTasker;