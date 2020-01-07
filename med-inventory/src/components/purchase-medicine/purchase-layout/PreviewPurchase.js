import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './PreviewPurchase.css';

class PreviewPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: this.props.medicinelistchoosen,
    };
  }

  render() {
    return (
      <>
        {this.state.selectedData ? (
          <div className="preview-content-box">
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name of Medicine</TableCell>
                  <TableCell align="left">New Stock Count</TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <div className="table-container">
              <Table>
                <TableBody>
                  {this.props.medicinelistchoosen.map(item => (
                    <TableRow key={item.name}>
                      <TableCell class="table-cell-style" align="left">
                        {item.name}
                      </TableCell>
                      <TableCell class="table-cell-style" align="center">
                        {item.newStockCount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
}

export default PreviewPurchase;
