import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/images/logo-bg.png'
import '../styles/navbar.css';

function Navbar() {
  return (
    <AppBar position='absolute' className='navbar-container'>
      <Toolbar>
        <img src={Logo} alt="Hero Background" className='logo'/>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}> </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <NavLink to="/" className='nav-link' activeClassName='active-link'>
            <Button className='btn' color='inherit'>Home</Button>
          </NavLink>
          <NavLink to="/find-doctor" className='nav-link' activeClassName='active-link'>
            <Button className='btn' color='inherit'>Find a doctor</Button>
          </NavLink> 
          <NavLink to="/patients-visitors" className='nav-link' activeClassName='active-link'>
            <Button className='btn' color='inherit'>Patients & visitors</Button>
          </NavLink>
          <NavLink to="/contact" className='nav-link' activeClassName='active-link'>
            <Button className='btn' color='inherit'>Contact us</Button>
          </NavLink>

          <NavLink to="/login" style={{ color: 'white' }}>
            <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
              <PersonIcon/>
            </IconButton>
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
