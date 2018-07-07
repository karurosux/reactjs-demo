import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './store';

import LoginPresentation from './presentation/login/login.presentation';
import DashboardPresentation from './presentation/dashboard/dashboard.presentation';
import RequestPasswordResetPresentation from './presentation/request-reset-password/request-reset-password.presentation';
import SignUpPresentation from './presentation/sign-up/sign-up.presentation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
