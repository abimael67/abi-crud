import React from 'react'
import { TextField } from './TextField';
import { MainContext } from '../MainContext';
import { SelectField } from './SelectField';
export const FieldBody = (props) =>{
   

    let ToRender = (<TextField type="text" {...props} />)
        if(props.type){
            let t = props.type.type
            switch(t.type){
                case 'text':
                    ToRender= (<TextField type="text"  {...props} />)
                    break
                case 'select':
                    ToRender = (<SelectField {...props} options={t.options} />)
                    break
                default:
                    ToRender = (<TextField type="text" {...props} />)
                    break
            }
        }       
    
    return (
                  
            <div className="col-lg-6 col-sm-12">
                <div className="form-group" >
                    <label htmlFor="">{props.label}</label>                    
                    {ToRender}
                </div>
            </div>
       
    )
}