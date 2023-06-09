import {BLOGS_CREATE_FAIL, BLOGS_CREATE_REQUEST, BLOGS_CREATE_SUCCESS, BLOGS_DELETE_FAIL, BLOGS_DELETE_REQUEST, BLOGS_DELETE_SUCCESS, BLOGS_LIST_FAIL, BLOGS_LIST_REQUEST, BLOGS_LIST_SUCCESS} from './constant'
export const blogListReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
      case BLOGS_LIST_REQUEST:
        return { loading: true };
      case BLOGS_LIST_SUCCESS:
        return { loading: false, blogs: action.payload };
      case BLOGS_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const blogCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case BLOGS_CREATE_REQUEST:
        return { loading: true };
      case BLOGS_CREATE_SUCCESS:
        return { loading: false, success: true };
      case BLOGS_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const blogDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case BLOGS_DELETE_REQUEST:
        return { loading: true };
      case BLOGS_DELETE_SUCCESS:
        return { loading: false, success: true };
      case BLOGS_DELETE_FAIL:
        return { loading: false, error: action.payload, success: false };
  
      default:
        return state;
    }
  };
  
