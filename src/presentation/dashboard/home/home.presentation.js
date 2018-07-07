import React from 'react';
import { connect } from 'react-redux';
import { Message, Header } from 'semantic-ui-react';
import AlertTable from '../../../components/alert-table.component';
import { getWelcomeMessage } from '../../../actions/welcome-message.actions';
import { getAlerts } from '../../../actions/alerts.actions';
import './home.presentation.scss';

class HomePresentation extends React.Component {
  componentWillMount() {
    this.props.getWelcomeMessage();
    this.props.getAlerts();
  }

  render() {
    return (
      <div className="home">
        <Message warning>{this.props.welcomeMessage}</Message>
        <br />
        <Header>Alerts</Header>
        <AlertTable alerts={this.props.alerts} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  welcomeMessage: state.welcomeMessage,
  alerts: state.alerts
});

export default connect(
  mapStateToProps,
  {
    getWelcomeMessage,
    getAlerts
  }
)(HomePresentation);
