import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Checkbox, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './request-reset-password.presentation.scss';

class RequestResetPasswordPresentation extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div className="login">
        <Segment loading={this.state.isLoading} className="login-box">
          <p className="reset-instructions">
            Please enter your email address and press send email button to
            continue.
          </p>
          <Form>
            <Form.Field required>
              <label>Email</label>
              <input type="email" placeholder="example@email.com" />
            </Form.Field>
            <br />
            <Link to="/login">
              <Button primary fluid type="button">
                Send Email
              </Button>
            </Link>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {
    // actions here
  }
)(RequestResetPasswordPresentation);
