// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the Navbar.css file
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

const NavBar = () => {
  return (
    <nav>
       <Stack direction="row" spacing={2}>

      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
      <ul className="navbar-list">
        <li>
          <Link to="/Home2" ><HomeIcon  sx={{ color: 'white', fontSize: '2rem', marginRight: '8px',alignItems:'center' }}/></Link>
        </li>
        <li className='info-icon'>
          <Link to="/about" ><InfoIcon sx={{ alignItems:'right' }}/> </Link>
        </li>
        <li className="cart-icon">
        <Link to="/cart" ><AddShoppingCartIcon  sx={{ color: 'white', fontSize: '2rem', marginLeft:'8px',alignItems:'right' }}/></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
