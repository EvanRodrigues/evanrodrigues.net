import React, { useState } from "react";

export const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const url = "/.netlify/functions/sendEmail";

    const updateName = (event) => {
        setName(event.target.value);
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
        <>
            <div>
                <form>
                    <label className="contact-label">Name</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="name"
                        onChange={updateName}
                    ></input>
                    <br />
                    <label className="contact-label">Email</label>
                    <input
                        className="contact-text"
                        type="text"
                        name="email"
                        onChange={updateEmail}
                    ></input>
                    <br />
                    <label className="contact-label">Message</label>
                    <textarea
                        className="contact-message"
                        name="message"
                        onChange={updateMessage}
                    ></textarea>
                    <br />
                    <button className="submit-button" onClick={submitEmail}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
