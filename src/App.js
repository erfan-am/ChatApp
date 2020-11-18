import React, { useState } from 'react'
import './App.scss';
import Input from './Input';
import { inputsData } from './state';
import { checkValidity } from './utils';
const App =()=>{
  const [input,setInputs]=useState({
      inputs:inputsData
  })
  const checkInput=input.inputs[5].validation.check;
const onChangeHandler=(e,ctrlName)=>{
  const inputs=input.inputs;
  inputs[ctrlName].touched=false;
  inputs[ctrlName].validation.end=true;
  inputs[ctrlName].value=e.target.value;
  inputs[ctrlName].isValid=checkValidity(
    inputs[ctrlName].value,
    inputs[ctrlName].validation,
    inputs
    )
  setInputs({inputs:inputs})
} 
const onCheck=(ctrlName)=>{
  const inputs=input.inputs;
  inputs[ctrlName].validation.check=!inputs[ctrlName].validation.check;
  setInputs({inputs:inputs})

}
const inputTouched=(ctrlName)=>{
  const inputs=input.inputs;
  inputs[ctrlName].touched=true;
  setInputs({inputs:inputs});
}

const buttonHandler=()=>{
  alert('hello this is formvalidation')
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
      onCheck={()=>onCheck(input.id)}
      end={input.validation.end}
      touched={input.touched}
      disabled={input.validation.able}
      touchInput={()=>inputTouched(input.id)}
      />
    ))
  )
  console.log('====================================');
  console.log(checkInput);
  console.log('====================================');
    return (
      <div className="container">
        <h1>FormValidation</h1>
          <form>
            {inputsStyle}
            <button style={{opacity:!checkInput ? 0.2 : 1}}  disabled={!checkInput} onClick={buttonHandler} type="button">SUBMIT</button>
          </form>
      </div>
    )
} 
 
export default App
