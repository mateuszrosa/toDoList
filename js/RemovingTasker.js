class RemovingTasker {
    static removeTaskFromList() {
        this.parentNode.remove();
        const index = this.parentNode.dataset;
        todolist.addTasker.tasks.splice(index, 1);
        todolist.spanCounter.textContent = todolist.addTasker.countingTask();
    }
}