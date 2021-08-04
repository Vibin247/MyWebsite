import Header from "./Components/NavBar/Header";
import PageContent from "./Components/Common/PageContent";
import { useEffect, useState } from "react";
import { tabs } from "./Configs/tabs";
import initalize from "./js/PageInit";
import './Styles/Addon.scss';

function App() {

  const [ headerState, setHeaderState] = useState(false);

  const setPageHeader = (position, headerState) =>{
    setHeaderState(headerState);
    document.getElementById("page-header").style.position = position;
  }

  useEffect(() => {
    initalize(tabs);
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
