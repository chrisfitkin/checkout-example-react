import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const nesImage = require('../../assets/NES-Console-Set.png');
const styles = {
  nesImage: {
    'max-width': 80,
  },
  price: {
    'font-weight': 'bold',
  }
};


const OrderTable = () => (
  <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn></TableHeaderColumn>
          <TableHeaderColumn>Item</TableHeaderColumn>
          <TableHeaderColumn>Qty</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn><img src={nesImage} style={styles.nesImage}/></TableRowColumn>
          <TableRowColumn>NES Console</TableRowColumn>
          <TableRowColumn>1</TableRowColumn>
          <TableRowColumn><span style={styles.price}>$500</span></TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default OrderTable;
