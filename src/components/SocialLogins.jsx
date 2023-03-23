import React from 'react'
import { Box, Button } from '@mui/material'

export default function 
() {
  return (
    <>
        <Box sx={{width: "80%", marginTop: "24px", marginLeft: "auto", marginRight: "auto"}}>
            <div>
                <Button variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Login with google</Button>
            </div>
            <div>
                <Button variant='contained' disableElevation sx={{width: "100%", marginBottom: "16px"}}>Login with facebook</Button>
            </div>
        </Box>
    </>
  )
}
