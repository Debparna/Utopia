import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core/styles/index';

// Material components
import Button from '@material-ui/core/Button/index';
import Checkbox from '@material-ui/core/Checkbox/index';
import CircularProgress from '@material-ui/core/CircularProgress/index';
import Grid from '@material-ui/core/Grid/index';
import IconButton from '@material-ui/core/IconButton/index';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Shared utilities
import validators from 'common/validators';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

validate.validators.checked = validators.checked;

{/*
  const Signup = () => {
      const [values, setValues] = useState({
          name: "",
          email: "",
          password: "",
          error: "",
          success: false
      });

      const { name, email, password, success, error } = values;

      const handleChange = name => event => {
          setValues({ ...values, error: false, [name]: event.target.value });
      };

      const clickSubmit = event => {
          event.preventDefault();
          setValues({ ...values, error: false });
          signup({ name, email, password }).then(data => {
              if (data.error) {
                  setValues({ ...values, error: data.error, success: false });
              } else {
                  setValues({
                      ...values,
                      name: "",
                      email: "",
                      password: "",
                      error: "",
                      success: true
                  });
              }
          });
      };

      const signUpForm = () => (
          <form>
              <div className="form-group">
                  <label className="text-muted">Name</label>
                  <input
                      onChange={handleChange("name")}
                      type="text"
                      className="form-control"
                      value={name}
                  />
              </div>

              <div className="form-group">
                  <label className="text-muted">Email</label>
                  <input
                      onChange={handleChange("email")}
                      type="email"
                      className="form-control"
                      value={email}
                  />
              </div>

              <div className="form-group">
                  <label className="text-muted">Password</label>
                  <input
                      onChange={handleChange("password")}
                      type="password"
                      className="form-control"
                      value={password}
                  />
              </div>
              <button onClick={clickSubmit} className="btn btn-primary">
                  Submit
              </button>
          </form>
      );

      const showError = () => (
          <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
          >
              {error}
          </div>
      );

      const showSuccess = () => (
          <div
              className="alert alert-info"
              style={{ display: success ? "" : "none" }}
          >
              New account is created. Please <Link to="/signin">Signin</Link>
          </div>
      );

      return (
          <Layout
              title="Signup"
              description="Signup to Node React E-commerce App"
              className="container col-md-8 offset-md-2"
          >
              {showSuccess()}
              {showError()}
              {signUpForm()}
          </Layout>
      );
  };

*/}
// Service methods
const signUp = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignUp extends Component {
  state = {
    values: {
      firstName: '',
      lastName: '',
      Company: '',
      Role: '',
      email: '',
      password: '',
      policy: false
    },
    touched: {
      firstName: false,
      lastName: false,
      Company: false,
      Role: false,
      email: false,
      password: false,
      policy: null
    },
    errors: {
      firstName: null,
      lastName: null,
      Company: null,
      Role: null,
      email: null,
      password: null,
      policy: null
    },
    isValid: false,
    isLoading: false,
    submitError: null
  };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignUp = async () => {
    try {
      const { history } = this.props;
      const { values } = this.state;

      this.setState({ isLoading: true });

      await signUp({
        firstName: values.firstName,
        lastName: values.lastName,
        Company: values.Company,
        Role: values.Role,
        email: values.email,
        password: values.password
      });

      history.push('/sign-in');
    } catch (error) {
      this.setState({
        isLoading: false,
        serviceError: error
      });
    }
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading
    } = this.state;

    const showFirstNameError =
      touched.firstName && errors.firstName ? errors.firstName[0] : false;
    const showLastNameError =
      touched.lastName && errors.lastName ? errors.lastName[0] : false;
    const showEmailError =
      touched.email && errors.email ? errors.email[0] : false;
    const showCompanyError =
        touched.Company && errors.Company ? errors.Company[0] : false;
    const showRoleError =
        touched.Role && errors.Role ? errors.Role[0] : false;
    const showPasswordError =
      touched.password && errors.password ? errors.password[0] : false;
    const showPolicyError =
      touched.policy && errors.policy ? errors.policy[0] : false;

    return (
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteWrapper}
            item
            lg={5}
          >
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography
                  className={classes.quoteText}
                  variant="h1"
                >
                  Utopia
                </Typography>
                <div className={classes.person}>
                  <Typography
                    className={classes.name}
                    variant="body1"
                  >
                  CONTROL, MONITOR AND TRACK YOUR ROBOT
                  </Typography>
                  <Typography
                    className={classes.bio}
                    variant="body2"
                  >
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}
                >
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography
                    className={classes.title}
                    variant="h2"
                  >
                    Create new account
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    variant="body1"
                  >
                    Use your work email to create new account.
                  </Typography>
                  <div className={classes.fields}>

                  <TextField
                    className={classes.textField}
                    label="Company"
                    onChange={event =>
                      this.handleFieldChange('Company', event.target.value)
                    }
                    value={values.Company}
                    variant="outlined"
                  />
                  {showCompanyError && (
                    <Typography
                      className={classes.fieldError}
                      variant="body2"
                    >
                      {errors.Company[0]}
                    </Typography>
                  )}

                  <TextField
                    className={classes.textField}
                    label="Role"
                    onChange={event =>
                      this.handleFieldChange('Role', event.target.value)
                    }
                    value={values.Role}
                    variant="outlined"
                  />
                  {showRoleError && (
                    <Typography
                      className={classes.fieldError}
                      variant="body2"
                    >
                      {errors.Role[0]}
                    </Typography>
                  )}

                    <TextField
                      className={classes.textField}
                      label="First name"
                      name="firstName"
                      onChange={event =>
                        this.handleFieldChange('firstName', event.target.value)
                      }
                      value={values.firstName}
                      variant="outlined"
                    />
                    {showFirstNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.firstName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Last name"
                      onChange={event =>
                        this.handleFieldChange('lastName', event.target.value)
                      }
                      value={values.lastName}
                      variant="outlined"
                    />
                    {showLastNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.lastName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.password[0]}
                      </Typography>
                    )}
                    <div className={classes.policy}>
                      <Checkbox
                        checked={values.policy}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={() =>
                          this.handleFieldChange('policy', !values.policy)
                        }
                      />
                      <Typography
                        className={classes.policyText}
                        variant="body1"
                      >
                        I have read the &nbsp;
                        <Link
                          className={classes.policyUrl}
                          to="#"
                        >
                          Terms and Conditions
                        </Link>
                        .
                      </Typography>
                    </div>
                    {showPolicyError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2"
                      >
                        {errors.policy[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography
                      className={classes.submitError}
                      variant="body2"
                    >
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      disabled={!isValid}
                      onClick={this.handleSignUp}
                      size="large"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                  )}
                  <Typography
                    className={classes.signIn}
                    variant="body1"
                  >
                    Have an account?{' '}
                    <Link
                      className={classes.signInUrl}
                      to="/sign-in"
                    >
                      Sign In
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignUp.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignUp);
