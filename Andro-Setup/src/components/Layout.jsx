import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {

    const theme = createTheme({
        palette: {
          mode: 'light'
        }
    })

  return (
    <>
    <ThemeProvider theme={theme} >
    <Navbar/>
    <div>
        <CssBaseline/>
        <Outlet/>
    </div>
    </ThemeProvider>
    </>
  )
}

export default Layout