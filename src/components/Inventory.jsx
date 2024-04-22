import Container from "@mui/material/Container";
import InventoryTable from "./InventoryTable";

function Inventory() {
  return(
    <>
      <Container>
        <h1 className="mt-6 font-bold text-2xl text-center mb-4 pt-28 pb-10">Inventory</h1>
        <InventoryTable />
      </Container>
    </>
  );
}

export default Inventory;