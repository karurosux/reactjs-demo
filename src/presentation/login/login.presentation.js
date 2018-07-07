import React from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Segment, Divider } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import './login.presentation.scss';

class LoginPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    return (
      <div className="login">
        <Segment loading={this.state.isLoading} className="login-box">
          <Form onSubmit={this.onSubmit.bind(this)}>
            <Form.Field required>
              <label>Email</label>
              <input type="email" placeholder="example@email.com" />
            </Form.Field>
            <Form.Field required>
              <label>Password: </label>
              <input type="password" placeholder="****" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Stay signed in." />
            </Form.Field>
            <br />
            <Button primary fluid type="submit">
              Sign In
            </Button>
          </Form>
          <br />
          <Link to="/request-password-reset">
            <Button inverted fluid basic>
              Reset Password
            </Button>
          </Link>
          <br />
          <Divider inverted horizontal content="Or" />
          <br />
          <Button secondary fluid>
            Sign Up
          </Button>
        </Segment>
      </div>
    );
  }

  onSubmit() {
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.props.history.push('/dashboard');
    }, 3000);
  }
}

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    {
      // actions here
    }
  )(LoginPresentation)
);
