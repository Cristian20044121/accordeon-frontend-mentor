const titles = document.querySelectorAll('.accordion-title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        title.classList.toggle('accordion-title--open');
        title.classList.toggle('title-active')
        const arrow = title.querySelector(' h3 > img');
        arrow.classList.toggle('rotate');
    });
});
