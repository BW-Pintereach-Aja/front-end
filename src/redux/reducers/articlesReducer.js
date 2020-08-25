import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
} from "../actions/articlesActions";

const initialState = {
  data: [],
  isFetching: false,
  error: "",
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      console.log("REDUCER --> ", action.payload);
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
