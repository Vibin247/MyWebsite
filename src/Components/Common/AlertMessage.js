import AlertMessageRenderer from "./AlertMessageRenderer";

export default function AlertMessage(id, message) {
    const ShowMessage = () => {
        const alertMessages = document.getElementsByClassName("alert-message");
        for (let index = 0; index < alertMessages.length; index++) {
            alertMessages[index].style.display = "none";            
        }

        document.getElementById(id).style.display = "block";
        setTimeout(() => {
            document.getElementById(id).style.display = "none";
        }, 2500);
    };
    return [AlertMessageRenderer, {id,message},ShowMessage];
}
