import Container from "@mui/material/Container";
import CustomersTable from "./CustomersTable";

function Customer() {
  return(
    <>
      <Container>
        <h1 className="mt-6 font-bold text-2xl text-center mb-4 pt-28 pb-10">Customers</h1>
        <CustomersTable />
      </Container>
    </>
  );
}

export default Customer;