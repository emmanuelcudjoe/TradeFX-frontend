import React from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Provider({name, image, status}) {
    const navigate = useNavigate();

    return (
      <Card sx={{ display: 'flex', flexDirection: 'row-reverse', width: "30%", marginBottom: "40px", backgroundColor: "#e4e2e29a", padding: "5px"}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {status.toLowerCase() === "available" ? "trading": "unavailable"}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', pb: 1, justifyItems: "flex-end" }}>
            <Button variant="contained" disableElevation onClick={() => navigate(`/provider/${name}`)}>View More</Button>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 130, justifySelf: "flex-end", display: "block", marginRight: "auto" }}
          image={image}
          alt={name}
          
        />
      </Card>
    )
}
