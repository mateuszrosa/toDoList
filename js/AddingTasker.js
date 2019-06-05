class AddingTasker {
    constructor() {
        this.tasks = [];
        this.num = 0;
    }
    countingTask() {
        return this.tasks.length;
    }
    addTask(text) {
        if (text !== "" || text === null) {
            this.tasks.push(text);
        } else {
            alert('Write task text into input!');
        }
    }
    addTaskToList() {}
}