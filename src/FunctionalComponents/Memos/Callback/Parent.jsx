import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    console.log('parent re-rendered')
    let [a,seta]=useState(10)
    let [todo,setTodo] = useState(['task'])
    
    let addTodo = useCallback((text)=>{
        if(text.trim()==='') return
        setTodo((prev)=>[...prev,text])  
    },[])

  return (
    <div>
        <center>
            Count : {a} <br /><br />
            <button onClick={()=>seta(a+1)}>Inc</button><br /><br /><hr />
            <Child value={addTodo}/> <br /> <br />

            {
                todo.map((item,index)=>{
                return   <ul key={index}>
                        {item}                        
                    </ul>
                })
            }
        </center>
    </div>
  )
}

export default Parent