import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  textField: {
    marginLeft: 1,
    marginRight: 1,
    width: '18vw',
  },
});

class PurchaseForm extends Component {
  state = {
    PurchaseNumber: '',
    InvoiceAmount: '',
    InvoiceDate: new Date(),
    Discount: '',
    PurchaseDate: new Date(),
    Total: '',
  };
  handleChange = changedValue => event => {
    const updatedValue =
      changedValue === 'PurchaseDate' || changedValue === 'InvoiceDate'
        ? event
        : event.target.value;
    const purchaseDetails = {
      ...this.props.purchaseDetails,
      [changedValue]: updatedValue,
    };
    this.props.updatePurchaseDetails(purchaseDetails);
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              format="dd/MMM/yyyy"
              margin="normal"
              id="purchaseDate"
              className={classes.textField}
              label="Purchase Date"
              value={this.props.purchaseDetails.PurchaseDate}
              onChange={this.handleChange('PurchaseDate')}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <TextField
            id="purchaseNumber"
            label="Purchase Number"
            className={classes.textField}
            value={this.props.purchaseDetails.PurchaseNumber}
            onChange={this.handleChange('PurchaseNumber')}
            margin="normal"
            type="number"
          />
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              format="dd/MMM/yyyy"
              margin="normal"
              id="invoiceDate"
              className={classes.textField}
              label="Invoice Date"
              value={this.props.purchaseDetails.InvoiceDate}
              onChange={this.handleChange('InvoiceDate')}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <TextField
            id="invoiceAmount"
            label="Invoice Amount"
            value={this.props.purchaseDetails.InvoiceAmount}
            onChange={this.handleChange('InvoiceAmount')}
            margin="normal"
            type="number"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            id="discount"
            label="Discount"
            value={this.props.purchaseDetails.Discount}
            onChange={this.handleChange('Discount')}
            margin="normal"
            type="number"
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            id="total"
            label="Total"
            value={this.props.purchaseDetails.Total}
            onChange={this.handleChange('Total')}
            margin="normal"
            type="number"
            disabled
            className={classes.textField}
          />
        </div>
        <div>
        <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleUpdateLogClick(this.state)}
            className={classes.textField}
          >
            Update Log
          </Button>
        </div> 
      </>
    );
  }
}

export default withStyles(styles)(PurchaseForm);
