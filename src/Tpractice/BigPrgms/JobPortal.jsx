import React, { useState } from 'react'

function JobPortal() {
    let jobData = [
        {id:1, title:'React Developer',location:'Chennai',salary:60000},
        {id:2, title:'Java Developer',location:'Banglore',salary:50000},
        {id:3, title:'Frontend Engineer',location:'Hyderabad',salary:70000}
    ]
    let [jobs] = useState(jobData)
    let [search,setSearch] = useState('')

    let filteredJobs = jobs.filter(job=>
        job.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div style={{width:'400px',margin:'auto'}}>
        <h2>Job Portal</h2>
        <input type="text" placeholder='Search job...' value={search} onChange={e=>setSearch(e.target.value)}/>

        {
            filteredJobs.map((job)=>(
                <div key={job.id} style={{border:'1px solid gray',margin:'10px',padding:'10px'}}>
                    <h4>{job.title}</h4>
                    <p>{job.location}</p>
                    <p>${job.salary}</p>
                </div>
            ))
        }
    </div>
  )
}

export default JobPortal