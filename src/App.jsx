import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import SalesReport from "./components/SalesReport";
import Inventory from "./components/Inventory";
import Customer from "./components/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Overview />}></Route>
            <Route path="/sales" element={<SalesReport />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/customers" element={<Customer />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
