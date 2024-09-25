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
    document.documentElement.classList.toggle("dark");
};

