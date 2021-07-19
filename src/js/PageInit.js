import scroll from "./Navigation";

const setSectionsHeight = () => {
    const sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
        sections[index].style.minHeight = window.innerHeight + "px";
    }
}

const addEventListeners = (tabs) => {
    window.addEventListener("resize", setSectionsHeight);
    window.addEventListener("scroll", ()=>{
      scroll.pageNavigator(tabs);
    })

}
const initalize = (tabs) => {
    setSectionsHeight();
    scroll.pageNavigator(tabs);
    addEventListeners(tabs);
}

export default initalize;