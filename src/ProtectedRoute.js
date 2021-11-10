import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Dashboard from './views/dashboard/Dashboard'

const ProtectedRoute = (props) => {
  const isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }
  return <Dashboard {...props} />
}

export default ProtectedRoute
