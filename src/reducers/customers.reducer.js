import { GET_CUSTOMERS } from '../types/customers.type';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return action.customers;
    default:
      return state;
  }
};
