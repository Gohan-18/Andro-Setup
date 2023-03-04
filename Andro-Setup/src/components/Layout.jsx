import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {

    const theme = createTheme({
        palette: {
          mode: 'light'
        }
    })

  return (
    <>
    <ThemeProvider theme={theme} >
    <Header/>
    <div>
        <CssBaseline/>
        <Outlet/>
    </div>
    </ThemeProvider>
    </>
  )
}

export default Layout