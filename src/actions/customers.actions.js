import { GET_CUSTOMERS } from '../types/customers.type';

export const getCustomers = () => next => {
  next({
    type: GET_CUSTOMERS,
    customers: [
      {
        name: 'Carlos',
        surname: 'Gonzalez'
      },
      {
        name: 'David',
        surname: 'Ortega'
      },
      {
        name: 'Alejandra',
        surname: 'Valdez'
      },
      {
        name: 'Mario',
        surname: 'Rivera'
      }
    ]
  });
};
