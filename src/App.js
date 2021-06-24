import Header from "./NavBar/Header";
import PageContent from "./Common/PageContent";
import { useEffect, useState } from "react";
import { tabs } from "./configurations/tabs";
import scroll from "./js/scroll";
import './Styles/Addon.scss';

function App() {

  const [ headerState, setHeaderState] = useState(false);

  const setPageHeader = (position, headerState) =>{
    setHeaderState(headerState);
    document.getElementById("page-header").style.position = position;
  }

  const setSectionsHeight = () => {
    const sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
      sections[index].style.minHeight = window.innerHeight + "px";
    }
  }
  useEffect(() => {
    setSectionsHeight();
    const togglePageHeader = () => {
      if(window.scrollY >= window.innerHeight-250){
        setPageHeader("fixed", true);
      }
      if(window.scrollY < (window.innerHeight-250)/2){
        setPageHeader("initial", false);
      }
    }
    window.addEventListener("scroll", ()=>{
      togglePageHeader();
      scroll.pageNavigator(tabs, headerState);
    })
  }, [])

  return (
    <div className="App">
      <Header tabs={tabs} headerState={headerState}/>
      <PageContent tabs={tabs}/>
    </div>
  );

}

export default App;
