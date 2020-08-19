import React from "react";
import Comment from "./Comment/Comment";
import "./Comments.scss";



const Comments = (props) => {

    const comments = props.comments.map((item) =>
        <Comment key={item.id} text={item.text} date={item.date} userName={item.userName} />
    );

    return <div className="comments">{comments}</div>
};

export default Comments;