import { GET_WELCOME_MESSAGE } from '../types/welcome-message.type';

export const getWelcomeMessage = () => dispatch => {
  dispatch({
    type: GET_WELCOME_MESSAGE,
    message: 'Welcome to the application you will love!'
  });
};
