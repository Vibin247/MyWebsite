export default function DetailsTable(props){
    return (
        <div className="details-table">
            {props.details.map((details) => (
                <div className="details-row">
                    <div className="detail-name">{details.name}</div>
                    {
                        (!details.URL && (<div className="detail">{details.value}</div>))
                        ||details.URL && (<div className="detail"><a href={details.URL} target="_blank">{details.value}</a></div>)
                    }
                </div>
            ))}
        </div>
    );

}