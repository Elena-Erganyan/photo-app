import React from "react";
import "./Comment.scss";



const Comment = (props) => {

    const timestamp = props.date;
    const date = new Date(timestamp);
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    };
    const result = date.toLocaleDateString("en-GB", options).replace(/\//g, ".");

    return <div className="comment">
        <div className="comment__date">
            {result}
        </div>
        {props.userName && <div className="comment__userName">
            {props.userName}
        </div>}
        <div className="comment__text">
            {props.text}
        </div>
    </div>
};

export default Comment;