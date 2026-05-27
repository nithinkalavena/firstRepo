import React, { useState } from 'react'

function useForm(initialValues,validate) {
    let [values,setValues] = useState(initialValues)
    let [error,setError] = useState({})

    let handleChange = (e)=>{
        let {name,value} = e.target

        setValues((prev)=>({
            ...prev,[name]:value,
        }))
    }

    let handleSubmit = (callback)=>(e)=>{
        e.preventDefault()

        let validationErrors = validate(values)
        setError(validationErrors)
        if(Object.keys(validationErrors).length === 0)
            callback()
    }

    let reset = ()=>{
        setValues(initialValues)
        setError({})
    }
  return {values,error,handleChange,handleSubmit,reset}
}

export default useForm