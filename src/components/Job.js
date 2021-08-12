import React from "react";
import { Link } from "react-router-dom";

export const Job = (props) => {
    return (
        <div className="work-container">
            <Link
                className="link"
                to={{
                    pathname: props.link,
                    state: { description: props.description },
                }}
            >
                <h2 className="work-title">{props.title}</h2>
            </Link>

            <span className="work-date">{props.date}</span>
            <p className="work-description">{props.description}</p>
        </div>
    );
};
