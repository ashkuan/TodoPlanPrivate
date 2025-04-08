// countdown.js
export function updateCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    const now = new Date();
    const diffTime = targetDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (!countdownElement) return;

    if (diffDays > 0) {
        countdownElement.textContent = `距離考試和目標日還有 ${diffDays} 天`;
    } else if (diffDays === 0) {
        countdownElement.textContent = `今天是考試日！加油！`;
    } else {
        countdownElement.textContent = `考試已結束 ${Math.abs(diffDays)} 天`;
    }
}