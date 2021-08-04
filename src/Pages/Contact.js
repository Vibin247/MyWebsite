import emailjs from 'emailjs-com';
import AlertMessage from '../Components/Common/AlertMessage';
import { ReactComponent as Phone } from '../SVGs/phone.svg';
import { ReactComponent as LinkedIn } from '../SVGs/linkedin.svg';
import { ReactComponent as Github } from '../SVGs/github.svg';
import { ReactComponent as HackerRank } from '../SVGs/hackerrank.svg';
import scroll from "../js/Navigation";
import { apiKeys } from '../Configs/apikeys';
import { useState } from 'react';

export default function Contact(props) {

    const [postingData, SetPostingData] = useState(false);
    const [PhoneMessageComponent, PhoneMessage, ShowPhoneMessage] = AlertMessage("phone", "Phone number copied to clipboard");
    const [PostMessageComponent, PostMessage, ShowPostMessage] = AlertMessage("messagepost", "I will get back to you at the earliest");
    const [FormErrorComponent, FormError, ShowFormError] = AlertMessage("formerror", "Looks like you are not saying something");

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
            ShowPhoneMessage();
        }
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        const formConfig = ["name","message","email_address"];
        var error = false;
        formConfig.map((element) => {
            return formData[element] =  document.getElementById(element).value !== "" ? document.getElementById(element).value : error = true;
        });
        if(error){
            ShowFormError();
            return;
        }
        SetPostingData(true);
        emailjs.send("gmail", apiKeys.tempalte_id, formData, apiKeys.user_id)
        .then(() => {
            SetPostingData(false);
            document.getElementById("contact-form").reset();
            ShowPostMessage();
        });
    };

    return (
        <section className="contact">
            <PhoneMessageComponent {...PhoneMessage}/>
            <PostMessageComponent {...PostMessage}/>
            <FormErrorComponent {...FormError}/>
            <div className="text-align-center tab-section">
                <div className="content-header">Contact</div>
                <div className="content tall-text-lines">Are you looking for a web developer or just want to know more about me? <br/>Drop a message!</div>
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

                <div className="scroll-buttons">
                    <div className="scroll scroll-up" onClick={scroll.scrollToTop}></div>
                    <div className="scroll scroll-up" onClick={scroll.scrollToTop}></div>
                </div>
            </div>
        </section>
    );
}