import React, { useState } from 'react'
import './App.scss';
import Input from './Input';
import { inputsData } from './state';
import { checkValidity } from './utils';
const App =()=>{
  const [input,setInputs]=useState({
      inputs:inputsData
  })
const onChangeHandler=(e,ctrlName)=>{
  const inputs=input.inputs;
  inputs[ctrlName].touched=false;
  inputs[ctrlName].value=e.target.value;
  inputs[ctrlName].isValid=checkValidity(
    inputs[ctrlName].value,
    inputs[ctrlName].validation,
    inputs
    )
  setInputs({inputs:inputs})
} 

const inputTouched=(ctrlName)=>{
  const inputs=input.inputs;
  inputs[ctrlName].touched=true;
  setInputs({inputs:inputs});
}
console.log(input.inputs[0]);


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
      touched={input.touched}
      touchInput={()=>inputTouched(input.id)}
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
