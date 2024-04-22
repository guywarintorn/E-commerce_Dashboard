import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Paper } from '@mui/material';

const productsData = [
  { id: 1, name: 'Product A', price: 20.00, date: '2024-04-20', saleDate: '2024-04-25', sales: 50 },
  { id: 2, name: 'Product B', price: 25.00, date: '2024-04-18', saleDate: '2024-04-23', sales: 30 },
  { id: 3, name: 'Product C', price: 30.00, date: '2024-04-22', saleDate: '2024-04-27', sales: 40 },
];

const SalesTable = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    setSortBy(property);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedProducts = [...productsData].sort((a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
  });

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'date'}
                direction={sortBy === 'date' ? sortOrder : 'asc'}
                onClick={() => handleSort('date')}
              >
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'name'}
                direction={sortBy === 'name' ? sortOrder : 'asc'}
                onClick={() => handleSort('name')}
              >
                Product Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'price'}
                direction={sortBy === 'price' ? sortOrder : 'asc'}
                onClick={() => handleSort('price')}
              >
                Price ($)
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'saleDate'}
                direction={sortBy === 'saleDate' ? sortOrder : 'asc'}
                onClick={() => handleSort('saleDate')}
              >
                Sale Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === 'sales'}
                direction={sortBy === 'sales' ? sortOrder : 'asc'}
                onClick={() => handleSort('sales')}
              >
                Number of Sales
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedProducts.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.date}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.saleDate}</TableCell>
              <TableCell>{product.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SalesTable;
