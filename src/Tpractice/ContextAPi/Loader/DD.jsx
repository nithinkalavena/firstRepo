import React from 'react'

let styles = {
        overlay:{
            position:'fixed',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            background:'rgba(0,0,0,0.5)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        spinner:{
            width:'50px',
            height:'50px',
            border:'5px solid #fff',
            borderTop:'5px solid transparent',
            borderRadius:'50%',
            animation: 'spin 1s linear infinite'
        }
    }
function DD() {
  return (
    <div style={styles.overlay}>        
        <div style={styles.spinner}></div>
    </div>
  )
}

export default DD