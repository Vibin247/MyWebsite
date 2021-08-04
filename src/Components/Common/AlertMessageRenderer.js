export default function AlertMessageRenderer(props){
    return (
        <div className="alert-message" id={props.id}>
            {props.message}
        </div>
    );
}