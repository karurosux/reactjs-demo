import { combineReducers } from 'redux';
import welcomeMessageReducer from './welcome-message.reducer';
import alertsReducer from './alerts.reducer';
import customersReducer from './customers.reducer';

export default combineReducers({
  welcomeMessage: welcomeMessageReducer,
  alerts: alertsReducer,
  customers: customersReducer
});
