import emailjs from 'emailjs-com';
import { ReactComponent as Phone } from '../SVGs/phone.svg';
import { ReactComponent as LinkedIn } from '../SVGs/linkedin.svg';
import { ReactComponent as Github } from '../SVGs/github.svg';
import { ReactComponent as HackerRank } from '../SVGs/hackerrank.svg';
import scroll from "../js/scroll";

export default function Contact(props) {

    const scrollToPage = () => {
        scroll.scrollToPage(props.tabs[0].name);
    };

    const phoneClick = () => {
        if (window.isMobile){
            const phoneNumberElement = document.createElement("a");
            phoneNumberElement.href = "tel:+919677888433";
            document.body.appendChild(phoneNumberElement);
            phoneNumberElement.click();
            document.body.removeChild(phoneNumberElement);
        }
        else{
            const phoneNumberElement = document.createElement("input");
            phoneNumberElement.readOnly = true;
            phoneNumberElement.value = "+919677888433";
            document.body.appendChild(phoneNumberElement);
            phoneNumberElement.select();
            document.execCommand('copy');
            document.body.removeChild(phoneNumberElement);
            document.getElementById("phone-number-copied-alert").style.display = "block";
            setTimeout(() => {
                document.getElementById("phone-number-copied-alert").style.display = "none";
            }, 2500);
            
        }
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm("gmail", "portfolio_email", event.target, "user_a6vyvHCmFGwH9RA6zjpHP")
        .then(() => {
            document.getElementById("contact-form").reset();
        });
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className="contact">
            <div className="text-align-center tab-section">
                <div className="content-header">Contact</div>
                <div className="content">I will get back to you at the earliest.</div>
                <div className="content text-align-center">
                    <form id="contact-form" onSubmit={onFormSubmit}>
                        <input type="text" placeholder="Name" id="name"/>
                        <input type="text" placeholder="E-mail address" id="email_address"/>
                        <textarea placeholder="Message" id="message"/>
                        <input type="submit" value="Send Message"/>
                    </form>
                </div>
                <div className="content contact-options">
                    <Phone onClick={() => phoneClick()}/>
                    <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/vibinchakravarthy/")}/>
                    <Github onClick={() => window.open("https://github.com/Vibin247")}/>
                    <HackerRank onClick={() => window.open("https://www.hackerrank.com/vibin24796")}/>
                </div>
                <div id="phone-number-copied-alert">Phone number copied to clipboard</div>
                
                <div className="scroll-buttons">
                    <div className="scroll scroll-up" onClick={scrollToPage}></div>
                    <div className="scroll scroll-up" onClick={scrollToPage}></div>
                </div>
            </div>
        </section>
    );
}