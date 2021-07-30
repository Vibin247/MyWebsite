import scroll from "./../../js/Navigation";
import { Storage } from "aws-amplify";
import ReactDOM from 'react-dom';
import Loader from "../Common/Loader";

export default function NavBar(props){

    const downloadBlob = (res) => {
        const resumeElement = document.createElement("a");
        const downloadURL = URL.createObjectURL(res.Body);
        resumeElement.href = downloadURL;
        resumeElement.download = "Vibin_Chakravarthy_D";
        document.body.appendChild(resumeElement);
        resumeElement.click();
        setTimeout(() => {
            URL.revokeObjectURL(downloadURL);
        }, 150);
        document.body.removeChild(resumeElement);
    }

    const handleNavClick = (event) => {
        const pageid = event.target.id.substr(0, event.target.id.indexOf("-"));
        if(pageid === "resume"){
            ReactDOM.render(
                <Loader/>,
                document.getElementById(event.target.id)
            );
            event.target.style.pointerEvents = "none";
            Storage.get("Vibin_Chakravarthy_D.pdf", { download: true }).then(
              (res) =>{
                downloadBlob(res);
                ReactDOM.unmountComponentAtNode(document.getElementById(event.target.id));
                event.target.innerHTML = "Resume";
                event.target.style.pointerEvents = "initial";
              }
            )
        }
        else{
            scroll.scrollToPage(pageid);
        }
    }

    return (
        <nav className="nav-bar">
            {props.tabs.map((tab)=>(
                <span id={tab.name + "-link"} key={tab.name} className="nav-bar-link" onClick={handleNavClick}>{tab.display}</span>
            ))}
        </nav>
    );
}