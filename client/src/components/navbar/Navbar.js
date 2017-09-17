import React from 'react';
import { Navbar } from 'react-bootstrap';

//css
import './Navbar.css';

const MainNavbar = (props) => {
  return (
    <Navbar className='navbar-section text-center'>
      <span className="navbar-title">Know Your Dose</span>
    </Navbar>
  );
}

export default MainNavbar;
