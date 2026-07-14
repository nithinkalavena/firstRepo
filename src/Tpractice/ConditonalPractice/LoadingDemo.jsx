import React, { useState } from 'react'

function LoadingDemo() {
    let [loading,setLoading] = useState(false)
    let fetchData = ()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
  return (
    <div>
        <button onClick={fetchData}>Load Data</button>
        <br /><br />
        {loading ? <h3>Loading...</h3>:<h3>Data Loaded</h3>}
    </div>
  )
}

export default LoadingDemo 