import React from "react";
import { connect } from "react-redux";
import Photo from "./Photo";
import { requestPhotoData } from "../../../redux/photos-reducer";



const PhotoContainer = (props) => {

    return <Photo photoId={props.id} photoUrl={props.photoUrl} requestPhotoData={props.requestPhotoData} />
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPhotoData: (photoId) => {
            dispatch(requestPhotoData(photoId));
        }
    };
};



export default connect(null, mapDispatchToProps)(PhotoContainer);