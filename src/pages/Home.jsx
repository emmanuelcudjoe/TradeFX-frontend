import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import MenuBar from '../components/MenuBar';
import JumotronImage from "../images/jumbo.jpg"
import Container from '@mui/material/Container';
import "./home.css"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SupportedBanks from '../components/SupportedBanks';


export default function Home() {
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState();
    const [showProvidersButton, setShowProvidersButton] = useState(true)
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        setShowButton(true)
    }, [showButton])
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MenuBar showButton={showButton} showProvidersButton={showProvidersButton} handleClose={handleClose} handleMenu={handleMenu} anchorEl={anchorEl} />
            </Box>
            <Box className="jumbotron" sx={{height: "600px", width: "100%"}}>
                <img className="jumbotron-img" src={JumotronImage} alt={"jumbotron-img"} />
                <div className="img-overlay">
                    {/* <Container> */}
                        <div className='intro-text'>
                            <Typography variant='h2' color="white">
                                Online forex trading with
                                better-than-market
                                conditions
                            </Typography>
                            <Typography variant='p' color="white" sx={{marginTop: "40px", marginBottom: "40px", lineHeight: "20px", display: "inline-block"}}>
                                Kick start your trading journey with us and explore the world of trading with limitless possibilities
                            </Typography>
                            <Button variant="contained" disableElevation sx={{padding: "16px"}} onClick={() => navigate("/providers")}>
                                See Available Providers
                            </Button>
                        </div>
                    {/* </Container> */}
                </div>
            </Box>
            <Box className="feature" height={"400px"}>
                <Container sx={{paddingTop: "30px", paddingBottom: "20px", textAlign: "center"}}>
                    <div className='feature-text'>
                        <Typography variant='h3' display={'block'} marginBottom={"30px"}>Instant Foreign Exchanges, 24/7</Typography>
                        <Typography variant='p' display={'block'} marginBottom={"30px"}>Our withdrawals are carried out in seconds with no manual processing, including on weekends.</Typography>
                        <Typography variant='a' display={'block'}>Learn more about forex trading at TradeFX</Typography>
                    </div>      
                </Container>
            </Box>
            <Box className="supported-banks" marginBottom={"40px"}>
                <Container sx={{paddingTop: "80px"}} marginBottom={"80px"}>
                    <Typography variant='h3' color={"black"} textAlign={"center"}>
                        Banks We Currently Support
                    </Typography>
                </Container>
                <Box marginTop={"80px"}>
                    <SupportedBanks />
                </Box>
            </Box>
        </>
    )
}
 