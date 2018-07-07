import React from 'react';
import { connect } from 'react-redux';
import './sign-up.presentation.scss';

class SignUpPresentation extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <br />
        <p info>Sign Up</p>
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
)(SignUpPresentation);
