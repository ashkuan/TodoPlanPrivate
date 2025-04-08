// weightTracker.js
export function updateWeightProgress(startWeight, targetWeight) {
    const currentWeight = parseFloat(localStorage.getItem('currentWeight')) || startWeight;
    const remaining = (currentWeight - targetWeight).toFixed(1);
    const loss = startWeight - targetWeight;
    const done = startWeight - currentWeight;
    const percent = Math.min(100, (done / loss) * 100);

    document.getElementById('current-weight').value = currentWeight;
    document.getElementById('weight-remaining').textContent = remaining;
    document.getElementById('weight-progress-bar').style.width = `${percent}%`;
    document.getElementById('weight-progress-text').textContent = `${percent.toFixed(1)}%`;
}

export function setupWeightUpdater(startWeight, targetWeight) {
    document.getElementById('update-weight').addEventListener('click', () => {
        const input = document.getElementById('current-weight');
        const newWeight = parseFloat(input.value);

        if (!isNaN(newWeight) && newWeight > 0) {
            localStorage.setItem('currentWeight', newWeight);
            updateWeightProgress(startWeight, targetWeight);
        }
    });
}