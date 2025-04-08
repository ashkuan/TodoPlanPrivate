// progressUpdater.js
export function updateProgress() {
    const toeic = document.querySelectorAll('.task-checkbox[data-id^="toeic-"]');
    const toeicChecked = Array.from(toeic).filter(cb => cb.checked).length;
    const toeicPercent = (toeicChecked / toeic.length) * 100;
    document.getElementById('toeic-progress-bar').style.width = `${toeicPercent}%`;
    document.getElementById('toeic-progress-text').textContent = `${toeicPercent.toFixed(1)}%`;
}