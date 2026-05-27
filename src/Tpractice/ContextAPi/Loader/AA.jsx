import React, { createContext, useState } from 'react'
import BB from './BB'

export const LoadingContext = createContext()
function AA() {
    let [loading,setLoading] = useState(false)

    let startLoading = ()=> setLoading(true)
    let stopLoading = ()=> setLoading(false)
  return (
    <div>
        <LoadingContext.Provider value={{loading,startLoading,stopLoading}}>
            <BB/>
        </LoadingContext.Provider>
    </div>
  )
}

export default AA