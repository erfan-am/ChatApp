import React from 'react'
import './App.scss';
import Input from './Input';
import { inputs } from './state';
import { checkValidity } from './utils';
class App extends React.Component{
  state={
      inputs:inputs
  }
 onChangeHandler=(e,ctrlName)=>{
   const inputs=this.state.inputs;
   inputs[ctrlName].value=e.target.value;
   inputs[ctrlName].isValid=checkValidity(
     inputs[ctrlName].value,
     inputs[ctrlName].validation,
     inputs
     )
   this.setState({inputs:inputs})
}
  render() {
    const inputsStyle=(
      this.state.inputs.map((input)=>(
        <Input
        key={input.id}
        error={input.error}
        placeholder={input.placeholder}
        name={input.name}
        type={input.name}
        sub={input.sub}
        onChange={(e)=>this.onChangeHandler(e,input.id)}
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
} 
 
export default App
