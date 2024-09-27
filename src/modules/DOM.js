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
            rerender(container);
            }
        }

    // display items in projectList array
    const rerender = function(container){
        container.textContent = "";
        console.log(projectsList);
        projectsList.forEach((item,index) => {
           const button = document.createElement("button");
           button.textContent = `${item}`;
           addCloseButton(button,container);
           container.append(button);
    });
    }

    const addCloseButton = function(button,container){
        const xbutton = document.createElement("button");
        xbutton.textContent = "X";
        button.append(xbutton);

        xbutton.addEventListener("click",() => {
            projectsList.splice(projectsList.findIndex(item => item === button.textContent.slice(0,-1)),1);
            rerender(container);
            console.log("close button was clicked");
        })
    }

    return {display};
})();