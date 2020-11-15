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
            required
        /> 
        <label style={{color:props.valid !==true && 'red'  }} 
        htmlFor={props.name}>{props.label}</label>
        <p style={{color:props.valid !==true && 'red' }}>{props.valid !==true ? props.error : props.sub}</p>
    </div>
        )
}

export default Input
