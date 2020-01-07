import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './BillingForm.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 1,
    marginRight: 1,
    width: '100%',
  },
  formControl: {
    marginLeft: 1,
    marginRight: 1,
    width: '100%',
  },
});

class BillingForm extends Component {
  state = {
    name: '',
    contactNumber: '',
    billingDate: new Date(),
  };

  handleChange = changedValue => event => {
    const updatedValue =
      changedValue === 'billingDate' ? event : event.target.value;
    const billingDetails = {
      ...this.props.billingDetails,
      [changedValue]: updatedValue,
    };
    this.props.updateBillingDetails(billingDetails);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <div className="billing-details-section">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Billing Details
              </Typography>
              <Typography variant="body2" component="p" />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  format="dd/MMM/yyyy"
                  margin="normal"
                  id="billingDate"
                  label="Billing Date"
                  value={this.props.billingDetails.billingDate}
                  onChange={this.handleChange('billingDate')}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <TextField
                id="standard-name"
                label="Patient Name"
                className={classes.textField}
                value={this.props.billingDetails.patientName}
                onChange={this.handleChange('patientName')}
                margin="normal"
              />
              <TextField
                id="patientContactNumber"
                label="Phone Number"
                className={classes.textField}
                value={this.props.billingDetails.patientContactNumber}
                onChange={this.handleChange('patientContactNumber')}
                margin="normal"
                type="number"
              />
            </CardContent>
          </Card>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(BillingForm);
