import axios from "axios";



const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/elena-erganyan/images/images"
});

export const photosAPI = {
    getPhotos() {
        return instance.get();
    },
    getPhotoData(photoId) {
        return instance.get(`${photoId}`);
    },
    setComment(photoId, comments, userName, text, id, date) {
        return instance.patch(`${photoId}`, { comments: [...comments, {userName, text, id, date}]});
    }
};