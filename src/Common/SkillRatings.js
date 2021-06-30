export default function SkillRatings(props) {

    const data = props.data;

    function importAll(r) {
        let images = {};
        r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../../public/images/Logos', false, /\.(png|jpe?g|svg)$/));    
    
    return (
        <div className="skill-ratings display-inline-block text-align-center">
            <img src={images[data.props.imagename].default} height="100px" alt={data.name}/>
            <div className="skill-name">{data.name}</div>
        </div>
    );
}