import { createStore, applyMiddleware, compose } from "redux";
import photosReducer from "./photos-reducer";
import thunkMiddleware from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(photosReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;