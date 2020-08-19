import React from "react";
import { connect } from "react-redux";
import Modal from "./Modal";
import { toggleIsModalActive, postComment } from "../../redux/photos-reducer";



const ModalContainer = (props) => {

    return <Modal toggleIsModalActive={props.toggleIsModalActive} photoData={props.photoData} postComment={props.postComment} /*setComment={props.setComment}*/ />
};

const mapStateToProps = (state) => {
    return {
        photoData: state.photoData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsModalActive: (isModalActive) => {
            dispatch(toggleIsModalActive(isModalActive))
        },
        postComment: (photoId, commentId, text, date, userName) => {
            dispatch(postComment(photoId, commentId, text, date, userName));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);