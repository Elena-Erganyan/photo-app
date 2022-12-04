import React, { useEffect } from "react";
import Gallery from "./Gallery";
import { connect } from "react-redux";
import { requestPhotos } from "../../redux/photos-reducer";
import Preloader from "../common/Preloader/Preloader";



const GalleryContainer = (props) => {

    useEffect(() => {
        props.requestPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>
        {props.isFetching ? <Preloader /> : null}
        <Gallery photos={props.photos} isModalActive={props.isModalActive} />
    </>

};

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
        isFetching: state.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPhotos: () => {
            dispatch(requestPhotos());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
