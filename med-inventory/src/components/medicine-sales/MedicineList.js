import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './MedicineList.scss';

class MedicineList extends Component {
  state = {};

  handleChange = changedValue => event => {
    this.setState({ [changedValue]: event.target.value });
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <div className="bill-section">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Medicine List
              </Typography>
              <Typography variant="body2" component="p" />
              {this.props.billMedicineList.map(item => {
                return (
                  <div className="bill-item-row" key={item.MedicineId}>
                    <TextField
                      value={item.name}
                      disabled={true}
                      margin="normal"
                    />
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      onClick={() =>
                        this.props.updateBillMedicineUnits(-1, item.MedicineId)
                      }
                    />
                    <p>{item.units}</p>
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      onClick={() =>
                        this.props.updateBillMedicineUnits(1, item.MedicineId)
                      }
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </form>
    );
  }
}

export default MedicineList;
