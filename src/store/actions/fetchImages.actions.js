import api from "../../service/axios.interceptors";

// export const fetchImages = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_IMAGES });

//     try {
//       const res = await api.get("/photos");
//       console.log(res.data);
//       if (res.status === 200) {
//         dispatch({ type: FETCH_IMAGES_SUCCESS, payload: res.data });
//       } else {
//         dispatch({ FETCH_IMAGES_FAIL, payload: res.data.error });
//       }
//     } catch (err) {
//       dispatch({ type: FETCH_IMAGES_FAIL, payload: err.message });
//     }
//   };
// };

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
