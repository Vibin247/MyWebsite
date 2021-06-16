import { BrowserRouter} from "react-router-dom";
import Header from "./Header";
import PageContent from "./PageContent";
import './Styles/Addon.scss';
import Home from "./Home";
import Profile from "./Profile";
import { useEffect, useState } from "react";

function App() {
  const tabs = [
    {
      name:"home",
      URL:"/home",
      display:"Home",
      component: Home
    },
    {
      name:"profile",
      URL:"/profile",
      display:"Profile",
      component: Profile
    }
  ];

  const [ pageState, setPageState] = useState(false);

  const setPageHeader = (position, padding, pageState) =>{
    setPageState(pageState);
    document.getElementById("page-header").style.position = position;
    document.getElementById("page-content").style.paddingTop = padding;
  }

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 180){
        setPageHeader("fixed", "250px", true);
      }
      if(window.scrollY < 180){
        setPageHeader("initial", "0px", false);
      }
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header tabs={tabs} pageState={pageState}/>
        <PageContent tabs={tabs}/>
      </BrowserRouter>
    </div>
  );

}

export default App;
