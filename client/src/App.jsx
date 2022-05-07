import React from 'react'
// import { hot } from 'react-hot-loader/root'
import AOS from 'aos'
import { AppRoutes } from './Config/routes'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css'
// import 'aos/dist/aos.css'

AOS.init()

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
      secondMain: '#1890ff'
    }
  }
})

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App