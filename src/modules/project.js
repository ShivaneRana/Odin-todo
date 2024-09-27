// logic for creating new projects
import { displayList } from "./DOM.js";

export const projectsList = [];

const createNewProject = (function(){

    const askProjectName = function(){
        const name = prompt("What is the name of the project");
        if(name !== null && name !== undefined && name !== "" && !(projectsList.includes(name))){
            projectsList.unshift(name);
        }else if(projectsList.includes(name)){
            alert("Project with this name already exist");
        }else{
            alert("no changes were made");
        }
    }

    return {askProjectName};
})();

export {createNewProject}
