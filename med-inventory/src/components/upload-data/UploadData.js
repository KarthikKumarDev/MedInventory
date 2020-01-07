import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
const papa = require('papaparse');

class UploadData extends Component {
  state = { file: null };
  render() {
    return (
      <div className="form-section">
        <input
          type="file"
          onChange={event => this.setState({ file: event.target.files[0] })}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleUploadMedicine}
          className="form-button"
        >
          Upload Medicine
        </Button>
      </div>
    );
  }

  handleUploadMedicine = () => {
    papa.parse(this.state.file, {
      header: true,
      complete: result => {
        result.data.map(item => this.addMedicine(item));
      },
    });
  };

  addMedicine = values => {
    for (var key in values) {
      if (values[key] === '') console.log(values);
      values[key] = values[key] === '' ? '0' : values[key];
    }
    axios
      .post(
        'https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine',
        {
          ...values,
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default UploadData;
