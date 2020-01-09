import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MedicineTable from './MedicineTable';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios';
import './SearchMedicine.scss';

class GetAllMedicine extends Component {
  state = { medicines: this.getMedicine, filteredMedicine: [] };

  render() {
    return (
      <div>
        {this.state.medicines ? (
          <>
            <TextField
              id="standard-name"
              label="Search medicine name"
              className={''}
              value={this.state.name}
              onChange={event => this.filterMedicines(event.target.value)}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <MedicineTable data={this.state.filteredMedicine} />
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }

  componentWillMount() {
    this.getMedicine();
  }

  getMedicine = () => {
    axios
      .get(
        'https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine'
      )
      .then(response => {
        this.setState({
          medicines: response.data.Items,
          filteredMedicine: response.data.Items,
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  filterMedicines = searchTerm => {
    const filteredMedicine = this.state.medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredMedicine });
  };
}

export default GetAllMedicine;
