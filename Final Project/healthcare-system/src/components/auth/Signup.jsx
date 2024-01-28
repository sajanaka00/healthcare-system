import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeroBg from '../../assets/images/signup-bg.jpg';
import '../../styles/signup.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMatching, setIsMatching] = useState(true);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatching(e.target.value === password)
  }

  const isFormValid = username && password && confirmPassword && isMatching;

  const handleCreateAccount = async () => {
    if (isFormValid) {
      try {
        // making a POST request to Express API
        const response = await axios.post('http://localhost:3001/api/signup', {
          username,
          password,
        });

        console.log(response.data);
        navigate('/');

      } catch (error) {
        console.error('Error creating account:', error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Create your Account</h2>
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
          style={{ width: '100%', paddingBottom: '15px' }}
          required
        />
        <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          type='password'
          value={password}
          onChange={handlePasswordChange}
          sx={{ input: { 
            color: 'white',
            fontFamily: 'PT Serif, serif' 
          }}} 
          InputLabelProps={{style: {color: '#2196f3'}}}
          style={{ width: '100%', paddingBottom: '15px' }}
          required
        />
        <TextField 
          id="standard-basic" 
          label="Confirm Password" 
          variant="standard" 
          type='password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!isMatching}
          helperText={!isMatching && "Passwords do not match"}
          sx={{
            input: { 
              color: 'white',
              fontFamily: 'PT Serif, serif' 
            },
            '& .MuiFormHelperText-root': {
              fontFamily: 'PT Serif, serif',
              marginTop: '5px'
            },
          }} 
          InputLabelProps={{style: {color: '#2196f3'}}}
          style={{ width: '100%', paddingBottom: '15px' }}
          required
        />
        <p className='signup-msg'>
          Already have an Account?  
          <NavLink to="/login" className="nav-link">Login here</NavLink>
        </p>
        <Button className="button" color="inherit" onClick={handleCreateAccount} disabled={!isFormValid}>
          Create Account
        </Button>
      </div>
      <div className="image-container">
        <img src={HeroBg} className="login-image" alt='login-img'/>
      </div>
    </div>
  )
}

export default Signup
