import React from "react";

export const HomeSection = (props) => {
    if (!props.title) {
        return (
            <div id={props.id} className="home-section">
                <div className="info-container" data-testid="info-container">
                    {props.children}
                </div>
            </div>
        );
    }
    return (
        <div id={props.id} className="home-section">
            <div className={`info-container`} data-testid="info-container">
                <div className="header-container">
                    <h1 className="section-header">{props.title}</h1>
                </div>
                {props.children}
            </div>
        </div>
    );
};
