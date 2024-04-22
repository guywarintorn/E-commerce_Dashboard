import React from "react";
import Grid  from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import TotalSalesChart from "./TotalSalesChart";
import SalesByItemChart from "./SalesByItemChart";
import CustomerChart from "./CustomerChart";
import GrowthChart from "./GrowthChart";
import TopProduct from "./TopProduct";
import DailySalesChart from "./DailySalesChart";

function Overview() {
  return(
    <>
      <body className="bg-gray-100">
        <Container>
          <h1 className="mb-6 pt-28 font-bold text-2xl text-center">Overview</h1>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper>
                <h3 className="text-xl px-2 py-4">Total Sales</h3>
                <TotalSalesChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className="h-full">
                <h3 className="text-xl px-2 py-4">Sales by items</h3>
                <SalesByItemChart />
              </Paper>
              
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <h3 className="text-xl px-2 py-4">New customers</h3>
                <CustomerChart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <h3 className="text-xl px-2 py-4">Growth</h3>
                <GrowthChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="flex flex-col items-center">
                <h3 className="text-xl py-4">Daily Sales</h3>
                <DailySalesChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="flex flex-col items-center mb-10">
                <h3 className="text-xl py-4">Top Sales Product</h3>
                <TopProduct />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </body>
    </>
  );
}

export default Overview;