import React from 'react'
import { render } from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Popup from './Popup'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F64372',
    },
    secondary: {
      main: '#4B5BE6',
    },
  },
})

render(
  <ThemeProvider theme={theme}>
    <Popup />
  </ThemeProvider>,

  window.document.querySelector('#app-container')
)

if (module.hot) module.hot.accept()
