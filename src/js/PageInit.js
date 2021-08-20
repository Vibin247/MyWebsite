import navigator from "./Navigation";

const setSectionsHeight = () => {
    const sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
        sections[index].style.minHeight = window.innerHeight + "px";
    }
}

const callPageNavigator = (tabs) => {
    return () => { navigator.pageNavigator(tabs) };
}

const addEventListeners = (tabs) => {
    window.addEventListener("resize", setSectionsHeight);
    window.addEventListener("scroll", callPageNavigator(tabs));
}

const removeEventListeners = (tabs) => {
    window.removeEventListener("resize", setSectionsHeight);
    window.removeEventListener("scroll", callPageNavigator(tabs));
}

const destroy = () =>{
    removeEventListeners();
}

const initalize = (tabs) => {
    setSectionsHeight();
    navigator.pageNavigator(tabs);
    addEventListeners(tabs);
}

const appHandler = { initalize, destroy };

export default appHandler;