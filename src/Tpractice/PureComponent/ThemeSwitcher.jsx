import React, { memo, useEffect, useState } from 'react'

let Item = memo(({text})=>{
    console.log('Rendered',text)
    return(
        <div style={{padding:'10px',border:'1px solid gray',margin:'5px'}}>{text}</div>
    )
})
function ThemeSwitcher() {
    let [items,setItems] = useState([])
    let [page,setPage] = useState(1)
    useEffect(()=>{
        loadItems()        
    },[page])
    function loadItems(){
        let newItems = []
        for(let i=1; i<=10; i++){
            newItems.push(`Item ${(page-1)*10+i}`)
        }
        setItems(prev=>[...prev,...newItems])
    }
    function handleScroll(){
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 5){
            setPage(prev=>prev+1)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
  return (
    <div>
        <h2>Infinite Scroll</h2>
        {items.map(item=>(
            <Item key={item} text={item}/>
        ))}
    </div>
  )
}

export default ThemeSwitcher