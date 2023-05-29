const folder = document.querySelector('.folder');
const exit_folder = document.querySelector('.close-folder');
const content = document.querySelector('.content');
const folder_back = document.querySelector('.folder__back');
const folder_front = document.querySelector('.folder__front');
const texts = document.querySelectorAll('.unselectable');
const light_source = document.querySelector('.light-source');


folder.addEventListener('click', () => {

    folder.style.animationIterationCount = '1';

    if (folder.style.animationIterationCount === '1') {
        folder.style.scale = '3.5';
        folder_back.style.bottom = '3rem';
        folder_front.style.bottom = '4.35rem';
        light_source.style.background = 'transparent';
        texts.forEach(text => {
            text.style.animation = 'hide-text 1s forwards'
        })

        folder_front.style.animation = 'folder__front-open 1s forwards';
        content.style.animation = 'fade-in 1s .7s forwards';

    }

})

exit_folder.addEventListener('click', () => {
    window.location.reload()
})

const projects = document.querySelectorAll('.projects');
const portfolio_buttons = document.querySelectorAll('.project-button');

projects.forEach((project, i) => {

    project.addEventListener('mouseenter', () => {
        portfolio_buttons.item(i).style.background = 'red';
    })
    project.addEventListener('mouseleave', () => {
        portfolio_buttons.item(i).style.background = 'blue';
    })
    project.addEventListener('click', () => {
        console.log(window.location.pathname)
        switch (true) {
            case i === 0:
                window.location = 'https://korgeron.github.io/KonamiCodeGame/';
                break;
            case i === 1:
                window.location = 'https://korgeron.github.io/MovieProject/';
                break;
            case i === 2:
                window.location = 'https://korgeron.github.io/BarberShopLandingPage/';
                break;
        }
    })

})

