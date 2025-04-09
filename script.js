document.addEventListener('DOMContentLoaded', () => {
    // Verifica em qual página estamos
    const bodyClass = document.body.className;

    if (bodyClass === 'page-index' || bodyClass === 'page-about') {
        // Animação para index.html e about.html
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200);
        });
    } else if (bodyClass === 'page-projects') {
        // Animação para projects.html
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        });
    }
});