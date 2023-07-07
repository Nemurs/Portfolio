import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactMe.css";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.message.value = ""
                console.log(result)
            }, (error) => {
                // show the user an error
                // console.log(error)
            });
    };

    return (
        <div className="ContactMe" >
            <p>
                Email is best but feel free to call or text me any time between 9am and 5pm PDT/PST.
            </p>
            <div className="ContactMe-form-wrapper">
                <form ref={form} onSubmit={sendEmail} className="ContactMe-form">
                    <div className='ContactMe-form-top'>
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <textarea name="message" id="message" placeholder="Message" rows="6"></textarea>
                </form>
                <div className='contact-options'>
                    <div className='contact-option'>
                        <i className="fas fa-mobile-alt" />
                        <p>310-465-7892</p>
                    </div>
                    <div className='contact-option'>
                        <i className="far fa-envelope" />
                        <a href="mailto:kevinoctaviomejia@gmail.com">KevinOctavioMejia@gmail.com</a>
                    </div>
                </div>
            </div>
            <button onClick={sendEmail} id='sendEmail-Button'>
                Send Message
            </button>
        </div>
    )
}

export default ContactMe;
