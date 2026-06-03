import { useState } from 'react'
import './App.css'
import One from './Practice2/03-06-26/Charcount'
import { Provider } from 'react-redux'
import store from './Practice2/01-06-26/DynamicSearch/Store'

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