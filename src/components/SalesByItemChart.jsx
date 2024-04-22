import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['red', 'blue', 'green'];

export default function SalesByItemChart() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Item</Typography>
        <PieChart
          series={[
            { data: [{ value: 10, color: 'orange' }, { value: 15 }, { value: 20 }] },
          ]}
          {...pieParams}

        />
      </Box>
    </Stack>
  );
}