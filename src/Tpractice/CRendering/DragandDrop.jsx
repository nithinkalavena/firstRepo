import React, { useState } from 'react'

function DragandDrop() {
    let [file,setFile]=useState(null)
    let handleDrop = (e)=>{
        e.preventDefault()
        setFile(e.dataTransfer.files[0])
    }
  return (
    <div onDrop={handleDrop} onDragOver={e=>e.preventDefault()} style={{
        border:'2px dashed grey',
        padding:'20px',
        textAlign:'center'
    }}>
        Drag & Drop File here
        {file && <p>{file.name}</p>}
        {/* {file && <img src={URL.createObjectURL(file)} width={300}/>} */}
    </div>
  )
}

export default DragandDrop