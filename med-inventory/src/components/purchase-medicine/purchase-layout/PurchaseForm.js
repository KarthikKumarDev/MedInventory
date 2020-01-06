import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  textField: {
    marginLeft: 1,
    marginRight: 1,
    width: "18vw"
  }
});

class PurchaseForm extends Component {
    state = {
        purchaseNumber: "",
        invoiceAmount : "",
        invoiceDate : new Date(),
        dicount : "",
        purchaseDate: new Date(),
        total : ""
      };
      handleChange = changedValue => event => {
        const updatedValue =
         (changedValue === "purchaseDate" || changedValue === "invoiceDate")? event : event.target.value;
        const purchaseDetails = {
          ...this.props.purchaseDetails,
          [changedValue]: updatedValue
        };
        this.props.updatePurchaseDetails(purchaseDetails);
      };

    render() 
    {
        const { classes } = this.props;
        return(
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
                                value={this.props.purchaseDetails.purchaseDate}
                                onChange={this.handleChange("purchaseDate")}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                         </MuiPickersUtilsProvider>
                     </div>
                     <div>
                     <TextField
                            id="purchaseNumber"
                            label="Purchase Number"
                            className={classes.textField}
                            value={this.props.purchaseDetails.purchaseNumber}
                            onChange={this.handleChange("purchaseNumber")}
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
                                value={this.props.purchaseDetails.invoiceDate}
                                onChange={this.handleChange("invoiceDate")}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                         </MuiPickersUtilsProvider>
                   </div>
                   <div>
                    <TextField
                            id="invoiceAmount"
                            label="Invoice Amount"
                            value={this.props.purchaseDetails.invoiceAmount}
                            onChange={this.handleChange("invoiceAmount")}
                            margin="normal"
                            type="number"
                            className={classes.textField}
                        />
                  </div> 
                  <div>
                    <TextField
                            id="discount"
                            label="Discount"
                            value={this.props.purchaseDetails.discount}
                            onChange={this.handleChange("discount")}
                            margin="normal"
                            type="number"
                            className={classes.textField}
                        />
                  </div> 
                  <div>
                  <TextField
                            id="total"
                            label="Total"
                            value={this.props.purchaseDetails.invoiceAmount}
                            onChange={this.handleChange("total")}
                            margin="normal"
                            type="number"
                            disabled
                            className={classes.textField}
                        />
                  </div>
            </>
        );
    }
}

export default withStyles(styles)(PurchaseForm);