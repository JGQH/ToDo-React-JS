const KEY = "tasks";

export function getTasks() {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
}

export function saveTasks(tasks) {
    localStorage.setItem(KEY, JSON.stringify(tasks));
}