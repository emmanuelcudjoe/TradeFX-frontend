import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { clearUserData } from '../utils/cacheUtils';

export default function MenuBar({showButton = false, showProvidersButton, handleClose, handleMenu, anchorEl}) {
  const navigate = useNavigate();
  const [showProviderButton, setShowProviderButton] = useState(true)


  return (
    <>
      <AppBar position="static" elevation={0} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Button variant='contained' onClick={() => navigate("/home")}> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button variant='contained' onClick={() => navigate("/home")} disableElevation> 
                TradeFX
              </Button>
            </Typography>
          {/* </Button> */}
          {(
            <div>
                {(showButton ? true: false) && (<Button variant='outlined' color='inherit' sx={{marginRight: "20px"}} disableElevation onClick={() => navigate("/my-fx-account")}>
                    My FX Account
                </Button>)}
                {showProvidersButton && <Button variant='outlined' color='inherit' disableElevation onClick={() => navigate("/providers")}>
                    Available Providers
                </Button>}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={(e) => {
                  handleClose(e)
                  clearUserData() ? navigate("/") : navigate("/home")
                }}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}
