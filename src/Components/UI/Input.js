import React from 'react'

const Input = (props) => {
    return (
      <div className="p-2 mt-1 m-auto">
          <label>{props.label}</label>
            <input
            className={`input  outline-none p-1 ${props.className}` }
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            required
        />
      </div>
    )
}

export default Input
