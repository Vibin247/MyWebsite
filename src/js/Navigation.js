function pageNavigator(tabs) {
    const checkPosition = window.scrollY + 175;
    for (let index = 0; index < tabs.length-1; index++) {
        const currentTab = document.getElementById(tabs[index].name);
        const nextTab = tabs[index+1] && tabs[index+1].name !== "resume" ? document.getElementById(tabs[index+1].name) : { offsetTop : document.getElementsByTagName("body")[0].offsetHeight};
        const top = currentTab.offsetTop;
        const bottom = nextTab.offsetTop + (2*window.innerHeight/3);
        if(checkPosition > top && checkPosition < bottom){
            highlightTabName(tabs[index].name);
        }
    }
}

function highlightTabName(name) {
    const linkName = name + "-link";
    if(document.getElementsByClassName("activeTab")[0]){
        document.getElementsByClassName("activeTab")[0].classList.remove("activeTab");
    }
    if(document.getElementById(linkName)){
        document.getElementById(linkName).classList.add("activeTab"); 
    }
}

function scrollToPage(pageid) {
    const scrollHeight = document.getElementById(pageid).offsetTop;
    window.scroll({
        top: scrollHeight - 50,
        behavior: 'smooth'
    });
    setTimeout(() => {
        highlightTabName(pageid);
    }, 500);    
}


function scrollToTop(params) {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });    
}
const navigator = {
    pageNavigator,
    highlightTabName,
    scrollToPage,
    scrollToTop
}

export default navigator;