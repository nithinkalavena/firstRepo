import { useState } from 'react'
import './App.css'
import One from './Practice2/07-07-26/EventHandling/ButtonClick'
import { Provider } from 'react-redux'
import store from './Practice2/06-07-26/ReduxCounter/App'

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