import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./NavBar";
import './Styles/Addon.scss';
import Profile from "./Profile/Profile";

function App() {
  const tabs = [
    {
      name:"home",
      URL:"/home",
      display:"Home"
    },
    {
      name:"profile",
      URL:"/profile",
      display:"Profile"
    },
    {
      name:"professional",
      URL:"/professional",
      display:"Professional"
    },
    {
      name:"personal",
      URL:"/personal",
      display:"Personal"
    }
  ];
  return (
    <div className="App">
    <BrowserRouter>
      <div className="PageHeader">
        <div className="Logo">
          <div className="LogoInitials">VC</div><br/>
          <div className="LogoName">Vibin Chakravarthy</div>
        </div>
        <NavBar tabs={tabs}/>
      </div>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
