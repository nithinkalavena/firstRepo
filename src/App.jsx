import { useState } from 'react'
import './App.css'
import One from './Practice2/27-05-26/ThemeChanger'
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