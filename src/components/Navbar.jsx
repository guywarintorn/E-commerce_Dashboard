import * as React from 'react';
import Button from '@mui/material/Button';
import Logo from "../assets/whale.svg";
import { Link } from "react-router-dom";
import TimelineIcon from '@mui/icons-material/Timeline';

function Navbar() {
  return(
    <>
        <nav className="flex flex-col md:flex-row justify-between items-center py-4 border-b-2 shadow-sm fixed top-0 w-full bg-white z-10">
          <div className="mx-4 font-bold text-3xl flex flex-col md:flex-row items-center text-center">
            <h1><Link to="/">Dashboard</Link></h1>
            <img src={Logo} alt="logo" className="w-12 h-12 pb-2 mt-2"/>
          </div>

          <div className="mx-4">
            <ul className="flex flex-row space-x-4">
              <Button variant="outlined" startIcon={<TimelineIcon />}><Link to="/">Overview</Link></Button>
              <Button variant="outlined"><Link to="/sales">Sales</Link></Button>
              <Button variant="outlined"><Link to="/inventory">Inventory</Link></Button>
              <Button variant="outlined"><Link to="/customers">Customers</Link></Button>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;