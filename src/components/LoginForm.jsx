import React from 'react'
import { TextField, Typography, Button, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

export default function ({handleSubmit, handleChange, loginState, isLoggedIn, loader}) {
  return (
    <>
        <form className='registration-form' onSubmit={handleSubmit}>
            <Typography variant='h4'  sx={{marginBottom: "16px"}}>Login</Typography>
            <div className='form-control'>
                <TextField
                    error={loginState.emailError}
                    // id="outlined-error-helper-text"
                    label="Email"
                    name='email'
                    // defaultValue="Hello World"
                    helperText={loginState.emailErrorMessage}
                    fullWidth
                    sx={{marginBottom: "16px"}}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-control'>
                <TextField
                        error={loginState.passwordError}
                    // id="outlined-error-helper-text"
                    label="Password"
                    name="password"
                    type='password'
                    defaultValue={""}
                    helperText={loginState.passwordErrorMessage}
                    fullWidth
                    sx={{marginBottom: "16px"}}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Button type='submit' variant='contained' 
                    disableElevation sx={{width: "100%", marginBottom: "16px", display: "flex", justifyItems: "center"}}>
                    <span style={{justifySelf: "center", display: "inline-block"}}>Submit</span>
                    {!isLoggedIn && loader && <CircularProgress sx={{justifySelf: "flex-end", display: "inline-block", color: "white"}} size={30}/>}
                </Button>
            </div>
            <Typography variant='p'  sx={{marginBottom: "16px"}}>
                Don't have an account?
                <Link to={"/register"}> Register</Link>
            </Typography>
        </form>
    </>
  )
}
