import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const pData = [9800, 6890, 3908, 2400, 1800];
const xLabels = [
  'Product A',
  'Product B',
  'Product C',
  'Product D',
  'Product E',
];

export default function TopProduct() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'Sales', id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}