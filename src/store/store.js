import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import fetchImagesReducer from "./reducer/fetchImages.reducer";

const appReducer = combineReducers({
  fetchImagesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
