import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Shared components
import Portlet from 'components/Portlet';
import PortletHeader from 'components/PortletHeader';
import PortletLabel from 'components/PortletLabel';
import PortletContent from 'components/PortletContent';
import PortletFooter from 'components/PortletFooter';

// Component styles
import styles from './styles';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'California',
    label: 'California'
  },
  {
    value: 'Alaska',
    label: 'Alaska'
  },
  {
    value: 'Colorado',
    label: 'Colorado'
  },
  {
    value: 'Connecticut',
    label: 'Connecticut'
  },
  {
    value: 'Delaware',
    label: 'Delaware'
  },
  {
    value: 'Florida',
    label: 'Florida'
  },
  {
    value: 'Georgia',
    label: 'Georgia'
  },
  {
    value: 'Hawaii',
    label: 'Hawaii'
  },
  {
    value: 'Idaho',
    label: 'Idaho'
  },
  {
    value: 'Illinois',
    label: 'Illinois'
  },
  {
    value: 'Iowa',
    label: 'Iowa'
  },
  {
    value: 'Kansas',
    label: 'Kansas'
  },
  {
    value: 'Kentucky',
    label: 'Kentucky'
  },
  {
    value: 'Louisiana',
    label: 'Louisiana'
  },
  {
    value: 'Maine',
    label: 'Maine'
  },
  {
    value: 'Maryland',
    label: 'Maryland'
  },
  {
    value: 'Massachusetts',
    label: 'Massachusetts'
  },
  {
    value: 'Michigan',
    label: 'Michigan'
  },
  {
    value: 'Minnesota',
    label: 'Minnesota'
  },
  {
    value: 'Mississippi',
    label: 'Mississippi'
  },
  {
    value: 'Missouri',
    label: 'Missouri'
  },
  {
    value: 'Montana',
    label: 'Montana'
  },
  {
    value: 'Nebraska',
    label: 'Nebraska'
  },
  {
    value: 'Nevada',
    label: 'Nevada'
  },
  {
    value: 'New Hampshire',
    label: 'New Hampshire'
  },
  {
    value: 'New Jersey',
    label: 'New Jersey'
  },
  {
    value: 'New Mexico',
    label: 'New Mexico'
  },
  {
    value: 'New York',
    label: 'New York'
  },
  {
    value: 'North Carolina',
    label: 'North Carolina'
  },
  {
    value: 'North Dakota',
    label: 'North Dakota'
  },
  {
    value: 'Ohio',
    label: 'Ohio'
  },
  {
    value: 'Oklahoma',
    label: 'Oklahoma'
  },
  {
    value: 'Oregon',
    label: 'Oregon'
  },
  {
    value: 'Pennsylvania',
    label: 'Pennsylvania'
  },
  {
    value: 'Rhode Island',
    label: 'Rhode Island'
  },
  {
    value: 'South Carolina',
    label: 'South Carolina'
  },
  {
    value: 'South Dakota',
    label: 'South Dakota'
  },
  {
    value: 'Tennessee',
    label: 'Tennessee'
  },
  {
    value: 'Texas',
    label: 'Texas'
  },
  {
    value: 'Utah',
    label: 'Utah'
  },
  {
    value: 'Vermont',
    label: 'Vermont'
  },
  {
    value: 'Virginia',
    label: 'Virginia'
  },
  {
    value: 'Washington',
    label: 'Washington'
  },
  {
    value: 'West Virginia',
    label: 'West Virginia'
  },
  {
    value: 'Wisconsin',
    label: 'Wisconsin'
  },
  {
    value: 'Wyoming',
    label: 'Wyoming'
  }
];

class Account extends Component {
  state = {
    firstName: ' ',
    lastName: ' ',
    email: ' ',
    phone: '',
    state: '',
    country: ''
  };

  handleChange = e => {
    this.setState({
      state: e.target.value
    });
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { firstName, lastName, phone, state, country, email } = this.state;
    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="The information can be edited"
            title="Profile"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                required
                value={firstName}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Last name"
                margin="dense"
                required
                value={lastName}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Email Address"
                margin="dense"
                required
                value={email}
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Phone Number"
                margin="dense"
                type="number"
                value={phone}
                variant="outlined"
              />
            </div>
            <div className={classes.field}>
              <TextField
                className={classes.textField}
                label="Select State"
                margin="dense"
                onChange={this.handleChange}
                required
                select
                SelectProps={{
                  native: true
                }}
                value={state}
                variant="outlined">
                {states.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                className={classes.textField}
                label="Country"
                margin="dense"
                required
                value={country}
                variant="outlined"
              />
            </div>
          </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
