import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

export default function () {
  return (
    <>
        <footer>
            <Box sx={{backgroundColor: "rgba(0,0,0,.2)"}}>
                <Container sx={{padding: "60px"}}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Typography variant='h6'>&copy; {new Date().getFullYear()} CopyRight. All rights reserved</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Typography variant='h6' sx={{display: "flex", justifyItems: "space-between"}}>
                                    <span>Privacy Policy</span>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <span>Cookie Policy</span>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Typography variant='h6'>
                                    <span>info@tradFX.com</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    </>
  )
}
