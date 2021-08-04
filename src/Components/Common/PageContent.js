export default function PageContent(props){
  const tabs=props.tabs;
  return (
    <div className="page-content">
      {tabs.map((tab) => (
        (
          tab.name !== "resume" &&
          <div id={tab.name} key={tab.name} className="section-wrapper">
            <tab.component tabs={tabs}/>
          </div>
        )
      ))}
    </div>    
  );
}