import { HOME_CATEGORY_SUCCESS, SELECTION_CATEGORY_SUCCESS } from "../types";

const initialState = {
  category: { category: null },
  quizType: { category: null },
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_CATEGORY_SUCCESS:
      return { ...state, category: action.payload };

    case SELECTION_CATEGORY_SUCCESS:
      return { ...state, quizType: action.payload };

    default:
      return state;
  }
};

export default categoryReducer;
