import React, { useMemo, useState } from 'react'

function CountSelected() {
    let [count,setCount] = useState(0)

    let [items,setItems] = useState([
        {id:1,name:'item 1',selected:false},
        {id:2,name:'item 2',selected:false},
        {id:3,name:'item 3',selected:false}
    ])

    let selectedCount = useMemo(()=>{
        console.log('counting...')
        return items.filter(item=>item.selected).length
    },[items])

    let toggleItem = (id)=>{
        setItems(prev=>prev.map(item=>item.id==id?{...item,selected:!item.selected}:item))
    }
  return (
    <div>
        <h2>Selected Count : {selectedCount}</h2>

        <button onClick={()=>setCount(count+1)}>Re-render {count}</button>
        <ul style={{listStyle:'none'}}>
            {items.map(item=>(
                <li key={item.id}>
                    <input type="checkbox" checked={item.selected} onChange={()=>toggleItem(item.id)}/>
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CountSelected