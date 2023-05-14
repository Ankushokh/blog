import axios from "axios";
import {
    BLOGS_CREATE_FAIL,
    BLOGS_CREATE_REQUEST,
    BLOGS_CREATE_SUCCESS,
    BLOGS_DELETE_FAIL,
    BLOGS_DELETE_REQUEST,
    BLOGS_DELETE_SUCCESS,
    BLOGS_LIST_FAIL,
    BLOGS_LIST_REQUEST,
    BLOGS_LIST_SUCCESS,
} from "./constant";
  
export const listBlogs = () => async (dispatch) => {
    try {
      dispatch({
        type: BLOGS_LIST_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`);
  
      dispatch({
        type: BLOGS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BLOGS_LIST_FAIL,
        payload: message,
      });
    }
};
export const deleteBlogsAction = (id) => async (dispatch) => {
    try {
      dispatch({
        type: BLOGS_DELETE_REQUEST,
      });
  

      const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      dispatch({
        type: BLOGS_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: BLOGS_DELETE_FAIL,
        payload: message,
      });
    }
  };