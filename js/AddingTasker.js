class AddingTasker {
    constructor() {
        this.tasks = [];
        this.num = 0;
    }
    countingTask() {
        return this.tasks.length;
    }
    addTask(text) {
        this.tasks.push(text);
    }
}