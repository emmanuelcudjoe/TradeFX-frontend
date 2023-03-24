import { Box, Container, Grid, TextField, Typography, Button, Divider, Chip } from '@mui/material'
import React, { useReducer} from 'react'
import RegistrationPageImage from "../../images/pexels-pixabay-259249.jpg"
import "./auth.css"
import { isInputEmpty, validateEmail } from '../../utils/validators'
import RegistrationForm from '../../components/RegistrationForm'
import SocialLogins from '../../components/SocialLogins'
import FormDivider from '../../components/FormDivider'
import axios from "axios"

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

    const [registrationState, dispatch] = useReducer(reducer, initialRegistrationInfo);

    function validateRegistrationInfo(inputState){
        const {firstName, lastName, email, password, confirmPassword} = inputState;
        let sanitizedEmail = email.trim();
        let sanitizedPassword = password.trim();
        let sanitizedConfirmPassword = confirmPassword.trim();


        if (isInputEmpty(firstName)){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, firstNameError: true, firstNameErrorMessage: "firstName cannot be empty"}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, firstNameError: false, firstNameErrorMessage: ""}}
        }

        if (isInputEmpty(lastName)){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, lastNameError: true, lastNameErrorMessage: "LastName cannot be empty"}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, lastNameError: false, lastNameErrorMessage: ""}}
        }

        if (validateEmail(sanitizedEmail)){
           inputState = {...inputState, email: sanitizedEmail, errorBagAndMessages: {...inputState.errorBagAndMessages, emailError: false, emailErrorMessage: ""}}
        } else {
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages, emailError: true, emailErrorMessage: "Invalid email entered"}}
        }

        if (isInputEmpty(sanitizedPassword)){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: true, passwordErrorMessage: "Password cannot be empty", passwordUnMatchedError: ""}}
        } else if (password.length < 6){
            inputState = {...inputState, errorBagAndMessages: {...inputState.errorBagAndMessages,passwordError: true, passwordErrorMessage: "Password cannot be less than 6 characters", passwordUnMatchedError: ""}}
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
                console.log("Error");
                return;
        } 

        let {firstName, lastName, email, password} = userRegistrationInfo

        
        axios.post("http://www.localhost:8080/api/v1/register", {firstName, lastName, email, password})
        .then(res => console.log(res.data))
        .then(err => console.log(err))
        console.log("Submitting User info")
    }

    function reducer(state, action) {
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
                        <RegistrationForm handleChange={handleChange} handleSubmit={handleSubmit} registrationState={registrationState}/>
                        <FormDivider />
                        <SocialLogins />
                    </Container>
               </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
