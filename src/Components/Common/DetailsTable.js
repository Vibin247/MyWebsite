export default function DetailsTable(props){
    return (
        <div className="content">
            {props.details.map((details) => (
                <div key={details.name} className="details-row disable-text-select">
                    <div className="detail-name">{details.name}</div>
                    {
                        details.component && (<details.component data={details.props}/>)
                    }
                    {
                        details.URL && (<div className="detail"><a href={details.URL} rel="noreferrer" target="_blank">{details.value}</a></div>)
                    }
                    {
                        !details.URL && !details.component && <div className="detail">{details.value}</div>
                    }
                </div>
            ))}
        </div>
    );

}