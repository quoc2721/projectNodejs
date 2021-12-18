import { INIT_STATE } from "../../constant";
import { getBlogs, getType } from "../actions";

export default function blogsReducer(state = INIT_STATE.blogs, action) {
  switch (action.type) {
    case getType(getBlogs.getBlogsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getBlogs.getBlogsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getBlogs.getBlogsFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
