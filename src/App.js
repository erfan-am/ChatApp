import React, { useState } from 'react'
import './App.scss';
import Input from './Input';
import { inputs } from './state';
import { checkValidity } from './utils';
const App =()=>{
  const [input,setInputs]=useState({
      inputs:inputs
  })
 const onChangeHandler=(e,ctrlName)=>{
   const inputs=input.inputs;
   inputs[ctrlName].value=e.target.value;
   inputs[ctrlName].isValid=checkValidity(
     inputs[ctrlName].value,
     inputs[ctrlName].validation,
     inputs
     )
   setInputs({inputs:inputs})
}    
const inputsStyle=(
      input.inputs.map((input)=>(
        <Input
        key={input.id}
        error={input.error}
        placeholder={input.placeholder}
        name={input.name}
        type={input.name}
        sub={input.sub}
        onChange={(e)=>onChangeHandler(e,input.id)}
        valid={input.isValid}
        label={input.label}
        value={input.value}
        />
      ))
    )
    return (
      <div className="container">
          <form>
            {inputsStyle}
          </form>
      </div>
    )
} 
 
export default App
