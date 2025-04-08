// taskStorage.js
export function initializeTaskState() {
    const stored = localStorage.getItem('taskState');
    if (!stored) return;

    const taskState = JSON.parse(stored);
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        const id = cb.getAttribute('data-id');
        if (taskState[id]) cb.checked = true;
    });
}

export function setupTaskListeners() {
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        cb.addEventListener('change', saveTaskState);
    });
}

function saveTaskState() {
    const state = {};
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        const id = cb.getAttribute('data-id');
        state[id] = cb.checked;
    });
    localStorage.setItem('taskState', JSON.stringify(state));
}