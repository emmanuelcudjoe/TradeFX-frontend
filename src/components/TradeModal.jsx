import React, { useReducer } from 'react'
import  Modal  from '@mui/material/Modal'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import  Paper  from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem';
import { Button, Container } from '@mui/material'

export default function ({open, setOpen}) {
    const initialTransactionData = {
        buyingCurrency: "",
        sellingCurrency: "",
        accountNumber: "",
        accountName: "",
        branchName: "",
        contact: ""
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
        }
    }

    const currencies = [
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
      ];

    function handleSubmit(e){
        e.preventDefault()
        console.log(userTransactionData)
    }
  
  function handleClose(){
    setOpen(false)
  }
  return (
    <>
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
                            >
                            {currencies.map((option) => (
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
                                onBlur={handleChange}
                                sx={{width: "80%", marginLeft: "auto", marginRight: "100%"}}
                            >
                            {currencies.map((option) => (
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
                                onBlur={handleChange}
                                helperText="Please select your bank"
                                sx={{width: "80%", marginLeft: "auto", marginRight: "100%"}}
                            >
                            {["Fidelity", "Zenith", "Calbank", "Access Bank"].map((option) => (
                                <MenuItem key={option} value={option} >
                                {option}
                                </MenuItem>
                            ))}
                            </TextField>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField name="accountNumber" id="outlined-basic" label="Enter Account Number" variant="outlined" onBlur={handleChange} sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField name="accountName" id="outlined-basic" label="Enter Account Name" variant="outlined" onBlur={handleChange}  sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField name="branchName" id="outlined-basic" label="Enter Branch Name" variant="outlined" onBlur={handleChange} sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
                        </div>
                        <div className='form-control' style={{width: "100%"}}>
                            <TextField name="contact" id="outlined-basic" label="Enter Your Contact" variant="outlined" onBlur={handleChange}  sx={{width: "95%", marginLeft: "auto", marginRight: "100%"}}/>
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
