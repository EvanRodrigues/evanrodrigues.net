import React, { useState } from "react";
import "../stylesheets/css/Contact.css";

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const url = "/.netlify/functions/sendEmail";

    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateSubject = (event) => {
        setSubject(event.target.value);
    };
    const updateEmail = (event) => {
        setEmail(event.target.value);
    };
    const updateMessage = (event) => {
        setMessage(event.target.value);
    };

    const validateForm = () => {};

    const submitEmail = (event) => {
        event.preventDefault();

        const data = {
            senderName: name,
            senderEmail: email,
            subject: subject,
            message: message,
        };

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("SUCCESS!", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div id="formContainer">
            <form id="contactForm">
                <div className="input-container">
                    <label className="contact-label">Name</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="name"
                        onChange={updateName}
                    ></input>
                </div>

                <div className="input-container">
                    <label className="contact-label">Email</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="email"
                        onChange={updateEmail}
                    ></input>
                </div>

                <div className="input-container">
                    <label className="contact-label">Subject</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="subject"
                        onChange={updateSubject}
                    ></input>
                </div>

                <div className="input-container bottom">
                    <label className="contact-label">Message</label>
                    <textarea
                        className="contact-message"
                        name="message"
                        onChange={updateMessage}
                    ></textarea>

                    <button className="submit-button" onClick={submitEmail}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
