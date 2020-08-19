import React from "react";
import "./Photo.scss";



const Photo = (props) => {

    const onPhotoClick = () => {
        props.requestPhotoData(props.photoId);
    };

    return <div className="gallery__item">
        <img className="gallery__photo" onClick={onPhotoClick} src={props.photoUrl} alt={`photo_${props.id}`} />
    </div>
};

export default Photo;