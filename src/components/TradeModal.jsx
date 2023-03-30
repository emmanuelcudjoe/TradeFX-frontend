import React, { useReducer } from 'react'
import  Modal  from '@mui/material/Modal'
import  Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import  Paper  from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem';
import { Button, Container } from '@mui/material'
import { loadUserDataFromStorage } from '../utils/cacheUtils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function ({open, setOpen, providerName}) {
    const notify = (msg) => toast(msg);
    const initialTransactionData = {
        buyingCurrency: "",
        sellingCurrency: "",
        accountNumber: "",
        accountName: "",
        branchName: "",
        contact: "",
        amount: 0,
        bank: ""
    }

    const [userTransactionData, dispatch] = useReducer(reducer, initialTransactionData);

    function reducer(state, action){
        switch(action.type){
            case "setBuyingCurrency":
                return state = {...state, buyingCurrency: action.payload}
            case "setSellingCurrency":
                return state = {...state, sellingCurrency: action.payload}
            case "setAccountNumber":
                console.log(state)
                return state = {...state, accountNumber: action.payload}
            case "setAccountName":
                return state = {...state, accountName: action.payload}
            case "setBranchName":
                return state = {...state, branchName: action.payload}
            case "setContact":
                return state = {...state, contact: action.payload}
            case "setBank":
                return state = {...state, bank: action.payload}
            case "setAmount":
                return state = {...state, amount: parseFloat(action.payload)}
            default:
                return state = {...state}
        }
    }


    function handleChange(e){
        let inputValue = e.target.value
        let inputName = e.target.name
        console.log(inputValue)
        switch (inputName) {
            case "buyingCurrency":
                dispatch({type: "setBuyingCurrency", payload: inputValue})
                console.log(inputValue)
                return
            case "sellingCurrency":
                dispatch({type: "setSellingCurrency", payload: inputValue})
                console.log(inputValue)
                return
            case "accountNumber":
                dispatch({type: "setAccountNumber", payload: inputValue})
                console.log(inputValue)
                return
            case "accountName":
                dispatch({type: "setAccountName", payload: inputValue})
                console.log(inputValue)
                return
            case "branchName":
                dispatch({type: "setBranchName", payload: inputValue})
                console.log(inputValue)
                return 
            case "contact":
                dispatch({type: "setContact", payload: inputValue})
                console.log(inputValue)
                console.log(userTransactionData)
                return
            case "bank":
                dispatch({type: "setBank", payload: inputValue})
                console.log(inputValue)
                console.log(userTransactionData)
                return
            case "amount":
                dispatch({type: "setAmount", payload: inputValue})
                console.log(inputValue)
                console.log(userTransactionData)
                return
            default:
                dispatch()
                return
        }
    }

    const buyingCurrencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
        {
          value: 'GHS',
          label: '₵',
        },
      ];
    const sellingCurrencies = [
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'GHS',
          label: '₵',
        },
      ];

    function handleSubmit(e){
        e.preventDefault()
        console.log(userTransactionData, loadUserDataFromStorage().email)

        axios.post("http://www.localhost:8080/api/v1/buy-fx", 
            {...userTransactionData, userEmail: loadUserDataFromStorage().email, providerName},
            {
                headers: {
                    "Authorization": `bearer ${loadUserDataFromStorage().token}`
                }
            }
        ).then(res => {
            if (res.data && res.data.status >= 200 && res.data.status < 400){
                handleClose()
                // notify("Request sent successfully. You will receive an SMS shortly")
                toast.success("Request sent successfully. You will receive an SMS shortly", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            } else {
                throw new Error(res.data.message)
            }
            
        }).catch(err => {
            handleClose()
            // notify("Sorry, transaction could not be performed please try again later")
            toast.error(err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
  
  function handleClose(){
    setOpen(false)
  }
  return (
    <>
        <ToastContainer />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{width: "35%", marginRight: "auto", marginLeft: "auto", marginTop: "50px"}}
            >
            <Paper>
                <Container sx={{p: 5}}>
                    <Box 
                        onSubmit={(e) => handleSubmit(e)}
                        component={"form"}  sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}>
                        <div className='form-control' style={{width: "100%", display: "flex"}}>
                            <TextField
                                id="outlined-select-currency"
                                name='buyingCurrency'
                                select
                                label="Buying currency"
                                defaultValue="EUR"
                                helperText="Please select buying currency"
                                onChange={(e) => handleChange(e)}
                                sx={{width: "80%", marginLeft: "auto", marginRight: "auto"}}
                                required
                            >
                            {buyingCurrencies.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        {/* </div>
                        <div className='form-control' style={{width: "100%"}}> */}
                            <TextField
                                id="outlined-select-currency"
                                select
                                name="sellingCurrency"
                                label="Selling currency"
                                defaultValue="EUR"
                                helperText="Please select selling currency"
                                onChange={handleChange}
                                sx={{width: "80%", marginLeft: "auto", marginRight: "100%"}}
                                required
                            >
                            {sellingCurrencies.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                        <TextField
                                id="outlined-select-currency"
                                select
                                name="bank"
                                label="Bank"
                                defaultValue=""
                                onChange={handleChange}
                                helperText="Please select your bank"
                                sx={{width: "80%", marginLeft: "auto", marginRight: "100%"}}
                                required
                            >
                            {["Fidelity", "Zenith", "Calbank", "Access Bank"].map((option) => (
                                <MenuItem key={option} value={option} >
                                    {option}
                                </MenuItem>
                            ))}
                            </TextField>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField required name="accountNumber" id="outlined-basic" label="Enter Account Number" variant="outlined" onChange={handleChange} sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField required name="amount" id="outlined-basic" label="Enter Amount($) to buy" variant="outlined" onChange={handleChange} sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField required name="accountName" id="outlined-basic" label="Enter Account Name" variant="outlined" onChange={handleChange}  sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField required name="branchName" id="outlined-basic" label="Enter Branch Name" variant="outlined" onChange={handleChange} sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField required name="contact" id="outlined-basic" label="Enter Your Contact" variant="outlined" onChange={handleChange}  sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <Button type="submit" variant='contained' sx={{width: "96%", margin: "auto"}} disableElevation>Submit</Button>
                        </div>
                    </Box>
                </Container>
            </Paper>
        </Modal>
    </>
  )
}
