export default function DetailsTable(props){
    return (
        <div className="details-table">
            {props.details.map((details) => (
                <div key={details.name} className="details-row">
                    <div className="detail-name">{details.name}</div>
                    {
                        (!details.URL && (<div className="detail">{details.value}</div>))
                    }
                    {
                        details.URL && (<div className="detail"><a href={details.URL} rel="noreferrer" target="_blank">{details.value}</a></div>)
                    }
                </div>
            ))}
        </div>
    );

}