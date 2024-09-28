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


// responsible for creating,clearing, displaying of dialog box
export const dialogDriver = (function(){

    const notesWrapper = function(){
        const div = document.createElement("div");
        return div;
    }

    const todoWrapper = function(){
        const div = document.createElement("div");
        return div;
    }

    const createUpperWrapper = function(){
        const div = document.createElement("div");
        const select = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const close = document.createElement("button");
        close.textContent = "X";
        option1.textContent = "Notes";
        option2.textContent = "Todo"
        select.append(option1,option2);
        div.append(select)
        div.append(close)
        return div;
    }

    const createDialogBox = function(dialog){
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper")
        wrapper.append(createUpperWrapper());
        wrapper.append(createLowerWrapper());

        dialog.append(wrapper);
        dialog.classList.add("dialogBox");
        document.body.append(dialog);

        dialog.addEventListener("click",function(e){
            if(!wrapper.contains(e.target)){
                dialog.close();
            }
        })
    }
   
    const clearDialogBox = function(dialog){
        dialog.textContent = "";
    }

    const displayDialogBox = function(dialog){
        dialog.showModal();
    }

    return {createDialogBox, clearDialogBox, displayDialogBox}
})();

