import {ADD_ARTICLES, GREET} from '../actions/articlesActions'

const initialState = {
  data: [],
}

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      console.log('REDUCER --> ', action.payload);
      return { ...state, data: action.payload }
    case GREET:
      return {...state, greet: action.payload}
    default:
      return state
  }
}