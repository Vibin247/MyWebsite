export default function PageContent(props){
  const tabs=props.tabs;
  return (
    <div id="page-content" className="page-content">
      {tabs.map((tab) => (
        (
          tab.name !== "resume" &&
          <div id={tab.name} key={tab.name}>
            <tab.component tabs={tabs}/>
          </div>
        )
      ))}
    </div>    
  );
}