import React, { useEffect, useState } from 'react'

function BugTracker() {
    let [bugs,setBugs] = useState([])
    let [title,setTitle] = useState('')
    let [priority,setPriority] = useState('Low')
    let [filter,setFilter] = useState('All')
    let [editId,setEditId] = useState(null)

    useEffect(()=>{
        let stored = JSON.parse(localStorage.getItem('bugs'))
        if(stored) setBugs(stored)
    },[])

    useEffect(()=>{
        localStorage.setItem('bugs',JSON.stringify(bugs))
    },[bugs])

    let handleSubmit = ()=>{
        if(title.trim()==='') return
        if(editId){
            setBugs(prev=>prev.map(b=>b.id===editId ? {...b,title,priority}:b))
            setEditId(null)
        }
        else{
            let newBug = {
                id:Date.now(),
                title,
                status:'open',
                priority
            }
            setBugs(prev=>[...prev,newBug])
        }
        setTitle('')
        setPriority('Low')
    }
    let  updateStatus = (id)=>{
        setBugs(prev=>
            prev.map(bug=>
                bug.id === id ? {...bug,status:bug.status === 'Open'?'In Progress': bug.status === 'In Progress'?'Closed':'Open'}: bug
            )
        )
    }
    let deleteBug = (id)=>{
        setBugs(prev=>prev.filter(b=>b.id !== id))
    }
    let editBug = (bug)=>{
        setTitle(bug.title)
        setPriority(bug.priority)
        setEditId(bug.id)
    }
    let filterBugs = bugs.filter(b=> filter ==='All'?true: b.status === filter)
    let getColor = (priority)=>{
        if(priority==='High') return '#ff6b6b'
        if(priority==='Medium') return '#ffd93d'
        return '#6bcb66'
    }
  return (
    <div style={{maxWidth:'500px',margin:'auto',fontFamily:'arial'}}>
        <h2>Bug Tracker</h2>
        <input type="text" placeholder='Enter bug...' value={title} onChange={e=>setTitle(e.target.value)}/>&nbsp;&nbsp;
        <select value={priority} onChange={e=>setPriority(e.target.value)}>
            <option value="">Low</option>
            <option value="">Medium</option>
            <option value="">High</option>
        </select> &nbsp;&nbsp;
        <button onClick={handleSubmit}>{editId?'Update':'Add'}</button>
        <div style={{marginTop:'10px'}}>
            <select onChange={e=>setFilter(e.target.value)}>
                <option value="">All</option>
                <option value="">Open</option>
                <option value="">In Progress</option>
                <option value="">Closed</option>
            </select>
        </div>
        {
            filterBugs.map(bug=>(
                <div key={bug.id} 
                style={{borderLeft:'5px solid ${getColor(bug.priority)}',
                    border:'1px solid #ccc',
                    padding:'10px',
                    margin:'10px 0',
                    borderRadius:'5px'
                }}>
                    <h4>{bug.title}</h4>
                    <p>Status: {bug.status}</p>
                    <p>Priority: {bug.priority}</p>
                    <button onClick={()=>updateStatus(bug.id)}>Change Status</button>&nbsp;
                    <button onClick={()=>editBug(bug)}>Edit</button>&nbsp;
                    <button onClick={()=>deleteBug(bug.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default BugTracker