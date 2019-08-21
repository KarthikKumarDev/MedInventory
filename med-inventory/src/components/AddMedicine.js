import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import "./AddMedicine.css"

class AddMedicine extends Component {
  state = {};
  render() {
    return (
      <div className="form-section">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Purchase
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.handleAddMedicineClick}>
              Add Medicine
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

  handleAddMedicineClick = () => {
    axios
      .post(
        "https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine",
        {
          MedicineId: "51"
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default AddMedicine;
