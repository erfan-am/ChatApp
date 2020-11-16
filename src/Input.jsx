import React from 'react'
const Input = (props) => {
    const element=props.text ==="text" ?
    <textarea/>
    :
    <input
    style={{border:props.valid && props.end ? '1px solid green' : '1px solid #333'}}
    placeholder={props.type !=="checkbox" ? props.placeholder : undefined}
    value={props.type !=="checkbox"  && props.value}
    className={`${props.type === "checkbox" && 'checkbox'}`}
    name={props.name}
    type={props.type}
    onClick={props.onCheck }
    onChange={props.type !=="checkbox"  ? props.onChange : undefined}
    onBlur={props.type !=="checkbox" ? props.touchInput : undefined}
    required
/> 
    return (
    <div className="input_group">
      {element}
        <label style={{
                color:!props.valid ? 
                props.touched && 'red' : 
                props.end && 'green'  
            }} 
            htmlFor={props.name}>{props.label}</label>
        <p style={{color:!props.valid ?
             props.touched && 'red' :  props.end ? 'green' :'#333'   }}>
            {!props.valid && props.touched  ?  props.error : 
            props.end ? 'done..' : props.sub}
            </p>
    </div>
        )
}

export default Input
