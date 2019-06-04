class RemovingTasker {
    removeTaskFromList() {
        this.parentNode.remove();
    }
}

const removeTasker = new RemovingTasker;