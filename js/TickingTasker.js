class TickingTasker {
    static tickTask() {
        this.classList.add('checked');
        this.style.textDecoration = "line-through";
        this.style.background = "#ddd";
    }
}