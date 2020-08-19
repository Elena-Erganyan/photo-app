import axios from "axios";



const instance = axios.create({
    baseURL: "https://boiling-refuge-66454.herokuapp.com/images/"
});

export const photosAPI = {
    getPhotos() {
        return instance.get();
    },
    getPhotoData(photoId) {
        return instance.get(`${photoId}`);
    },
    setComment(photoId, name, comment) {
        return instance.post(`${photoId}/comments`, { name, comment });
    }
};