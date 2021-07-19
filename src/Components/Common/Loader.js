export default function Loader(props){
    const wrapperWidth = props.width ? props.width : 25;
    const loaderWidth = wrapperWidth - 8;
    const wrapperStyle = {
        width:wrapperWidth + "px",
        height:wrapperWidth + "px",
    };
    const loaderStyle = {
        width:loaderWidth + "px",
        height:loaderWidth + "px",
    };
    return (
        <div className="lds-ring" style={wrapperStyle}>
            <div style={loaderStyle}></div>
            <div style={loaderStyle}></div>
            <div style={loaderStyle}></div>
            <div style={loaderStyle}></div>
        </div>
    );
}