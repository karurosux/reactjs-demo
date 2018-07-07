import { GET_WELCOME_MESSAGE } from '../types/welcome-message.type';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WELCOME_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
