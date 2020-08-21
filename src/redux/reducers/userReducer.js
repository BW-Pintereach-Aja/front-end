import { ADD_USER, UPDATE_USER, REMOVE_USER } from "../actions/userActions";

const initial_state = {

};

export const userReducer = (state = initial_state, actions) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
      };
  }
};
