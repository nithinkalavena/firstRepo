import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './Practice2/06-07-26/ReduxCounter/App'
import One from './Practice2/17-07-26/UseRef/StateVsUseRef'

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