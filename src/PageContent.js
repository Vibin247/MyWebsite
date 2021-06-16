import { Switch, Route } from "react-router-dom";

export default function PageContent(props){
    const tabs=props.tabs;
    return (
        <div id="page-content" className="page-content">
          <Switch>
              {tabs.map((tab) => (
                <Route key={tab.name} path={tab.URL} component={tab.component}/>
              ))}
          </Switch>
        </div>    
    );
}