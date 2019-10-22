import React, { Component } from 'react';
import axios from 'axios';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';

// Shared components
import Paper from 'components/Paper';

// Component styles
import styles from './styles';

class Latitude extends Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    apiResponse: "" 
    };
  }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

  render() {
    const { classes, className, ...rest } = this.props;
    const rootClassName = classNames(classes.root, className);
    const { title } = this.state;
    console.log(title);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <Typography
            className={classes.title}
            variant="body2"
          >
            LATITUDE
          </Typography>
          <div className={classes.details}>
            <Typography variant="h3"> {this.state.apiResponse} </Typography>
          </div>
        </div>
        <div className={classes.iconWrapper}>
          <MoneyOutlinedIcon className={classes.icon} />
        </div>
      </Paper>
    );
  } //end of render
} //end of component

Latitude.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Latitude);
