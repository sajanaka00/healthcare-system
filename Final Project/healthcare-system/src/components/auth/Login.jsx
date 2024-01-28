import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeroBg from '../../assets/images/login-bg.jpg';
import '../../styles/login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });

      console.log(response.data);
      navigate('/')

    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={HeroBg} className="login-image" alt='login-img'/>
      </div>
      <div className="form-container">
        <h2>Signin to your Account</h2>
        <TextField 
          id="standard-basic" 
          label="Username" 
          variant="standard" 
          onChange={handleUsernameChange}
          sx={{ input: { 
            color: 'white',
            fontFamily: 'PT Serif, serif' 
          }}}
          InputLabelProps={{style: {color: '#2196f3'}}}
          style={{ width: '100%', paddingBottom: '25px' }}
          required
        />
        <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          onChange={handlePasswordChange}
          sx={{ input: { 
            color: 'white',
            fontFamily: 'PT Serif, serif' 
          }}}
          InputLabelProps={{style: {color: '#2196f3'}}} 
          style={{ width: '100%', paddingBottom: '25px' }}
          type='password'
          required
        />
        <p className='signup-msg'>
          Do not have an Account?  
          <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
        </p>
        <Button className='button' color='inherit' onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
