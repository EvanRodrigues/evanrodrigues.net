import React, { useState } from "react";
import "../stylesheets/css/Contact.css";

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

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

    const isEmpty = (input) => {
        return input.length === 0;
    };

    const validateEmail = () => {
        const emailRegex =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (emailRegex.test(email) === false) {
            setEmailError("Please enter a valid email address");
            return false;
        }

        setEmailError("");
        return true;
    };

    const validateForm = () => {
        let isValid = true;

        if (isEmpty(name)) {
            setNameError("Missing name field");
            isValid = false;
        }
        if (isEmpty(email) === true) {
            setEmailError("Missing email field");
            isValid = false;
        }
        if (isEmpty(subject)) {
            setSubjectError("Missing subject field");
            isValid = false;
        }
        if (isEmpty(message)) {
            setMessageError("Missing message field");
            isValid = false;
        }
        if (validateEmail() === false) isValid = false;

        return isValid;
    };

    const submitEmail = (event) => {
        event.preventDefault();

        if (validateForm() === false) return;

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
            .then((jsonData) => {
                setSubmitted(true);
                console.log("SUCCESS!", jsonData);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    if (submitted === true) {
        return (
            <div className="success-container">
                <h2 className="success-message">
                    Message submitted successfully!
                </h2>
                <h2 className="success-message">
                    Thank you for contacting me, and I'll get back to you
                    shortly!
                </h2>
            </div>
        );
    }
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
                    <span className="error-message">{nameError}</span>
                </div>

                <div className="input-container">
                    <label className="contact-label">Email</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="email"
                        onChange={updateEmail}
                    ></input>
                    <span className="error-message">{emailError}</span>
                </div>

                <div className="input-container">
                    <label className="contact-label">Subject</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="subject"
                        onChange={updateSubject}
                    ></input>
                    <span className="error-message">{subjectError}</span>
                </div>

                <div className="input-container bottom">
                    <label className="contact-label">Message</label>
                    <textarea
                        className="contact-message"
                        name="message"
                        onChange={updateMessage}
                    ></textarea>
                    <span className="error-message">{messageError}</span>
                    <button className="submit-button" onClick={submitEmail}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
