import "./style.css";
import { expandTextChange } from "./modules/uilogic";
import { themeChange } from "./modules/DOM";

const add = document.querySelector(".add");
const theme = document.querySelector(".theme");
const expand = document.querySelector(".expand");
const sideBar = document.querySelector(".sideBar");
const mainBar = document.querySelector(".mainBar");

theme.addEventListener("click",() => {
    themeChange();
})

expand.addEventListener("click",() => {
    expandTextChange.buttonTextChange(expand,sideBar,mainBar);
})