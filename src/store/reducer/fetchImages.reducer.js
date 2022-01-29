import {
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAIL,
} from "../actions/fetchImages.actions";

const INITIAL_STATE = {
  images: [],
  isLoading: false,
  errorMessage: null,
};

const fetchAllImages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IMAGES: {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case FETCH_IMAGES_SUCCESS: {
      console.log("SUCCESS", state);
      return {
        ...state,
        images: [...action.payload],
        isLoading: false,
        errorMessage: null,
      };
    }
    case FETCH_IMAGES_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    }
    default:
      return state;
  }
};
export default fetchAllImages;
