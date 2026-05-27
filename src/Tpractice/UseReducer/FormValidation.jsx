import React, { useReducer } from 'react'

let initialState = {
        name:'',
        email:'',
        password:'',
        errors:{}
    }

    function reducer(state,action){
        switch (action.type){
            case 'updateInput':
                return{
                    ...state,[action.field]:action.value
                }
            case 'setErrors':
                return{
                    ...state,errors:action.payload
                }
            case 'reset':
                return initialState
            default:
                return state
        }

    }
function FormValidation() {
    let [state,dispatch] = useReducer(reducer,initialState)

    let validate = ()=>{
        let errors = {}
        
        if (!state.name.trim())
            errors.name = 'name is required'
        if(!state.email.includes('@'))
            errors.email = 'invalid email'
        if(state.password.length<6)
            errors.password = 'password must exceed 6 characters'
        
        return errors
    }

    let handleSubmit = (e)=>{
        e.preventDefault()

        let errors = validate()

        if(Object.keys(errors).length>0){
            dispatch({type:'setErrors',payload:errors})
        }
        else{
            alert('Form Submitted')
            dispatch({type:'reset'})
        }
    }
  return (
    <div>
        <h2>Form Validation</h2>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Name' value={state.name} 
                onChange={e=>dispatch({type:'updateInput',field:'name',value:e.target.value})}/>
                <p style={{color:'red'}}>{state.errors.name}</p>
                <br /><br />

            </div>
            <div>
                <input type="text" placeholder='Email' value={state.email}
                onChange={e=>dispatch({type:'updateInput',field:'email',value:e.target.value})}/>
                <p style={{color:'red'}}>{state.errors.email}</p><br /><br />
            </div>
            <div>
                <input type="password" placeholder='Password' value={state.password}
                onChange={e=>dispatch({type:'updateInput',field:'password',value:e.target.value})}/>
                <p style={{color:'red'}}>{state.errors.password}</p><br /><br />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation