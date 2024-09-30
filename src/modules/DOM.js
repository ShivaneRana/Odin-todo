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


// to diaplay all the notes
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

// for add button

// create Dialog box
export const dialogBox = (function(){

    const dialog = document.createElement("dialog");
    dialog.classList.add("dialogDefault");
    const wrapper = document.createElement("div");
    const top = document.createElement("div");
    top.classList.add("topWrapper");
    const bottom = document.createElement("div");
    bottom.classList.add("bottomWrapper");


    // this only work to create top part of the dialog box
    const createDialog = function(){
        clearDialog();
        const select = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const close = document.createElement("button");
        close.textContent = "X";
        option1.textContent = "Todo";
        option2.textContent = "Notes";

        // append to top div inside wrapper
        select.append(option1,option2);
        top.append(select,close);
        wrapper.append(top);
        todoDialog();

        // append bottom to wrapper
        wrapper.append(bottom);
        dialog.append(wrapper);
        document.body.append(dialog);
        dialog.showModal();

        select.addEventListener("input",() => {
            if(select.value === "Notes"){
                notesDialog();
            }else{
                todoDialog();
            }
        })

        dialog.addEventListener("click",function(e){
            if(!wrapper.contains(e.target)){
                dialog.close();
                clearDialog();
            }
        })

        close.addEventListener("click",() => {
            dialog.close();
            clearDialog();
        })
    }

    // what to do when you choose notes is select option
    const notesDialog = function(){
        bottom.classList.remove("todoDialog");
        bottom.classList.add("notesDialog");
        bottom.textContent = "";
        const button = document.createElement("button");
        const div = document.createElement("div");
        const div1 = document.createElement("div");
        const title = document.createElement("input");
        const description = document.createElement("textarea");
        const hd3 = document.createElement("h3");
        const ht3 = document.createElement("h3");
        button.textContent = "Confirm";
        ht3.textContent = "Title";

        

        // there are two div inside top wrapper
        // one for each storing heading and select and button;
        // div and div1

        div.append(ht3,title);
        hd3.textContent = "Description";
        div1.append(hd3,description);
        bottom.append(div);
        bottom.append(div1);
        bottom.append(button);


        // confirm button
        button.addEventListener("click",() => {
            const obj = function(title,description){
                if(title === ""){
                    this.title = "No Title";
                    this.description = "No description";
                }else{
                    this.title = title;
                    this.description = description;    
                }
            }

            const uwu = new obj(title.value,description.value);
            notesList.unshift(uwu);
            dialog.close();
            clearDialog();
        })
    }

    // what to do when you select todo in select option
    const todoDialog = function(){

        // remove any existing class add todo Class and clear any unecessary element in the bottom
        bottom.classList.remove("notesDialog")
        bottom.classList.add("todoDialog");
        bottom.textContent = "";
        const mainDiv = document.createElement("div");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const title = document.createElement("input");
        const description = document.createElement("textarea");
        const priority = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const option4 = document.createElement("option");
        const button = document.createElement("button");
        const date = document.createElement("input");

        option1.textContent = "Low";
        option2.textContent = "Medium";
        option3.textContent = "High";
        button.textContent = "Confirm";
        div1.textContent = "Div1";
        div2.textContent = "Div2";
        div3.textContent = "Div3";

        mainDiv.append(div1,div2,div3);
        bottom.append(mainDiv);
        bottom.append(button);
    }

    const clearDialog = function(){
        top.textContent = "";
        bottom.textContent = "";
        wrapper.textContent = "";
        dialog.textContent = "";
    }


    return {createDialog};
})();