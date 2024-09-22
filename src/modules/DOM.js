export const expandButtonResult = (function(){

    const sideBarRemoved = function(side,main){
        side.classList.remove("sideBar");
        side.classList.add("hide");
        main.style.width = "95%";
    } 

    const sideBarAdded = function(side,main){
        side.classList.remove("hide");
        side.classList.add("sideBar");
        main.style.width = "80%";
    }

    return {sideBarRemoved,sideBarAdded};
})();

export const themeChange = function(){
    document.documentElement.classList.toggle("dark");
};