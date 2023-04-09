"use strict";
document.querySelectorAll('.projects').forEach(project => {
    project.style.animationName = 'loadIn';
    project.style.animationDelay = '1s';
    project.style.animationDuration = '1.5s';
    project.style.animationFillMode = 'forwards';
})

document.querySelector('.greeting-title').addEventListener('mouseleave' , ()=>{
document.querySelector('.span').style.color = "blue";
})
document.querySelector('.greeting-title').addEventListener('mouseenter', ()=>{
document.querySelector('.span').style.color = "red";
})
