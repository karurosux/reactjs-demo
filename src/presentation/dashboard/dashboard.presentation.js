import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Segment, Header, Button } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './dashboard.presentation.scss';

import HomeComponent from './home/home.presentation';
import CustomersComponent from './customers/customers.presentation';

function DashboardPresentation() {
  return (
    <div className="dashboard">
      <Sidebar.Pushable as={Segment} className="dashboard-container">
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          vertical
          visible
          inverted
          width="wide"
        >
          <div className="profile-info">
            <h2 className="profile-info-name">Jonh Doe</h2>
          </div>
          <Link to="/dashboard/home">
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Link to="/dashboard/customers">
            <Menu.Item>Customers</Menu.Item>
          </Link>
        </Sidebar>

        <Sidebar.Pusher>
          <div className="dashboard-toolbar">
            <Header as="h3">My Application</Header>
            <span className="stretch" />
            <Link to="/login">
              <Button inverted className="dashboard-logout-button">
                Log Out
              </Button>
            </Link>
          </div>
          <Segment basic>
            <Switch>
              <Route path="/dashboard/home" component={HomeComponent} />
              <Route
                path="/dashboard/customers"
                component={CustomersComponent}
              />
              <Redirect from="/dashboard" to="/dashboard/home" />
            </Switch>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    // actions here
  }
)(DashboardPresentation);
