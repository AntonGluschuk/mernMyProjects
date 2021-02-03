import { combineReducers } from "redux";
import postsReducer from "../components/Posts/store/postsSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
