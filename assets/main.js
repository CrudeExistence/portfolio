// main.js


const navLi = document.querySelectorAll('nav div ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop - 5;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        //document.querySelector('nav div ul li a[href*= ' + current + ']').classList.add('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});


