import { Box, Container, Grid, TextField, Typography, Button, Divider, Chip } from '@mui/material'
import React, { useReducer} from 'react'
import RegistrationPageImage from "../../images/pexels-pixabay-259249.jpg"
import "./auth.css"
import { Link } from 'react-router-dom'

export default function RegistrationPage() {
    const initialRegistrationInfo = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorBagAndMessages: {
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            passwordError: false,
            firstNameErrorMessage: "",
            emailErrorMessage: "",
            passwordErrorMessage: "",
            lastNameErrorMessage: "",
            passwordUnMatchedError: ""
        }
    }

    function validateRegistrationInfo(inputState){
        const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const {firstName, lastName, email, password, confirmPassword} = inputState;
        let sanitizedEmail = email.trim();
        let sanitizedPassword = password.trim();
        let sanitizedConfirmPassword = confirmPassword.trim();


        if (firstName.length === 0 || firstName === ""){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, firstNameError: true, firstNameErrorMessage: "firstName cannot be empty"}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, firstNameError: false, firstNameErrorMessage: ""}}
        }

        if (lastName.length === 0 || lastName === ""){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, lastNameError: true, lastNameErrorMessage: "LastName cannot be empty"}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, lastNameError: false, lastNameErrorMessage: ""}}
        }

        if (emailRegx.test(sanitizedEmail)){
           inputState = {...inputState, email: sanitizedEmail, errorBagAndMessages: {...inputState.errorBagAndMessages, emailError: false, emailErrorMessage: ""}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, emailError: true, emailErrorMessage: "Invalid email entered"}}
        }

        if (sanitizedPassword.length === 0 || sanitizedPassword === ""){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: true, passwordErrorMessage: "Password cannot be empty"}}
        } else if (password.length < 6){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: true, passwordErrorMessage: "Password cannot be less than 6 characters"}}
        } else if (sanitizedPassword.length > 6 && sanitizedPassword !== sanitizedConfirmPassword){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: true, passwordErrorMessage: "Password fields do not match", passwordUnMatchedError: "Password fields do not match"}}
        }else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: false, passwordUnMatchedError: "", passwordErrorMessage: ""}}
        }

        console.log("Input state from validator ", inputState)
        return inputState
        
    }

    function handleChange(e){

        switch (e.target.name) {
            case "firstname":
                dispatch({type: "setFirstName", payload: e.target.value})
                return
            case "lastname":
                dispatch({type: "setLastName", payload: e.target.value})
                return
            case "email":
                dispatch({type: "setEmail", payload: e.target.value})
                return
            case "password":
                dispatch({type: "setPassword", payload: e.target.value})
                return
            case "confirm-password":
                dispatch({type: "setConfirmPassword", payload: e.target.value})
                return
            default:
                console.log("No input selected")
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        dispatch({type: "validateRegistrationInfo"})
    }

    function submitRegistrationInfo(userRegistrationInfo){
        if (
            userRegistrationInfo.errorBagAndMessages.firstNameError ||
            userRegistrationInfo.errorBagAndMessages.lastNameError ||
            userRegistrationInfo.errorBagAndMessages.emailError ||
            userRegistrationInfo.errorBagAndMessages.passwordError 
            ){
                console.log("Error")
                return
        }

        console.log("Submitting User info")
    }

    function reducer(state = {}, action) {
        let inputState = {...state}
        switch (action.type) {
            case "setFirstName":
                return inputState = {...inputState, firstName: action.payload}
            case "setLastName":
                return inputState = {...inputState, lastName: action.payload}
            case "setEmail":
                return inputState = {...inputState, email: action.payload}
            case "setPassword":
                return inputState = {...inputState, password: action.payload}
            case "setConfirmPassword":
                return inputState = {...inputState, confirmPassword: action.payload}
            case 'validateRegistrationInfo':
                inputState = validateRegistrationInfo(inputState)
                submitRegistrationInfo(inputState)
                return {...inputState};
            default:
                throw new Error();
        }
      }

    const [registrationState, dispatch] = useReducer(reducer, initialRegistrationInfo);
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
    </Box>
  )
}
