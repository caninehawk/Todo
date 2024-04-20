import {Project} from './projects.js'
import {addRightSide} from './addRightSide.js'
export const createProject = (()=>{
    let lists = [];
    let projects = document.querySelector(".projects");
    let newProject = document.querySelector('.createProject');
    newProject.addEventListener('click',()=>{
        const title = prompt("Enter Project Title...");
        let pro = new Project(title);
        let projectElement = document.createElement('div');
        projectElement.classList.add("project-div");
        projectElement.innerText = title;
        // projectElement.addEventListener('click',pro.renderTodo(pro.getID()));
        projects.appendChild(projectElement);
        addRightSide();
        lists.push(pro);
        localStorage.setItem(pro.getID(),JSON.stringify(pro));
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            console.log(`${key}: ${value.title}`);
        }

    })
    
})