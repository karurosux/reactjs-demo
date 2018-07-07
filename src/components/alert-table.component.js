import React from 'react';
import { Table } from 'semantic-ui-react';
import propTypes from 'prop-types';

function AlertTable(props) {
  const alerts = props.alerts;
  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>Alert</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {alerts.map(alert => (
          <Table.Row>
            <Table.Cell>{alert.from}</Table.Cell>
            <Table.Cell>{alert.content}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

AlertTable.propTypes = {
  alerts: propTypes.array.isRequired
};

export default AlertTable;
