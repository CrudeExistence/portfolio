// main.js


const navLi = document.querySelectorAll('nav div ul li a');
const sections = document.querySelectorAll('#wrapper #main section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        // Adjustment to offset the navigation bar at the top of the screen.
        let sectionTop = section.offsetTop - 5;
        let sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        // First make sure that all list items have the active class removed
        li.classList.remove('active');
        // Then add the active class to the current section
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});


