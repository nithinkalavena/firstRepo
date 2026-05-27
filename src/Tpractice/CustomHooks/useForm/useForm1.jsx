import React from 'react'
import useForm from './useForm'

function validate(values){
    let error = {}
    if(!values.name)
        error.name = 'name is required'
    if(!values.email)
        error.email = 'email is required'
    else if(!values.email.includes('@'))
        error.email='invalid email'
    return error
}
let initialValues = {
    name:'',
    email:''
}
function useForm1() {
    let {values,error,handleChange,handleSubmit,reset} = useForm(initialValues,validate)

    let onSubmit = ()=>{
        console.log('Form submitted')
        reset()
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name='name' value={values.name} onChange={handleChange}
        placeholder='Name'/> 
        <p>{error.name}</p>
        <input name="email" value={values.email} 
        onChange={handleChange} placeholder='email'/>
        <p>{error.email}</p>
        <button type='Submit'>Submit</button>
    </form>
  )
}

export default useForm1