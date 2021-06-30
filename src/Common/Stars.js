export default function Stars(props) {
    const count = props.stars ? props.stars : props.data.stars;
    const stars = [];
    const genStars = () => {
        let index = 0
        for (index = 0; index < count; index++) {
            stars.push(<div key={index} className="star"></div>);
        }
        for(index; index < 5; index++){
            stars.push(<div key={index} className="star star-unrated"></div>);
        }
        return stars;
    }

    return (
        <div className={props.className}>
            {genStars()}
        </div>
    );
}