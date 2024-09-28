import "./style.css";
import { expandTextChange} from "./modules/uilogic.js";
import { themeChange, displayList} from "./modules/DOM.js";
import { createNewProject} from "./modules/project.js";


const add = document.querySelector(".add");
const theme = document.querySelector(".theme");
const expand = document.querySelector(".expand");
const sideBar = document.querySelector(".sideBar");
const mainBar = document.querySelector(".mainBar");
const all = document.querySelector(".all");
const today = document.querySelector(".today");
const completed = document.querySelector(".completed");
const notes = document.querySelector(".notes");
const addProjects = document.querySelector(".addProjects");
const projectContainer = document.querySelector(".bottomInner");

theme.addEventListener("click",() => {
    themeChange();
})

expand.addEventListener("click",() => {
    expandTextChange.buttonTextChange(expand,sideBar,mainBar);
})

add.addEventListener("click",() => {
});

all.addEventListener("click",() => {
})

today.addEventListener("click",() => {
})

completed.addEventListener("click",() => {
})

notes.addEventListener("click",() => {

    displayNotes.goThroughNotes();
})

addProjects.addEventListener("click",() => {
    createNewProject.askProjectName(projectContainer);
    displayList.display(projectContainer);
})


// keyboard support Uwu~
document.addEventListener("keydown",function(event){
    const target = event.key;
    if(target === "p"){
        addProjects.click();
    }

    if(target === "e"){
        expand.click();
    }

    if(target === "t"){
        theme.click();
    }
})