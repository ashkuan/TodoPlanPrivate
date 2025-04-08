// collapsible.js
export function setupCollapsibles() {
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const container = header.closest('.phase-container');
            container.classList.toggle('expanded');
            const icon = header.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Default open
    ['toeic-phase1', 'weight-phase1'].forEach(phase => {
        const section = document.querySelector(`[data-phase='${phase}']`);
        if (section) {
            section.classList.add('expanded');
            const icon = section.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        }
    });
}