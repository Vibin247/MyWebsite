import Header from "./Components/NavBar/Header";
import PageContent from "./Components/Common/PageContent";
import { useEffect, useState } from "react";
import { tabs } from "./Configs/tabs";
import appHandler from "./js/PageInit";
import './Styles/Addon.scss';

function App() {

  const [ headerState, setHeaderState] = useState(false);

  const setPageHeader = (position, headerState) =>{
    setHeaderState(headerState);
    document.getElementById("page-header").style.position = position;
  }

  useEffect(() => {
    appHandler.initalize(tabs);
    const togglePageHeader = () => {
      if(window.scrollY >= window.innerHeight-250){
        setPageHeader("fixed", true);
      }
      if(window.scrollY < (window.innerHeight-250)/2){
        setPageHeader("initial", false);
      }
    }
    window.addEventListener("scroll", togglePageHeader)
    return () => {
      window.removeEventListener("scroll", togglePageHeader);
      appHandler.destroy();
    }
  }, [])

  return (
    <div className="App">
      <Header tabs={tabs} headerState={headerState}/>
      <PageContent tabs={tabs}/>
    </div>
  );

}

export default App;
