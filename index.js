
const showProjects = document.querySelector('.show-projects');

showProjects.addEventListener('click', ()=>{
    showProjects.style.display = "none";

    document.querySelectorAll('.projects').forEach(project => {
        project.style.animationName = 'loadIn';
        project.style.animationDelay = '.1s';
        project.style.animationDuration = '1.5s';
        project.style.animationFillMode = 'forwards';
    })
})
