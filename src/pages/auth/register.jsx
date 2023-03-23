import { Box, Container, Grid, TextField, Typography, Button, Divider, Chip } from '@mui/material'
import React from 'react'
import RegistrationPageImage from "../../images/pexels-pixabay-259249.jpg"
import "./auth.css"

export default function RegistrationPage() {
  return (
    <Box className='registration-page'>
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={12} sm={8} md={7} sx={{backgroundColor: "teal", height: "100%"}}>
                <Box className="registration-page-img-container">
                    <div className='registration-page-img-overlay overlay'></div>
                    <div className="company-logo-and-text">
                        <Typography variant='h1'>
                            Trade<span style={{color: "#ECC6BB"}}>FX</span>
                        </Typography>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam? Vel eligendi ducimus pariatur quisquam quo cum saepe quia!</p>
                    </div>
                    <img className='registration-page-img' src={RegistrationPageImage} alt='registration-page-img' />
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={5} sx={{backgroundColor: "#fff", height: "100%"}}>
               <Box className="registration-form-container">
                    <Container sx={{padding: "20px"}}>
                        <form className='registration-form'>
                            <Typography variant='h4'  sx={{marginBottom: "16px"}}>Register</Typography>
                            <div className='form-control'>
                                <TextField
                                    error={false}
                                    // id="outlined-error-helper-text"
                                    label="First Name"
                                    // defaultValue="Hello World"
                                    helperText={""}
                                    sx={{marginBottom: "16px"}}
                                    fullWidth
                                    />
                            </div>
                            <div className='form-control'>
                                <TextField
                                    error={false}
                                    // id="outlined-error-helper-text"
                                    label="Last Name"
                                    // defaultValue="Hello World"
                                    helperText={""}
                                    fullWidth
                                    sx={{marginBottom: "16px"}}
                                    />
                            </div>
                            <div className='form-control'>
                                <TextField
                                    error={false}
                                    // id="outlined-error-helper-text"
                                    label="Email"
                                    // defaultValue="Hello World"
                                    helperText={""}
                                    fullWidth
                                    sx={{marginBottom: "16px"}}
                                    />
                            </div>
                            <div className='form-control'>
                                <TextField
                                    error={false}
                                    // id="outlined-error-helper-text"
                                    label="Password"
                                    defaultValue={""}
                                    helperText={""}
                                    fullWidth
                                    sx={{marginBottom: "16px"}}
                                    />
                            </div>
                            <div className='form-control'>
                                <TextField
                                    error={false}
                                    // id="outlined-error-helper-text"
                                    label="Confirm Password"
                                    defaultValue={""}
                                    helperText={""}
                                    fullWidth
                                    sx={{marginBottom: "20px"}}
                                    />
                            </div>
                            <div>
                                <Button variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Submit</Button>
                            </div>
                            <Typography variant='p'  sx={{marginBottom: "16px"}}>
                                Already have an account?
                                <span> Login</span>
                            </Typography>
                        </form>
                        <Divider>
                            <Chip label="OR" />
                        </Divider>
                        <Box sx={{width: "80%", marginTop: "24px", marginLeft: "auto", marginRight: "auto"}}>
                            <div>
                                <Button variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Login with google</Button>
                            </div>
                            <div>
                                <Button variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Login with facebook</Button>
                            </div>
                        </Box>
                    </Container>
               </Box>
            </Grid>
        </Grid>
        {/* <Container sx={{backgroundColor: "red"}} maxWidth="lg">
            <Grid container>
                <Grid item xs={6} md={8} sx={{backgroundColor: "teal", height: "100%"}}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex inventore tenetur laudantium dolorum impedit voluptates modi minima nam quam assumenda laborum tempore 
                        deleniti quia, ipsa totam hic laboriosam amet. Doloremque.</p>
                </Grid>
                <Grid item xs={6} md={4} sx={{backgroundColor: "orange"}}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex inventore tenetur laudantium dolorum impedit voluptates modi minima nam quam assumenda laborum tempore 
                        deleniti quia, ipsa totam hic laboriosam amet. Doloremque.</p>
                </Grid>
            </Grid>
        </Container> */}
    </Box>
  )
}
