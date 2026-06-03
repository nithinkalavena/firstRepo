import React, { useState } from 'react'

function Faqs() {
    let [openIndex,setOpenIndex] = useState(null)
    let faqs = [
        {
            question:'what is React?',
            answer:'React is a javascript library for building user interfaces.'
        },
        {
            question:'what is JSX?',
            answer:'JSX allows you to write HTML-like code inside javascript'
        },
        {
            question:'what is useState?',
            answer:'useState is a React hook used to manage state'
        },
        {
            question:'what is useEffect?',
            answer:'useEffect is used to handle side effects in React'
        }
    ]
    let handleToggel = (index)=>{
        setOpenIndex(openIndex === index ? null:index)
    }
  return (
    <div style={{padding:'20px'}}>
        <h2>FAQ Accordion</h2>
        {
            faqs.map((faq,index)=>(
                <div key={index} style={{
                    border:'1px solid black',
                    marginBottom:'10px',
                    padding:'10px'
                }}>
                    <h3 onClick={()=>handleToggel(index)} style={{cursor:'pointer'}}>{faq.question}</h3>
                    {openIndex === index &&(
                    <p>{faq.answer}</p>
                )}
                </div>                
            ))
        }
    </div>
  )
}

export default Faqs