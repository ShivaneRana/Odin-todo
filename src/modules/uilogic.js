import { expandButtonResult, dialogDriver} from "./DOM.js";

// to change expand button text
export const expandTextChange = (function(){
    const buttonTextChange = function(expand,side,main){
        if(expand.textContent === "Expand"){
            expand.textContent = "Minimize";

            // this is to access the element
            expandButtonResult.sideBarRemoved(side,main);
            console.log("sidebar now hidded");
        }else if(expand.textContent === "Minimize"){
            expand.textContent = "Expand";
            expandButtonResult.sideBarAdded(side,main);
            console.log("sidebar now visible");
        }
    }
    return {buttonTextChange};
})();


