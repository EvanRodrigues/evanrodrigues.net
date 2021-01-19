import React from "react";
import { Link } from "react-router-dom";

export const Job = (props) => {
    return (
        <div className="work-container">
            <Link className="link" to={props.link}>
                <h4 className="work-title">{props.title}</h4>
            </Link>

            <span className="work-date">{props.date}</span>
            <p className="work-summary">{props.summary}</p>
        </div>
    );
};
