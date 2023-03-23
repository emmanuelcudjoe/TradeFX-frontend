import { Box, Container, Grid, Divider, Chip } from '@mui/material'
import React, { useState, useReducer } from 'react'
import RegistrationPageImage from "../../images/pexels-pixabay-259249.jpg"
import "./auth.css"
import SocialLogins from '../../components/SocialLogins'
import { isInputEmpty, validateEmail } from '../../utils/validators'
import LoginForm from '../../components/LoginForm'
import FormDivider from '../../components/FormDivider'

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
        const {email, password} = inputState;

        let sanitizedEmail = email.trim()
        let sanitizedPassword = password.trim()
        if (validateEmail(sanitizedEmail)){
           inputState = {...inputState, email: sanitizedEmail, emailError: false, emailErrorMessage: ""}
        } else {
           inputState = {...inputState, email: sanitizedEmail, emailError: true, emailErrorMessage: "Invalid email entered"}
        }

        if (isInputEmpty(sanitizedPassword)){
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
                        <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} loginState={loginState} />
                        <FormDivider />
                        <SocialLogins></SocialLogins>
                    </Container>
               </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
