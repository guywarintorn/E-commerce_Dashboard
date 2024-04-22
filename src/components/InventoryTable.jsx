import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const inventoryData = [
  { id: 1, name: 'Product A', category: 'Electronics', stock: 20, status: 'In Stock' },
  { id: 2, name: 'Product B', category: 'Clothing', stock: 5, status: 'Low Stock' },
  { id: 3, name: 'Product C', category: 'Home & Kitchen', stock: 0, status: 'Out of Stock' },
];

const InventoryTable = () => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Items in Stock</TableCell>
            <TableCell>Item Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryData.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                  <Button variant="outlined">
                    Add
                  </Button>
                  <Button>
                    Configure
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default InventoryTable;
