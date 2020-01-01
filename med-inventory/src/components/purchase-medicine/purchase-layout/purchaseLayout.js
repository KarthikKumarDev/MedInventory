import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import axios from "axios";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./purchaseLayout.css";
import NumericEditor from "../../../shared/gridEditors/NumericEditor";
import PreviewPurchase from "./previewPurchase";
import PurchaseForm from "./PurchaseForm";

class PurchaseLayout extends Component{
  constructor(){
    super();
    this.gridApi={};
    this.gridOptions = {
      suppressCellSelection: true,
      suppressPropertyNamesCheck: true,
      suppressRowClickSelection: true,
      accentedSort: true,
      enableBrowserTooltips: true,
      suppressPreventDefaultOnMouseWheel: true,
      suppressDragLeaveHidesColumns: true,
      headerHeight: 46
    };
    this.rowSelection = "multiple";
    this.singleEditClick = "true";
    this.frameworkComponents= {
      numericEditor: NumericEditor
    };
    this.columnDefs= [
      {
        headerName: "NAME", field: "name" ,sortable: true, filter: true ,pinned:"left", width:180,
        headerCheckboxSelection: true, checkboxSelection: true, lockPosition: true
      }, {
        headerName: "MANUFACTURER", field: "manufacturer",sortable: true,  width:150, filter: true
      }, {
        headerName: "PRICE", field: "mrp",sortable: true,  width:150, filter: true
      },{
        headerName : "CREATED BY", field :"CreatedBy",sortable: true, width:150, filter: true
      },{
        headerName : "CATEGORY" , field : "category" ,sortable : true , width:150, filter :true
      },{
        headerName : "CURRENT STOCK COUNT" , resizable :"true",field : "currentStockCount" , width:180, sortable : true , filter : true
      },{
        headerName : "NEW STOCK COUNT" , field : "newStockCount" , sortable : true , width:180, filter : true,
        editable: true,cellEditor: "numericEditor",pinned: "right", lockPinned: true
      }
    ];
    this.state = {
      rowData: [],
      selectedMedicineData : [],
      purchaseDetails :{
        purchaseNumber: "",
        invoiceAmount : "",
        invoiceDate : new Date(),
        dicount : "",
        purchaseDate: new Date(),
        total : ""
      }
    };
  }
  
  render(){
      return(
      <div>
         {this.state.rowData  ? (
            <Card className="card-style">
                <CardContent>
                 <div className="layout-style">
                   <div className= "layout-box1">
                      <div
                          className="ag-theme-balham"
                          style={{
                            height: "300px"
                          }}
                        >
                          <AgGridReact
                                  columnDefs={this.columnDefs}
                                  rowData={this.state.rowData}
                                  gridOptions={this.gridOptions}
                                  pagination="true"
                                  paginationPageSize="10"
                                  rowSelection={this.rowSelection}
                                  singleClickEdit={this.singleEditClick}
                                  frameworkComponents={this.frameworkComponents}
                                  onSelectionChanged={this.onSelectionChanged}
                                  onGridReady={this.onGridReady}
                              >
                          </AgGridReact>
                        </div>
                        <div className="form-box">
                          <PurchaseForm  purchaseDetails={this.state.purchaseDetails} updatePurchaseDetails={purchaseDetails =>
                            this.setState({ purchaseDetails })}/>
                        </div>
                   </div> 
                    <div className="layout-box2">
                      <div className="preview-box">
                         <PreviewPurchase medicinelistchoosen={this.state.selectedMedicineData} />
                      </div>
                    </div>
                  </div>
                </CardContent>
            </Card>
         ):(
           <CircularProgress />
         )} 
       </div>
      );
   }

   onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

   componentWillMount() {
    this.getMedicine();
   } 

   onSelectionChanged = (params) => {
    const selectedNodeList = params.api.getSelectedNodes();
    let medicineList = [];
    selectedNodeList.map((node) => {
         medicineList.push({ ...node.data});
         return console.log(node);
    }); 
    this.setState({selectedMedicineData : medicineList});
   };
   
  getMedicine = () => {
    axios
      .get(
        "https://sidls7kjne.execute-api.ap-south-1.amazonaws.com/staging/medicine"
      )
      .then( (response) => {
        this.setState({ rowData: response.data.Items }, () =>
          console.log(this.state.rowData)
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  
 }

export default PurchaseLayout;