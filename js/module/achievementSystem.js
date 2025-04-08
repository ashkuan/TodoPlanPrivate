// achievementSystem.js
export function checkAchievements() {
    const state = {};
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        const id = cb.getAttribute('data-id');
        state[id] = cb.checked;
    });

    if (['toeic-1','toeic-2','toeic-3','toeic-4','toeic-5','toeic-6'].every(id => state[id])) {
        showAchievement('恭喜完成多益第一階段！你已經建立了良好的學習基礎！', 'toeic-phase1');
    }

    if (['weight-1','weight-2','weight-3','weight-4','weight-5','weight-6','weight-7','weight-8'].every(id => state[id])) {
        showAchievement('恭喜完成減重第一階段！你已經開始建立健康的生活習慣！', 'weight-phase1');
    }
}

function showAchievement(msg, key) {
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, 'true');

    const banner = document.getElementById('achievement-banner');
    const message = document.getElementById('achievement-message');
    if (!banner || !message) return;

    message.textContent = msg;
    banner.classList.remove('hidden');

    try {
        const audio = new Audio('https://cdn.jsdelivr.net/gh/freeCodeCamp/cdn@master/build/testable-projects-fcc/audio/beep.mp3');
        audio.play();
    } catch (e) {}

    setTimeout(() => banner.classList.add('hidden'), 5000);
}
