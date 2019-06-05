class AddingTasker {
    constructor() {
        this.tasks = [];
    }
    countingTask() {
        return this.tasks.length;
    }
    addTask(text) {
        this.tasks.push(text);
    }
}