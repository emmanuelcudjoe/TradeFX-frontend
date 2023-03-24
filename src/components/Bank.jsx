import { Paper } from '@mui/material'
import React from 'react'

export default function Bank({bankInfo}) {
  return (
    <>
        <Paper elevation={1}>
            <img height={80} src={bankInfo.link} alt={bankInfo.altText}/>
        </Paper>
    </>
  )
}
