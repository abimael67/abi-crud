import React from 'react'

export const TextField = (props) => { 
    
    return (
        <input
            type={props.type} 
            className={props.className}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
            defaultValue={props.value}
            disabled={props.disabled}
            
        />
    )
}