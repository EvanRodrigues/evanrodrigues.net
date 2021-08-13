import React from "react";
import "../stylesheets/css/Intro.css";

export const Intro = () => {
    return (
        <>
            <div className="intro-container">
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
                    , and if you're interested in contacting me you can{" "}
                    <a
                        className="link"
                        href={`${process.env.PUBLIC_URL}#contact`}
                    >
                        send me a message
                    </a>{" "}
                    below.
                </span>
                <span className="intro-entry">
                    If you'd like to learn more about me, scroll down to see
                    some of my work!
                </span>

                <div className="social-links">
                    <div className="icon-container">
                        <a
                            href="https://linkedin.com/in/evan-rodrigues/"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin icon"></i>
                        </a>
                        <a
                            href="https://github.com/EvanRodrigues"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
