import React from 'react'
import { render } from 'react-dom'

import Inactive from './InActive'
import './index.css'

render(<Inactive />, window.document.querySelector('#app-container'))

if (module.hot) module.hot.accept()
