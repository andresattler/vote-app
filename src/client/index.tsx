import * as React from 'react'
import { render } from 'react-dom'

import { Hello } from './components/Hello'

render(<Hello compiler='Typescript' framework='React'/>, document.getElementById('root'))

