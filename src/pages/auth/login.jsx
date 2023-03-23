import { Box, Container, Grid, TextField, Typography, Button, Divider, Chip } from '@mui/material'
import React, { useRef, useState, useReducer } from 'react'
import RegistrationPageImage from "../../images/pexels-pixabay-259249.jpg"
import "./auth.css"
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const initialLoginInfo = {
        email: email,
        password: email,
        emailError: false,
        passwordError: false,
        emailErrorMessage: "",
        passwordErrorMessage: ""
    }
    const [loginState, dispatch] = useReducer(reducer, initialLoginInfo);

    function validateLoginInfo(inputState){
        const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {email, password} = inputState;

        let sanitizedEmail = email.trim()
        let sanitizedPassword = password.trim()
        if (emailRegx.test(sanitizedEmail)){
           inputState = {...inputState, email: sanitizedEmail, emailError: false, emailErrorMessage: ""}
        } else {
           inputState = {...inputState, email: sanitizedEmail, emailError: true, emailErrorMessage: "Invalid email entered"}
        }

        if (password.length === 0 || password === ""){
           inputState = {...inputState, password: sanitizedPassword, passwordError: true, passwordErrorMessage: "Invalid password entered"}
        } else {
           inputState = {...inputState, password: sanitizedPassword, passwordError: false, passwordErrorMessage: ""}
        }

        console.log("Input state from validator ", inputState)
        return inputState
        
    }

    function submitLoginInfo(userLoginState){
        if (!userLoginState.emailError && !userLoginState.passwordError){
            console.log(userLoginState.email, userLoginState.password)
            console.log("Submiting User data")
        } else {
            console.log("Error")
            console.log("Failed to submit User data")
        }
    }


    function reducer(state = {}, action) {
        let inputState = {...state}
        switch (action.type) {
            case "setPassword":
            return inputState = {...inputState, password: action.payload}
          case "setEmail":
            return inputState = {...inputState, email: action.payload}
          case 'validateLoginInfo':
          
            if (email.length === 0 || email === ""){
                // state.emailError = true
                // state.emailErrorMessage = "Email cannot be empty"
                inputState = {...inputState, emailError: true, emailErrorMessage: "Email cannot be empty"}
            }
            if (password.length === 0 || password === ""){
                inputState = {...inputState, passwordError: true, passwordErrorMessage: "Password cannot be empty"}
            }
            if (email.length){
                inputState = {...inputState, emailError: false, emailErrorMessage: ""}
            }
            if (password.length){
                inputState =  {...inputState, passwordError: false, passwordErrorMessage: ""}
            }

            inputState = validateLoginInfo(inputState)
            submitLoginInfo(inputState)
            return {...inputState};
          default:
            throw new Error();
        }
      }

    function handleChange(e){

        switch (e.target.name) {
            case "email":
                setEmail(e.target.value)
                dispatch({type: "setEmail", payload: e.target.value})
                return
            case "password":
                setPassword(e.target.value)
                dispatch({type: "setPassword", payload: e.target.value})
                return
            default:
                console.log("No input selected")
        }
    }
    
    function handleSubmit(e){
        e.preventDefault()
    
        dispatch({type: "validateLoginInfo"})

        if (!loginState.emailError && !loginState.passwordError){
            console.log(email, password)
        } else {
            console.log("Error")
        }
    }
  return (
    <Box className='registration-page'>
        <Grid container sx={{height: "100vh"}}>
            <Grid item xs={12} sm={8} md={7} sx={{backgroundColor: "teal", height: "100%"}}>
                <Box className="registration-page-img-container">
                    <div className='registration-page-img-overlay'></div>
                    <img className='registration-page-img' src={RegistrationPageImage} alt='registration-page-img' />
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={5} sx={{backgroundColor: "#fff", height: "100%"}}>
               <Box className="registration-form-container">
                    <Container sx={{padding: "20px"}}>
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
                                />
                            </div>
                            <div className='form-control'>
                                <TextField
                                     error={loginState.passwordError}
                                    // id="outlined-error-helper-text"
                                    label="Password"
                                    name="password"
                                    defaultValue={""}
                                    helperText={loginState.passwordErrorMessage}
                                    fullWidth
                                    sx={{marginBottom: "16px"}}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Button type='submit' variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Submit</Button>
                            </div>
                            <Typography variant='p'  sx={{marginBottom: "16px"}}>
                                Don't have an account?
                                <Link to={"/register"}> Register</Link>
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
