export default function PageContent(props){
  const tabs=props.tabs;
  return (
    <div id="page-content" className="page-content">
      {tabs.map((tab) => (
        <div id={tab.name} key={tab.name}>
          <tab.component/>
        </div>
      ))}
    </div>    
  );
}