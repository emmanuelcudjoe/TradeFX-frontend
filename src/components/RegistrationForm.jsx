import React from 'react'
import {TextField, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ({registrationState, handleSubmit, handleChange}) {
  return (
    <form className='registration-form' onSubmit={handleSubmit}>
        <Typography variant='h4'  sx={{marginBottom: "16px"}}>Register</Typography>
            <div className='form-control'>
                <TextField
                    error={registrationState.errorBagAndMessages.firstNameError}
                    name='firstname'
                    // id="outlined-error-helper-text"
                    label="First Name"
                    // defaultValue="Hello World"
                    helperText={registrationState.errorBagAndMessages.firstNameErrorMessage}
                    sx={{marginBottom: "16px"}}
                    fullWidth
                    onChange={handleChange}
                />
            </div>
        <div className='form-control'>
            <TextField
                error={registrationState.errorBagAndMessages.lastNameError}
                name='lastname'
                // id="outlined-error-helper-text"
                label="Last Name"
                // defaultValue="Hello World"
                helperText={registrationState.errorBagAndMessages.lastNameErrorMessage}
                fullWidth
                sx={{marginBottom: "16px"}}
                onChange={handleChange}

            />
        </div>
        <div className='form-control'>
            <TextField
                error={registrationState.errorBagAndMessages.emailError}
                name='email'
                // id="outlined-error-helper-text"
                label="Email"
                // defaultValue="Hello World"
                helperText={registrationState.errorBagAndMessages.emailErrorMessage}
                fullWidth
                sx={{marginBottom: "16px"}}
                onChange={handleChange}
            />
        </div>
        <div className='form-control'>
            <TextField
            type='password'
                error={registrationState.errorBagAndMessages.passwordError}
                name='password'
                // id="outlined-error-helper-text"
                label="Password"
                defaultValue={""}
                helperText={registrationState.errorBagAndMessages.passwordErrorMessage}
                fullWidth
                sx={{marginBottom: "16px"}}
                onChange={handleChange}
            />
        </div>
        <div className='form-control'>
            <TextField
                type='password'
                error={registrationState.errorBagAndMessages.passwordError}
                name='confirm-password'
                // id="outlined-error-helper-text"
                label="Confirm Password"
                defaultValue={""}
                helperText={registrationState.errorBagAndMessages.passwordUnMatchedError}
                fullWidth
                sx={{marginBottom: "20px"}}
                onChange={handleChange}
            />
        </div>
        <div>
            <Button type='submit' variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Submit</Button>
        </div>
        <Typography variant='p'  sx={{marginBottom: "16px"}}>
            Already have an account?
            <Link to={"/login"}> Login</Link>
        </Typography>
    </form>
  )
}
