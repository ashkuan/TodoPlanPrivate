// main.js
import { updateCountdown } from './modules/countdown.js';
import { initializeTaskState, setupTaskListeners } from './modules/taskStorage.js';
import { updateWeightProgress, setupWeightUpdater } from './modules/weightTracker.js';
import { showTodayTasks } from './modules/taskRenderer.js';
import { setupCollapsibles } from './modules/collapsible.js';
import { updateProgress } from './modules/progressUpdater.js';
import { checkAchievements } from './modules/achievementSystem.js';

const targetDate = new Date('2025-05-25');
const startWeight = 80.4;
const targetWeight = 58;

window.addEventListener('DOMContentLoaded', () => {
    updateCountdown(targetDate);
    setInterval(() => updateCountdown(targetDate), 1000 * 60 * 60);

    initializeTaskState();
    updateWeightProgress(startWeight, targetWeight);
    setupTaskListeners();
    setupWeightUpdater(startWeight, targetWeight);

    showTodayTasks('2025-04-08');
    setupCollapsibles();
    updateProgress();
    checkAchievements();
});
