import React from 'react'

const INPUT = (props) => {
    return (
    <React.Fragment>
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
            onBlur={props.onBlur}
            name={props.name}
            onChange={props.onChange}
            required
        />
      </div>
      <p className="text-red-500 ml-40">{props.error}</p>      
    </React.Fragment>
    )
}

export default INPUT
