import React, { useEffect, useState } from 'react';
import MenuBar from '../components/MenuBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import { loadUserDataFromStorage } from '../utils/cacheUtils';
import { parseJwt } from '../utils/authUtils';

export default function UserFX() {
  const [showButton, setShowButton] = useState(false);
  const [showProvidersButton, setShowProvidersButton] = useState(true);
  const [transactions, setTransactions] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setLoader(true)
    const token = loadUserDataFromStorage().token;
    const userId = parseJwt(token).sub.split(",")[0]
    console.log(userId)
    axios.get(`http://www.localhost:8080/api/v1/get-user-transactions/${userId}`, {
      headers: {
        "Authorization": `bearer ${loadUserDataFromStorage().token}`
      }
    })
      .then(res => {
        console.log(res.data)
        setTransactions(res.data)
        setLoader(false)
      })
      .catch(err => {
        console.log(err)
        setLoader(false)

      })
  }, [])

  useEffect(() => {
    setShowButton(false)
  }, [showButton])

  return (
    <>
        <MenuBar showButton={showButton} showProvidersButton={showProvidersButton} />
        <Box sx={{marginTop: "40px"}}>
            <Container>
                <Typography variant='h5' sx={{marginBottom: "20px"}}>Recent Transactions</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 950 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Transaction Id</TableCell>
                            <TableCell align="center">Provider</TableCell>
                            <TableCell align="center">Buying Currency</TableCell>
                            <TableCell align="center">Selling Currency</TableCell>
                            <TableCell align="center">Requested Amount</TableCell>
                            <TableCell align="center">Current Rate</TableCell>
                            <TableCell align="center">Receipient Bank</TableCell>
                            <TableCell align="center">Transaction Status</TableCell>
                            <TableCell align="center">Date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {!!transactions.length && transactions.map((transaction) => (
                            <TableRow
                            key={transaction.transactionId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {transaction.transactionId}
                            </TableCell>
                            <TableCell align="center">{transaction.provider}</TableCell>
                            <TableCell align="center">{"USD($)"}</TableCell>
                            <TableCell align="center">{"GHS(₵)"}</TableCell>
                            <TableCell align="center">{transaction.requestedAmount}</TableCell>
                            <TableCell align="center">10.3</TableCell>
                            <TableCell align="center">{transaction.bankName}</TableCell>
                            <TableCell align="center"><em>{transaction.transactionStatus}</em></TableCell>
                            <TableCell align="center">{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {!loader && !transactions.length && (
                  <>
                    <Box sx={{marginTop: "10px"}}>
                      <Paper elevation={0}>
                        <Container sx={{paddingTop: "20px", textAlign: "center"}}>
                          <Typography variant='h3' sx={{color: "rgba(0,0,0,.4)"}}>No data to display</Typography>
                        </Container>
                      </Paper>
                    </Box>
                  </>
                )}
                {loader && (
                  <>
                    <Box sx={{marginTop: "10px"}}>
                      <Paper elevation={0}>
                        <Container sx={{paddingTop: "20px", textAlign: "center"}}>
                          <CircularProgress size={60} thickness={4}/>
                        </Container>
                      </Paper>
                    </Box>
                  </>
                )}
            </Container>
        </Box>
    </>
  )
}
