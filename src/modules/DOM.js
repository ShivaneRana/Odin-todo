import { projectsList } from "./project";

// for hiding and revealing sidebar
export const expandButtonResult = (function(){

    // side and main are two main element
    const sideBarRemoved = function(side,main){
        side.classList.remove("sideBar");
        side.classList.add("hide");
        main.style.width = "95%";
    } 

    // side and main are two main element
    const sideBarAdded = function(side,main){
        side.classList.remove("hide");
        side.classList.add("sideBar");
        main.style.width = "80%";
    }

    return {sideBarRemoved,sideBarAdded};
})();

// for changing theme
export const themeChange = function(){
    console.log("theme was changed");
    document.documentElement.classList.toggle("dark");
};


export const displayList = (function(){
    const display = function(container){

        if(projectsList.length === 0){
            console.log("Nothing to display the list is empty");
        }else{
            container.textContent = "";
            projectsList.forEach((item,index) => {
               const button = document.createElement("button");
               const xbutton = document.createElement("button");
               xbutton.textContent = "X";
               button.textContent = `${index+1}. ${item}`;
               button.append(xbutton);
               container.append(button);
            })
        }
    }

    return {display};
})();