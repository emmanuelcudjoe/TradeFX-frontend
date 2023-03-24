import { Box, Typography,Container } from '@mui/material'
import React from 'react'
import "./providers.css"
import CediHouse from "../images/providers/cedi-house.png"
import DollarTux from "../images/providers/dollar-tux.png"
import EuroSwap from "../images/providers/euro-swap.png"
import MoneyFlash from "../images/providers/money-flash.png"
import MoneyShazam from "../images/providers/money-shazam.jpg"
import ProtechTraders from "../images/providers/protect-traders.gif"
import Tencel from "../images/providers/Tencel.png"
import TradeCreatives from "../images/providers/trade-creatives.png"
import YellowTrades from "../images/providers/yellow-trades.jpg"
import Provider from '../components/Provider'

import JumotronImage from "../images/jumbo.jpg"

export default function () {

  const providers = [
    {
        name: "Cedi House",
        image: CediHouse,
        status: "Available",
    },
    {
        name: "Dollar Tux",
        image: DollarTux,
        status: "Available",
    },
    {
        name: "EuroSwap",
        image: EuroSwap,
        status: "Available",
    },
    {
        name: "MoneyFlash",
        image: MoneyFlash,
        status: "Available",
    },
    {
        name: "MoneyShazam",
        image: MoneyShazam,
        status: "Available",
    },
    {
        name: "ProtechTraders",
        image: ProtechTraders,
        status: "Available",
    },
    {
        name: "Tencel",
        image: Tencel,
        status: "Available",
    },
    {
        name: "TradeCreatives",
        image: TradeCreatives,
        status: "Available",
    },
    {
        name: "YellowTrades",
        image: YellowTrades,
        status: "Available",
    },
  ]
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
