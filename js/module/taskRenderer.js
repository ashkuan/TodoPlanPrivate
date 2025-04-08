// taskRenderer.js
import { getQuote } from './motivationQuote.js';

export function showTodayTasks(startDateStr) {
    const today = new Date();
    const startDate = new Date(startDateStr);
    const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const container = document.getElementById('today-tasks');

    if (!container) return;

    container.innerHTML = `<h3 class="font-semibold text-gray-700 mb-3">
        ${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日 (第 ${diff} 天)
    </h3>`;

    ['toeic', 'weight'].forEach(category => {
        const section = document.createElement('div');
        section.className = 'mb-4';
        section.innerHTML = `<h4 class="text-${category === 'toeic' ? 'indigo' : 'green'}-700 font-medium mb-2">
            今日${category === 'toeic' ? '多益' : '減重'}任務</h4>`;

        const tasks = Array.from(document.querySelectorAll(`.task-item[data-category='${category}']`));

        let found = false;
        tasks.forEach(task => {
            const [start, end] = task.getAttribute('data-day').split('-').map(Number);
            if (diff >= start && diff <= end) {
                const clone = task.cloneNode(true);
                clone.classList.add('today');

                const originalCb = task.querySelector('input');
                const newCb = clone.querySelector('input');
                newCb.checked = originalCb.checked;
                newCb.addEventListener('change', () => {
                    originalCb.checked = newCb.checked;
                    originalCb.dispatchEvent(new Event('change'));
                });

                section.appendChild(clone);
                found = true;
            }
        });

        if (!found) {
            section.innerHTML += `<p class="text-gray-500 text-sm">今天沒有${category === 'toeic' ? '多益' : '減重'}任務</p>`;
        }

        container.appendChild(section);
    });

    container.innerHTML += `
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
            <i class="fas fa-quote-left text-gray-400 mr-2"></i>
            <span class="text-gray-700 italic">${getQuote()}</span>
            <i class="fas fa-quote-right text-gray-400 ml-2"></i>
        </div>`;
}
