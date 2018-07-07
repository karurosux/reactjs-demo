import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './dashboard.presentation.scss';

import ChildRouter from '../../components/child-router.component';
import ChildRoute from '../../components/child-route.component';

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
          inverted
          vertical
          visible
          width="wide"
        >
          <Link to="/dashboard/home">
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Link to="/dashboard/customers">
            <Menu.Item>Customers</Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item>Sign Out</Menu.Item>
          </Link>
        </Sidebar>

        <Sidebar.Pusher>
          <div className="dashboard-toolbar">
            <Header as="h3">My Application</Header>
          </div>
          <Segment basic>
            <ChildRouter>
              <ChildRoute
                default
                path="/dashboard/home"
                component={HomeComponent}
              />
              <ChildRoute
                path="/dashboard/customers"
                component={CustomersComponent}
              />
            </ChildRouter>
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
