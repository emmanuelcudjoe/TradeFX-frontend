import React from 'react'
import { loadUserDataFromStorage } from '../utils/cacheUtils'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  let userData = loadUserDataFromStorage()

  if (!!userData){
    return (
        <>
            children
        </>
    )
  }

  return (
    <>
        <Navigate to={"/login"} />
    </>
  )


}
