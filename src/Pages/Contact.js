import emailjs from 'emailjs-com';
import { ReactComponent as Phone } from '../SVGs/phone.svg';
import { ReactComponent as LinkedIn } from '../SVGs/linkedin.svg';
import { ReactComponent as Github } from '../SVGs/github.svg';
import { ReactComponent as HackerRank } from '../SVGs/hackerrank.svg';
import scroll from "../js/scroll";
import { apiKeys } from '../configurations/apikeys';
import { useState } from 'react';

export default function Contact(props) {

    const [postingData, SetPostingData] = useState(false);

    const scrollToPage = () => {
        scroll.scrollToPage(props.tabs[0].name);
    };

    const showAlert = (id) => {
        document.getElementById(id).style.display = "block";
        setTimeout(() => {
            document.getElementById(id).style.display = "none";
        }, 2500);
        
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
            showAlert("phone-number-copied-alert");
        }
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        const formConfig = ["name","message","email_address"];
        formConfig.map((element) => {
            return formData[element] =  document.getElementById(element).value;
        });
        SetPostingData(true);
        emailjs.send("gmail", apiKeys.tempalte_id, formData, apiKeys.user_id)
        .then(() => {
            SetPostingData(false);
            document.getElementById("contact-form").reset();
            showAlert("message-sent-succesfully");
        });
    };

    return (
        <section className="contact">
            <div className="text-align-center tab-section">
                <div className="content-header">Contact</div>
                <div className="content">Want to know more?</div>
                <div className="content text-align-center">
                    <form id="contact-form" onSubmit={onFormSubmit}>
                        <input type="text" placeholder="Name" id="name"/>
                        <input type="text" placeholder="E-mail address" id="email_address"/>
                        <textarea placeholder="Message" id="message"/>
                        <input type="submit" value="Send Message" disabled={postingData}/>
                    </form>
                </div>
                <div className="content contact-options">
                    <Phone onClick={() => phoneClick()}/>
                    <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/vibinchakravarthy/")}/>
                    <Github onClick={() => window.open("https://github.com/Vibin247")}/>
                    <HackerRank onClick={() => window.open("https://www.hackerrank.com/vibin24796")}/>
                </div>
                <div id="phone-number-copied-alert">Phone number copied to clipboard</div>
                <div id="message-sent-succesfully">I will get back to you at the earliest.</div>

                <div className="scroll-buttons">
                    <div className="scroll scroll-up" onClick={scrollToPage}></div>
                    <div className="scroll scroll-up" onClick={scrollToPage}></div>
                </div>
            </div>
        </section>
    );
}