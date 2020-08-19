import { photosAPI } from "../api/api";



const initialState = {
    photos: [],
    photoData: {},
    isModalActive: false,
    isFetching: false
}

const SET_PHOTOS = "SET_PHOTOS";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_COMMENT = "SET_COMMENT";
const TOGGLE_IS_MODAL_ACTIVE = "TOGGLE_IS_MODAL_ACTIVE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const photosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos: [...action.photos]
            };
        case SET_PHOTO_DATA:
            return {
                ...state,
                photoData: { ...action.photoData }
            };
        case SET_COMMENT:
            return {
                ...state,
                photoData: {
                    ...state.photoData,
                    comments: [...state.photoData.comments, { ...action.payload }]
                }
            };
        case TOGGLE_IS_MODAL_ACTIVE:
            return {
                ...state,
                isModalActive: action.isModalActive
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });

export const setPhotoData = (photoData) => ({ type: SET_PHOTO_DATA, photoData });

export const setComment = (commentId, text, date, userName) => ({
    type: SET_COMMENT,
    payload: {
        "id": commentId,
        "text": text,
        "date": date,
        "userName": userName
    }
});

export const toggleIsModalActive = (isModalActive) => ({ type: TOGGLE_IS_MODAL_ACTIVE, isModalActive });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const requestPhotos = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        const response = await photosAPI.getPhotos();

        if (response.status === 200) {
            dispatch(toggleIsFetching(false));
            dispatch(setPhotos(response.data));
        } else {
            alert(`Some error ocurred: ${response.status}: ${response.statusText}`);
        }
    };
};

export const requestPhotoData = (photoId) => {
    return async (dispatch) => {

        const response = await photosAPI.getPhotoData(photoId);

        if (response.status === 200) {
            dispatch(setPhotoData(response.data));
            dispatch(toggleIsModalActive(true));
        } else {
            alert(`Some error ocurred: ${response.status}: ${response.statusText}`);
        }
    };
};

export const postComment = (photoId, userName, text, commentId, date) => {
    return async (dispatch) => {

        const response = await photosAPI.setComment(photoId, userName, text, commentId, date);

        if (response.status === 204) {
            dispatch(setComment(commentId, text, date, userName));
        } else {
            alert(`Some error ocurred: ${response.status}: ${response.statusText}`);
        }
    };
};

export default photosReducer;