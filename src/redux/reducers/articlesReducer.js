import {ADD_ARTICLES} from '../actions/articlesActions'

const initialState = {
  data: [],

}

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      console.log(action);
      return {...state}
    default:
      return state
  }
}