import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class MedicineTable extends React.Component {
  constructor(props) {
    super(props);
    this.gridOptions = {
      suppressCellSelection: true,
      suppressPropertyNamesCheck: true,
      accentedSort: true,
      enableBrowserTooltips: true,
      suppressPreventDefaultOnMouseWheel: true,
      suppressDragLeaveHidesColumns: true,
      rowHeight: 40,
      headerHeight: 46
    };
    this.state = {
      columnDefs: [
        {
          headerName: "NAME",
          field: "name",
          sortable: true,
          filter: true,
          pinned: true
        },
        {
          headerName: "MANUFACTURER",
          field: "manufacturer",
          sortable: true,
          filter: true
        },
        {
          headerName: "PRICE",
          field: "mrp",
          sortable: true,
          filter: true
        },
        {
          headerName: "CREATED BY",
          field: "CreatedBy",
          sortable: true,
          filter: true
        },
        {
          headerName: "CATEGORY",
          field: "category",
          sortable: true,
          filter: true
        }
      ],
      rowData: props.data
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "1020px"
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          gridOptions={this.gridOptions}
          pagination="true"
          paginationPageSize="10"
        ></AgGridReact>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ rowData: nextProps.data });
  }
}

export default MedicineTable;
