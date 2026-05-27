import React, { useReducer } from 'react'

let initialState = {
    files:[],
    uploading:false,
    progress:0,
    error:null
}
function reducer(state,action){
    switch(action.type){
        case 'addFile':
            return{
                ...state,files:[...state.files,action.payload]
            }
        case 'uploadStart':
            return{
                ...state,uploading:true,progress:0
            }
        case 'uploadProgress':
            return{
                ...state,progress:action.payload
            }
        case 'uploadSuccess':
            return{
                ...state,uploading:false,progress:100
            }
        case 'uploadError':
            return{
                ...state,uploading:false,error:action.payload
            }
        default:
            return state
        
    }
}
function FileUpload() {
    let [state,dispatch] = useReducer(reducer,initialState)

    let handleFile = (e)=>{
        let file = e.target.files[0]
        dispatch({type:'addFile',payload:file})
    }
    let uploadFile = ()=>{
        dispatch({type:'uploadStart'})
        let progress = 0
        let interval = setInterval(()=>{
            progress+=10
            dispatch({type:'uploadProgress',payload:progress})
            if(progress>=100){
                clearInterval(interval)
                dispatch({type:'uploadSuccess'})
            }
        },200)
    }
  return (
    <div>
        <input type="file" onChange={handleFile}/> <br /><br />
        <button onClick={uploadFile}>Upload</button><br /><br />
        <p>Progress : {state.progress}%</p>
    </div>
  )
}

export default FileUpload