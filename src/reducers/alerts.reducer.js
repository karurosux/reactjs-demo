import { GET_ALERTS } from '../types/alerts.type';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERTS:
      return action.alerts;
    default:
      return state;
  }
};
