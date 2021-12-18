import { combineReducers } from "redux";
import posts from "./posts";
import modal from "./modal";
import blogs from "./blogs";

export default combineReducers({
  posts,
  modal,
  blogs,
});
