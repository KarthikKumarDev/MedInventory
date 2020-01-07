import React, { Component } from 'react';
// import axios from "axios";
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import './SearchAndAddMedicine.css';

class SearchAndAddMedicine extends Component {
  state = {
    selectedMedicine: null,
  };
  render() {
    return (
      <div className="search-section">
        <Autocomplete
          id="combo-box-demo"
          options={this.props.medicines}
          getOptionLabel={option => option.name}
          onChange={(event, value) => {
            this.setState({ selectedMedicine: value });
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Search for Medicine"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            this.state.selectedMedicine !== null
              ? this.props.addMedicineToBill(this.state.selectedMedicine)
              : null
          }
        >
          Add to Bill
        </Button>
      </div>
    );
  }
}

export default SearchAndAddMedicine;
