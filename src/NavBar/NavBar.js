import scroll from "./../js/scroll";

export default function NavBar(props){

    const handleNavClick = (event) => {
        const pageid = event.target.id.substr(0, event.target.id.indexOf("-"));
        if(pageid === "resume"){
            const resumeElement = document.createElement("a");
            resumeElement.href = "./files/Vibin_Chakravarthy_D.PDF";
            resumeElement.download = "Vibin_Chakravarthy_D";
            document.body.appendChild(resumeElement);
            resumeElement.click();
            document.body.removeChild(resumeElement);
            event.target.innerHTML = "Downloaded";
            event.target.style.pointerEvents = "none";
            setTimeout(() => {
                event.target.innerHTML = "Resume";
                event.target.style.pointerEvents = "initial";
            }, 1500);
        }
        else{
            scroll.scrollToPage(pageid);
        }
    }


    return (
        <div className="nav-bar">
            {props.tabs.map((tab)=>(
                <span id={tab.name + "-link"} key={tab.name} className="nav-bar-link" onClick={handleNavClick}>{tab.display}</span>
            ))}
        </div>
    );
}