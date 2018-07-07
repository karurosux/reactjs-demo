import React from 'react';
import { Table } from 'semantic-ui-react';
import propTypes from 'prop-types';

function CustomersTable(props) {
  const customers = props.customers;
  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Surname</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {customers.map(c => (
          <Table.Row>
            <Table.Cell>{c.name}</Table.Cell>
            <Table.Cell>{c.surname}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

CustomersTable.propTypes = {
  customers: propTypes.array.isRequired
};

export default CustomersTable;
