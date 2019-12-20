import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import MedicineTable from "./MedicineTable"
import axios from "axios";
import "./SearchMedicine.css";

class GetAllMedicine extends Component {
  state = { medicines: this.getMedicine };

  render() {
    return (
      <div>
        {this.state.medicines ? <MedicineTable data={this.state.medicines} /> : <CircularProgress />}
      </div>
    );
  }

  componentWillMount() {
    this.getMedicine();
  }

  getMedicine = () => {
    axios
      .get(
        "https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine"
      )
      .then(response => {
        this.setState({ medicines: response.data.Items }, () =>
          console.log(this.state.medicines)
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
}

export default GetAllMedicine;
