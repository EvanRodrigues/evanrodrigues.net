import React from "react";
import github from "../images/icons/github_50.png";
import linkedin from "../images/icons/linked-in_50.png";
import "../stylesheets/css/Intro.css";

export const Intro = () => {
    return (
        <>
            <div className="text">
                <span className="intro-entry">I'm Evan Rodrigues!</span>
                <span className="intro-entry">
                    I'm a Software Developer who specializes in Web Development.
                </span>
                <span className="intro-entry">
                    Feel free to view{" "}
                    <a
                        className="link"
                        href={`${process.env.PUBLIC_URL}/Evan_Rodrigues_Resume.pdf`}
                    >
                        {" "}
                        my resume
                    </a>
                    , and if you're interested in contacting me you can send me
                    an email.
                </span>
                <span className="intro-entry">
                    If you'd like to learn more about me, scroll down to see
                    some of my work!
                </span>

                <div className="social-links">
                    <div className="icon-container">
                        <a href="https://linkedin.com/in/evan-rodrigues/">
                            <img
                                className="icon"
                                alt="linked-in_50.png"
                                src={linkedin}
                            />
                        </a>
                        <a href="https://github.com/EvanRodrigues">
                            <img
                                className="icon"
                                alt="github_50.png"
                                src={github}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
