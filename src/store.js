import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { blogCreateReducer, blogDeleteReducer, blogListReducer } from "./redux/reducer";
const reducer = combineReducers({
    blogList: blogListReducer,
    blogCreate: blogCreateReducer,
    blogDelete: blogDeleteReducer
    })
  const initialState={
       
    }
    const middleware = [thunk];
    
    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
    export default store