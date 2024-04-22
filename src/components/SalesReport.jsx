import Container from "@mui/material/Container";
import SalesTable from "./SalesTable";

function SalesReport() {
  return(
    <>
      <Container> 
        <h1 className="mt-6 font-bold text-2xl text-center mb-4 pt-28 pb-10">Sales Report</h1>
        <SalesTable />
      </Container>
    </>
  );
}

export default SalesReport;