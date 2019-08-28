import React, { Component } from "react";
import { withStyles } from '@material-ui/styles';
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./AddMedicineForm.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 1,
    marginRight: 1,
    width: "100%"
  },
  dense: {
    marginTop: 19
  },
  formControl: {
    marginLeft: 1,
    marginRight: 1,
    width: "100%"
  }
});

class AddMedicineForm extends Component {
  state = {
    name: "",
    category: "",
    packing: "",
    manufacturer: "",
    rackNumber: "",
    reorderLevel: 0,
    purchaseRate: 0,
    mrp: 0,
    gst: 0,
    tax: 0,
    convertRatio: 0
  };

  handleChange = changedValue => event => {
    this.setState({ [changedValue]: event.target.value });
  };

  render (){
    const { classes } = this.props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
          <div className="add-medicine-section">
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Add Medicine
                </Typography>
                <Typography variant="body2" component="p" />
                <TextField
                  id="standard-name"
                  label="Name & Combination"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="category-native-simple">Category</InputLabel>
                  <Select
                    native
                    className={classes.select}
                    label="Category"
                    value={this.state.category}
                    onChange={this.handleChange("category")}
                    inputProps={{
                      name: "category",
                      id: "category-native-simple"
                    }}
                  >
                    <option value="" />
                    <option value={"Category1"}>Category1</option>
                    <option value={"Category2"}>Category2</option>
                    <option value={"Category3"}>Category3</option>
                  </Select>
                </FormControl>
                <TextField
                  id="packing"
                  label="Packing"
                  className={classes.textField}
                  value={this.state.packing}
                  onChange={this.handleChange("packing")}
                  margin="normal"
                />
                <TextField
                  id="manufacturer"
                  label="Manufacturer"
                  className={classes.textField}
                  value={this.state.manufacturer}
                  onChange={this.handleChange("manufacturer")}
                  margin="normal"
                />
                <TextField
                  id="rackNumber"
                  label="Rack Number"
                  className={classes.textField}
                  value={this.state.rackNumber}
                  onChange={this.handleChange("rackNumber")}
                  margin="normal"
                />
                <TextField
                  id="reorderLevel"
                  label="Reorder Level."
                  className={classes.textField}
                  value={this.state.reorderLevel}
                  onChange={this.handleChange("reorderLevel")}
                  margin="normal"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="body2" component="p" />
                <TextField
                  id="purchaseRate"
                  label="Purchase Rate"
                  type="number"
                  className={classes.textField}
                  value={this.state.purchaseRate}
                  onChange={this.handleChange("purchaseRate")}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">&#8377;</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="mrp"
                  label="M.R.P."
                  type="number"
                  className={classes.textField}
                  value={this.state.mrp}
                  onChange={this.handleChange("mrp")}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">&#8377;</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="gst"
                  label="GST"
                  type="number"
                  className={classes.textField}
                  value={this.state.gst}
                  onChange={this.handleChange("gst")}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">%</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="tax"
                  label="Tax"
                  type="number"
                  className={classes.textField}
                  value={this.state.tax}
                  onChange={this.handleChange("tax")}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">%</InputAdornment>
                    )
                  }}
                />
                <TextField
                  id="convertRatio"
                  label="Convert Ratio"
                  type="number"
                  className={classes.textField}
                  value={this.state.convertRatio}
                  onChange={this.handleChange("convertRatio")}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.props.handleAddMedicine(this.state)}
                  className="form-button"
                >
                  Add Medicine
                </Button>
              </CardContent>
            </Card>
          </div>
        </form>
      );
  }
}

export default withStyles(styles)(AddMedicineForm);