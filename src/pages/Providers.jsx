import { Box, Typography,Container } from '@mui/material'
import React from 'react'
import "./providers.css"
import Provider from '../components/Provider'
import JumotronImage from "../images/jumbo.jpg"
import { getLiquidityProviders } from './PagesUtils'

export default function () {

  const providers = getLiquidityProviders()
  
  return (
    <>
        <Box height={"200px"} className="jumbotron" borderBottom={"1px solid black"}>
            <img className='jumbotron-img' src={JumotronImage} alt='jumbotron-img'/>
            <div className="img-overlay">
                <Typography variant='h2' color={"white"}>TradeFX</Typography>
            </div>
        </Box>
        <Box className="providers" paddingTop={"80px"} minHeight={"600px"}>
            <Container height={"100%"}>
                <Typography variant='h3' textAlign={"center"}>List of Available Liquidity Providers</Typography>
                <Box className="providers-list" height={"100%"} sx={{marginTop: "40px"}}>
                    <Container height={"100%"}>
                        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} justifyItems={"space-between"}>
                            {providers.map((provider, id) => 
                                (<Provider key={id} name={provider.name} image={provider.image} status={provider.status}/>)
                            )}
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Box>  
    </>
  )
}
