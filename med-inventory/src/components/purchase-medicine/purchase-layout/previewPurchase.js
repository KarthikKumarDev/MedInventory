import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./previewPurchase.css";


class PreviewPurchase extends Component{
  constructor(props){
      super(props);
      this.state ={
          selectedData : this.props.medicinelistchoosen
      };
  }

  render() {
      return(
          <>
           {this.state.selectedData ?
               <div className="preview-content-box">
                    <TableContainer component={Paper}>
                        <Table  size="small"  aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell class="table-cell-style" align="left">Name of Medicine</TableCell>
                                    <TableCell class="table-cell-style" align="left">New Stock Count</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.props.medicinelistchoosen.map(item => (
                                <TableRow key={item.name}>
                                     <TableCell class="table-cell-style" align="left">{item.name}</TableCell>
                                     <TableCell class="table-cell-style" align="left">{item.newStockCount}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                     </TableContainer>
              </div>
               : ""}
          </>
       );
     }
 }

export default PreviewPurchase;