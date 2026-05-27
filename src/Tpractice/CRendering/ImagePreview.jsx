import React, { useRef, useState } from 'react'

function ImagePreview() {
    let [image,setImage] = useState(null)
    let fileRef = useRef()
    let handleImage = (e)=>{
      let file = e.target.files[0]
      if(file){
        setImage(URL.createObjectURL(file))
      }      
    }
    let removeImage = ()=>{
      setImage(null)
      fileRef.current.value = null
    }
  return (
    <div style={{textAlign:'center'}}>
      <h2>Upload Image</h2>
      <input type="file" ref={fileRef} accept='image/*' onChange={handleImage}/>
      {
        image && (
          <div>
            <img src={image} alt="preview" width='200' style={{marginTop:'10px'}}/>
            <br />
            <button onClick={removeImage}>Remove</button>
          </div>
        )
      }      
    </div>
  )
}

export default ImagePreview