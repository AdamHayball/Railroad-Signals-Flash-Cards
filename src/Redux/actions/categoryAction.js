import { HOME_CATEGORY_SUCCESS, SELECTION_CATEGORY_SUCCESS } from "../types";

export const homeCategory = (data, history) => {
  function success(payload) {
    return { type: HOME_CATEGORY_SUCCESS, payload };
  }

  return (dispatch) => {
    dispatch(success(data));
    history.push("/select");
  };
};

export const selectQuizTypeCategory = (data, history) => {
  function success(payload) {
    return { type: SELECTION_CATEGORY_SUCCESS, payload };
  }

  return (dispatch) => {
    dispatch(success(data));
    data.category === "quiz"
      ? history.replace("/quiz")
      : history.replace("/cards");
  };
};
