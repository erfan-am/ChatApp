import React from 'react'

const Input = (props) => {
    return (
    <div className="input_group">
        <input
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            onBlur={props.touchInput}
            required
        /> 
        <label style={{
                color:!props.valid ? 
                props.touched && 'red' : 
                props.end && 'green'  
            }} 
            htmlFor={props.name}>{props.label}</label>
        <p style={{color:!props.valid ? props.touched && 'red' :  props.end ? 'green' :'#333'   }}>
            {!props.valid && props.touched  ?  props.error : props.end ? 'done..' : props.sub}
            </p>
    </div>
        )
}

export default Input
