import {combineReducers} from "redux";
import liked from './likedReducer';
import homes from './homeReducer';
import lots from './lotReducer';


// import reviews from "./reviews";
// import auth from "./auth";

export default combineReducers({
    homes,
    lots,
    liked
});