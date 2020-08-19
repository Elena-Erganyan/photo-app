import React from "react";
import "./Modal.scss";
import Comments from "./Comments/Comments";
import CommentsForm from "./CommentsForm/CommentsForm";



const Modal = (props) => {

    const onCloseClick = () => {
        props.toggleIsModalActive(false);
    }

    return <div className="overlay">
        <div className="modal">
            <div className="modal__wrapper">
                <img className="modal__photo" src={props.photoData.url} alt={`photo_${props.photoData.id}`} />
                <button className="closeBtn" onClick={onCloseClick}>Close</button>

                {props.photoData.comments.length > 0 ? <Comments comments={props.photoData.comments} /> :
                    <div className="comments">No comments yet...</div>}
                <CommentsForm postComment={props.postComment} photoId={props.photoData.id} comments={props.photoData.comments} />
            </div>
        </div>
    </div>
};

export default Modal;