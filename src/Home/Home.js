import MyFace from "./../MyFace.jpeg";
import HomeInfo from "./HomeInfo";

export default function Home(){
    return (
        <div className="HomePage">
            <HomeInfo src={MyFace}/>
            {/* <div className="ScrollDownWrapper">
                <div className="ScrollDownRow">
                    <div className="ScrollButton"></div>
                </div>
            </div> */}
        </div>
    );
}