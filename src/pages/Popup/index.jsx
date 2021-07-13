import React from 'react'
import { render } from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

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

import Popup from './Popup'
import './index.css'

render(
  <ThemeProvider theme={theme}>
    <Popup />
  </ThemeProvider>,

  window.document.querySelector('#app-container')
)

if (module.hot) module.hot.accept()
