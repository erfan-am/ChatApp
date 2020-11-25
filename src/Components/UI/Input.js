import React from 'react'

const INPUT = (props) => {
    return (
      <div className="p-2 mt-1 m-auto flex  justify-between">
          <label className="p-3">{props.label}:</label>
            <input
            style={{
              border:'2px solid blue'
            }}
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

export default INPUT
