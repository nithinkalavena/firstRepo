import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './Practice2/06-07-26/ReduxCounter/App'
import One from './Practice2/23-07-26LazyLoading/Lazy3/Lazy3'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Provider store={store}> */}    
      <One/>
    {/* </Provider> */}
    {/* </BrowserRouter> */}
    </> 
  )
}

export default App