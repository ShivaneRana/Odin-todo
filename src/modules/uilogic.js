import { expandButtonResult } from "./DOM.js";

// to change expand button text
export const expandTextChange = (function(){
    
    const buttonTextChange = function(expand,side,main){
        
        if(expand.textContent === "Expand"){
            expand.textContent = "Minimize";
            expandButtonResult.sideBarRemoved(side,main);
            console.log("Main bar has decreased in size");
        }else if(expand.textContent === "Minimize"){
            expand.textContent = "Expand";
            expandButtonResult.sideBarAdded(side,main);
            console.log("Main bar has increased in size");
        }
    }

    return {buttonTextChange};
})();
