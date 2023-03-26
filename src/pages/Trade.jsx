import React, { useEffect, useState } from 'react';
import MenuBar from '../components/MenuBar';
import  Box  from '@mui/material/Box';
import { getLiquidityProviders } from './PagesUtils';
import { useParams } from 'react-router-dom';
import { Container, List, ListItem, Paper, Typography } from '@mui/material';
import Banner from "../images/jumbo.jpg"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import "./Trade.css"
import TradeModal from '../components/TradeModal';

export default function TradeProvider() {
  const [showButton, setShowButton] = useState(true)
  const [showProvidersButton, setShowProvidersButton] = useState(false)
  const [providerName, setProviderName] = useState("")
  const [open, setOpen] = useState(false)

  const params = useParams();

  const providers = getLiquidityProviders()

  useEffect(() => {
    setShowButton(true)
    setShowProvidersButton(false)
    setProviderName(params.providerName)
    console.log(params)
  }, [])

  return (
    <>
      <TradeModal open={open} setOpen={setOpen} />
      <MenuBar showButton showProvidersButton={showProvidersButton} />
      <Box sx={{minHeight: "100vh", backgroundColor: "#e0dfdf69", paddingBottom: "40px"}}>
        <Box sx={{height: "300px", position: "relative"}}>
          <img className="trade-banner" src={Banner} />
          <div className='trade-banner-overlay'>
            <Container sx={{padding: "60px", textAlign: "center", display: "flex", justifyContent: "center"}}>
              {
                providers
                  .filter((provider) => provider.name.toLowerCase() === providerName.toLowerCase())
                  .map((matchedProvider, id) => {
                    return (
                      <>
                        <Box sx={{display: "flex", flexDirection: "column", width: "120px", alignItems: "center"}}>
                          <Paper sx={{padding: "20px", borderRadius: "5px"}}>
                            <img className='provider-banner' key={id} src={matchedProvider.image} alt={matchedProvider.name}/>
                            <Typography variant='h4' sx={{color: '#000'}}>{providerName}</Typography>
                          </Paper>
                        </Box>
                      </>
                    )
                  }
                )
              }
            </Container>
          </div>
        </Box>
        <Box className="info" sx={{marginTop: "40px"}}>
          <Container sx={{display: "flex", justifyContent: "space-evenly", fontSize: "25px"}}>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Supported Currencies</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>50+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Trade Partners</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>300+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Successful Transaction</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>2500+</Typography>
            </Paper>
            <Paper sx={{padding: "20px", textAlign: "center"}} elevation={0}>
              <Typography variant='h5'>Failed Transaction</Typography>
              <Typography sx={{marginTop: "5px", color: "GrayText", fontWeight: "bold"}}>5</Typography>
            </Paper>
          </Container>
        </Box>
        <Box sx={{marginTop: "80px"}}>
          <Container>
            <Grid container spacing={6}>
              <Grid item xs={8}>
                <Paper elevation={0} sx={{padding: "40px"}}>
                  <Typography variant='h4'>
                    Trade With Us With Off-the-Charts-Benefits
                  </Typography>
                  <Typography variant='p' 
                      sx={{marginTop: "30px", display: "inline-block", fontSize: "18px", letterSpacing: "1px", marginBottom: "30px"}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Laboriosam qui maxime ullam numquam? Necessitatibus doloribus pariatur sed quaerat, quas iusto. 
                    At praesentium, deserunt voluptatibus ea illo incidunt quae odit maxime.
                  </Typography>
                  <Button variant='contained' disableElevation onClick={() => setOpen(true)}>Trade</Button>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={0} sx={{padding: "40px"}}>
                  <Typography variant='h5'>Available Currencies</Typography>
                  <Box>
                    <List>
                      <ListItem sx={{background: "gray"}}>
                        <Typography variant='p'>Ghana Cedis (GHS)</Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='p'>Ghana Cedis (GHS)</Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='p'>Ghana Cedis (GHS)</Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
