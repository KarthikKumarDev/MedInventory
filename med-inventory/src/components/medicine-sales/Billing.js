import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import SearchAndAddMedicine from "./SearchAndAddMedicine";
import BillingForm from "./BillingForm";
import MedicineList from "./MedicineList";

import "./Billing.css";

class Billing extends Component {
  state = {
    isNotificationVisible: false,
    medicines: null,
    billMedicineList: [],
    billingDetails: {
      patientName: "",
      patientContactNumber: "",
      billingDate: new Date()
    }
  };
  render() {
    return (
      <div className="billing-section">
        {this.state.medicines ? (
          <>
            <SearchAndAddMedicine
              medicines={this.state.medicines}
              addMedicineToBill={medicine =>
                this.handleAddMedicineToBill(medicine)
              }
            />
            <BillingForm
              billingDetails={this.state.billingDetails}
              updateBillingDetails={billingDetails =>
                this.setState({ billingDetails })
              }
              className="billing-form"
            />
            <MedicineList
              billMedicineList={this.state.billMedicineList}
              updateBillMedicineUnits={(updateValue, MedicineId) =>
                this.handleBillMedicineUnitsUpdate(updateValue, MedicineId)
              }
            />
            {/* Will be enabled after backend Components are ready */}
            <Button
              className="bill-generation-button"
              variant="contained"
              color="primary"
              disabled={true}
            >
              Generate Bill
            </Button>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.getMedicine();
  }

  getMedicine = () => {
    axios
      .get(
        "https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine"
      )
      .then(response => {
        this.setState({ medicines: response.data.Items });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  handleAddMedicineToBill = medicine => {
    let billMedicineList = this.state.billMedicineList;
    if (!billMedicineList.find(item => item.MedicineId === medicine.MedicineId))
      billMedicineList.push({ ...medicine, units: 1 });
    this.setState({ billMedicineList });
  };

  handleBillMedicineUnitsUpdate = (updateValue, MedicineId) => {
    const billMedicineList = Object.assign([], this.state.billMedicineList);
    const index = billMedicineList.findIndex(
      item => item.MedicineId === MedicineId
    );
    if (billMedicineList[index].units + updateValue > 0) {
      billMedicineList[index].units += updateValue;
    } else {
      billMedicineList.splice(index, 1);
    }
    this.setState({ billMedicineList });
  };
}

export default Billing;
