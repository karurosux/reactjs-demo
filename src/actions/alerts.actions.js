import { GET_ALERTS } from '../types/alerts.type';

export const getAlerts = () => dispatch => {
  dispatch({
    type: GET_ALERTS,
    alerts: [
      {
        from: 'alertbot',
        content: 'You have 7 new customers.'
      },
      {
        from: 'alertbot',
        content: 'You have been accepted by group X.'
      }
    ]
  });
};
