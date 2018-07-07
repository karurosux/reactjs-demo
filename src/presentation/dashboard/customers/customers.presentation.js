import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getCustomers } from '../../../actions/customers.actions';
import CustomersTable from '../../../components/customers-table.component';
import './customers.presentation.scss';

class CustomersPresentation extends React.Component {
  componentWillMount() {
    this.props.getCustomers();
  }

  render() {
    return (
      <div className="customers">
        <br />
        <Header info>Customers</Header>
        <CustomersTable customers={this.props.customers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customers
});

export default connect(
  mapStateToProps,
  {
    getCustomers
  }
)(CustomersPresentation);
