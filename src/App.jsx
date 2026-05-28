import { useState } from 'react'
import './App.css'
import One from './Practice2/28-05-26/UserNameValidation/Username'
import { Provider } from 'react-redux'
import store from './Practice2/ToolkitPractice/Store'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Provider store={store}> */}
    <One/>
    {/* </Provider> */}
    </>
  )
}

export default App