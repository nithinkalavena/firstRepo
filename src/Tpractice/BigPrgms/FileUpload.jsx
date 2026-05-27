import React, { useState } from 'react'

function FileUpload() {
    let [file,setFile] = useState(null)
    let [preview,setPreview] = useState('')
    let [progress,setProgress] = useState(0)

    let handleFileChange = (e)=>{
        let selectedFile = e.target.files[0]
        setFile(selectedFile)
        let reader = new FileReader()
        reader.onloadend=()=>{
            setPreview(reader.result)
        }
        reader.readAsDataURL(selectedFile)
    }
    let handleUpload = ()=>{
        setProgress(0)
        let value = 0
        let interval = setInterval(() => {
            value+=10
            setProgress(value)
            if (value>=100) {
                clearInterval(interval)
                alert('upload complete')
            }
        }, 300);
    }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h2>File Upload UI</h2>
        <input type="file" onChange={handleFileChange} />
        {
            preview && (
                <div>
                    <img src={preview} alt="preview" width='200'/>
                </div>
            )
        }
        <br />
        <button onClick={handleUpload}>Upload</button>
        {
            progress>0 &&(
                <div style={{width:'300px',margin:'20px auto'}}>
                    <div style={{height:'20px',width:'${progress}',backgroundColor:'green',transition:'0.3s'}}/>                    

                </div>
            )
        }
        <p>{progress}</p>
    </div>
  )
}

export default FileUpload