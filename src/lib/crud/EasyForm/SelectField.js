import React from 'react'

export const SelectField = (props) => { 
    let emptyOption = props.hideEmptyOption ? null : <option value="">Select...</option>;
    return (
        <select            
            className={props.className}
            id={props.id}            
            onChange={props.onChange}
            name={props.name}
            defaultValue={props.value}
            value={props.value}
            disabled={props.disabled}
        >
        {emptyOption}
        {props.options.map((e,i)=><option key={i} value={e.value}>{e.text}</option>)}
        
        </select>
    )
}