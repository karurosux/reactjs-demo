import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';

import LoginPresentation from './presentation/login/login.presentation';
import DashboardPresentation from './presentation/dashboard/dashboard.presentation';
import RequestPasswordResetPresentation from './presentation/request-reset-password/request-reset-password.presentation';
import SignUpPresentation from './presentation/sign-up/sign-up.presentation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/login" component={LoginPresentation} />
            <Route path="/dashboard" component={DashboardPresentation} />
            <Route
              path="/request-password-reset"
              component={RequestPasswordResetPresentation}
            />
            <Route path="/sign-up" component={SignUpPresentation} />
            <Redirect from="/" to="/login" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;
