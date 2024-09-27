import "./style.css";
import { expandTextChange } from "./modules/uilogic";
import { themeChange } from "./modules/DOM";

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
    console.log("theme button was clicked");
    themeChange();
})

expand.addEventListener("click",() => {
    console.log("expand button was clicked");
    expandTextChange.buttonTextChange(expand,sideBar,mainBar);
})

add.addEventListener("click",() => {
    console.log("Add button was clicked");
});

all.addEventListener("click",() => {
    console.log("All button was clicked");
})

today.addEventListener("click",() => {
    console.log("All button was clicked");
})

completed.addEventListener("click",() => {
    console.log("All button was clicked");
})

notes.addEventListener("click",() => {
    console.log("notes button was clicked");
})

addProjects.addEventListener("click",() => {
    console.log("add project button clicked");
})