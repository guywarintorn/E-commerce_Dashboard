import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const customersData = [
  { id: 1, name: 'Ronald Johnson', email: 'ronald.j@gmail.com', registerDate: '2023-05-10', totalBuy: 50000 },
  { id: 2, name: 'Jane Baker', email: 'jane.b@gmail.com', registerDate: '2022-09-15', totalBuy: 75000 },
  { id: 3, name: 'Michael Anderson', email: 'michael.a@gmail.com', registerDate: '2024-01-20', totalBuy: 300000 },
];

const CustomersTable = () => {
  return (
    <Paper>
      <TextField
        label="Search by Name or Email"
        variant="outlined"
        size="large"
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        style={{ marginBottom: '1rem' }}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Register Date</TableCell>
            <TableCell>Total Buy (THB)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customersData.map(customer => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.registerDate}</TableCell>
              <TableCell>{customer.totalBuy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CustomersTable;
