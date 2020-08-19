import React from "react";
import "./Gallery.scss";
import PhotoContainer from "./Photo/PhotoContainer";



const Gallery = (props) => {

    const gallery = props.photos.map((item) => <PhotoContainer key={item.id} photoUrl={item.url} id={item.id} isModalActive={props.isModalActive} />);

    return <div className="gallery">{gallery}</div>
};

export default Gallery;
