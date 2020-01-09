import React, { Component } from 'react';
import axios from 'axios';
import CustomizedSnackbars from '../../shared/SnackBar';

import './AddMedicine.scss';
import AddMedicineForm from './AddMedicineForm';

class AddMedicine extends Component {
  state = { isNotificationVisible: false };
  render() {
    return (
      <div className="form-section">
        <AddMedicineForm
          handleAddMedicine={values => this.handleAddMedicineClick(values)}
        />

        {this.state.isNotificationVisible ? (
          <CustomizedSnackbars
            variant="success"
            message="Medicine added successfully"
          />
        ) : null}
      </div>
    );
  }

  handleAddMedicineClick = values => {
    axios
      .post(
        'https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine',
        {
          MedicineId: Date.now()
            .toString()
            .substring(11, 13),
          ...values,
          CreatedBy: localStorage.getItem('user'),
        }
      )
      .then(response => {
        this.setState({ isNotificationVisible: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getMedicineCount = () => {
    axios
      .get(
        'https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine'
      )
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };
}

export default AddMedicine;
