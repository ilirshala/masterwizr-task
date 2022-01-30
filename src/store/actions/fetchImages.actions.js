import api from "../../service/axios.interceptors";

export const FETCH_IMAGES = "FETCH_IMAGES";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_FAIL = "FETCH_IMAGES_FAIL";

export const fetchImages = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_IMAGES });

    try {
      const response = await api.get("photos");
      if (response.status === 200) {
        dispatch({ type: FETCH_IMAGES_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: FETCH_IMAGES_FAIL, payload: response.data.error });
      }
    } catch (err) {
      dispatch({ type: FETCH_IMAGES_FAIL, payload: err.message });
    }
  };
};
