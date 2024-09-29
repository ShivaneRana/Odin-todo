import { projectsList } from "./project"; //this is where all the projects are stored;
import { notesList } from "./notes.js";

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


// for displaying the project list
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
        projectsList.forEach((item) => {
            // no styling applied to button cuz already done in style.css   
           const button = document.createElement("button");
           button.textContent = `${item}`;
           addCloseButton(button,container);
           container.append(button);
    });
    }

    // create close button for every new project
    // button parameter added to find which project to remove
    // remove from container which is the div containing all projects Name
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


export const displayNotes = (function(){

    // constainer being the div that hold all the notes or todos in this case
    const renderList = function(container){
        container.classList.remove("todoContainer");
        container.classList.add("notesContainer");
        notesList.forEach((item,index) => {
                
            const div = document.createElement("div");
            const button = document.createElement("button");
            const heading = document.createElement("h1");
            const paragraph = document.createElement("p");
            heading.textContent = item.title;
            paragraph.textContent = item.description;
            button.textContent = "Delete";
            div.append(heading,paragraph,button);
            container.append(div);

            // to delete element from note list and render the notes again
            button.addEventListener("click",() => {
                deleteItemFromList(index);
                container.textContent = "";
                renderList(container);
            })
        })
    }

    const deleteItemFromList = function(index){
        notesList.splice(index,1);
        console.log("An element from the noteList has been removed");
        console.log(notesList)
    }

    return {renderList}
})();