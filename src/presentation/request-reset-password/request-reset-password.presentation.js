import React from 'react';
import { connect } from 'react-redux';
import './request-reset-password.presentation.scss';

class RequestResetPasswordPresentation extends React.Component {
  render() {
    return (
      <div className="request-reset-password">
        <br />
        <p info>Request Reset Password</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ });

export default connect(
  mapStateToProps,
  {
    // actions here
  }
)(RequestResetPasswordPresentation);
