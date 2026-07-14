import React, { useEffect, useState } from 'react'

function useWindowWidth() {
    let [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        let handleResize = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return width
}

export default useWindowWidth