import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function DailySalesChart() {
  const randomData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));

  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
         16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }]}
      series={[
        {
          data: randomData,
        },
      ]}
      height={300}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
