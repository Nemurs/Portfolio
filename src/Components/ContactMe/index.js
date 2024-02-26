import React, { useRef, useState } from 'react';
import { Store } from 'react-notifications-component';
import emailjs from '@emailjs/browser';
import SyncLoader from "react-spinners/SyncLoader";
import "./ContactMe.css";

const notification = {
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__bounceInRight"],
    animationOut: ["animate__animated", "animate__bounceOutRight"],
    dismiss: {
        duration: 4000,
        showIcon: true
    },
    slidingEnter: {
        duration: 500,
        timingFunction: 'ease-in',
    },
    slidingExit: {
        duration: 500,
        timingFunction: 'ease-out',
    }
}

const ContactMe = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const formContents = form.current;

        setLoading(true);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formContents, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                Store.addNotification({
                    title: "Success",
                    message: "Your message has been sent to Kevin!",
                    type: "success",
                    ...notification
                });
                setTimeout(()=>{setLoading(false)}, 250);
            }, (error) => {
                Store.addNotification({
                    title: "Error",
                    message: "Your message was not sent. Please try again.",
                    type: "danger",
                    ...notification
                });
                setTimeout(()=>{setLoading(false)}, 250);
            });
    };

    return (
        <div className={loading? "ContactMe messageSending" : "ContactMe"} >
            {loading ?
                (<SyncLoader
                    color='#47bbff97'
                    loading={loading}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className='messageLoader'
                />) : (<>
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
                                <p>(310) 465-7892</p>
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
                </>)
            }
        </div>
    )
}

export default ContactMe;
