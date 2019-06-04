class AddingTasker {
    constructor() {
        this.tasks = [];
        this.num = 0;
    }
    addTask(text) {
        if (text !== "" || text === null) {
            this.tasks.push(text);
        } else {
            alert('Write task text into input!');
        }
    }
    removeTaskFromList() {
        console.log('click');
    }
    addTaskToList(text, ul) {
        // console.log(removeTasker);
        this.num++;
        const newLi = document.createElement('li');
        newLi.innerHTML = `${text} <span class='close'>x</span>`;
        newLi.style.backgroundColor = "#ccc"
        if (this.num % 2 === 0) newLi.style.backgroundColor = "#f9f9f9";
        ul.append(newLi);
        document.querySelectorAll('span.close').forEach(span => {
            span.addEventListener('click', RemovingTasker.removeTaskFromList)
        })
        newLi.addEventListener('click', TickingTasker.tickTask);
    }
}

const addTasker = new AddingTasker;