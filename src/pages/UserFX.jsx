import React, { useEffect, useState } from 'react';
import MenuBar from '../components/MenuBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, Typography } from '@mui/material';
import axios from 'axios';
import { loadUserDataFromStorage } from '../utils/cacheUtils';

export default function UserFX() {
  const [showButton, setShowButton] = useState(false);
  const [showProvidersButton, setShowProvidersButton] = useState(true);
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    axios.get("http://www.localhost:8080/api/v1/get-all-transactions", {
      headers: {
        "Authorization": `bearer ${loadUserDataFromStorage().token}`
      }
    })
      .then(res => {
        console.log(res.data)
        setTransactions(res.data)
      })
      .catch(err => {
        console.log(data)
      })
  }, [])
  

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Transaction Id</TableCell>
                            <TableCell align="center">Provider</TableCell>
                            <TableCell align="center">Buying</TableCell>
                            <TableCell align="center">Selling</TableCell>
                            <TableCell align="center">Current Rate</TableCell>
                            <TableCell align="center">Receipient Bank</TableCell>
                            <TableCell align="center">Transaction Status</TableCell>
                            <TableCell align="center">Date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {transactions.map((transaction) => (
                            <TableRow
                            key={transaction.transactionId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {transaction.transactionId}
                            </TableCell>
                            <TableCell align="center">{transaction.provider}</TableCell>
                            <TableCell align="center">{""}</TableCell>
                            <TableCell align="center">{""}</TableCell>
                            <TableCell align="center">10.3</TableCell>
                            <TableCell align="center">{transaction.bankName}</TableCell>
                            <TableCell align="center"><em>{transaction.transactionStatus}</em></TableCell>
                            <TableCell align="center">{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    </>
  )
}
