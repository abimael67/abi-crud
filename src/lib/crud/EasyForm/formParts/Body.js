import React from 'react'
import { FieldBody } from '../FieldBody';
export const FormBody = ({fieldsNames, values, changeHandler, disabled, displayNames, config}) => { 
    let toRender = ''
    const PrintObjectValues = () => {        
        let objKeys = fieldsNames.filter((e, i)=>typeof e === 'object')            
        let objVals = values.filter((e, i)=> typeof e === 'object')

       toRender = (objKeys.length > 0 ?  objKeys.map((obj,obi)=> {            
       let objName = Object.keys(obj)[0]
        let currentFieldNames = Object.values(obj)[0]
        let currentValues = objVals.length> 0 ? objVals[0]: []
        let displayNames = currentFieldNames
       
        return (
            <React.Fragment key={`obj_${obi}`}>
            <h5 id="list-item-2">{objName}</h5><br/>
            <div className="row">{
                currentFieldNames.map((e,i)=> {
                    if(typeof currentValues[i] === 'object') return ""                    
                   // let type = config.fieldsType.length > 0? config.fieldsType.find(ft=>ft.fieldName === e): null
                return (
                        <FieldBody  onChange={changeHandler} className="form-control" disabled={disabled} name={`${objName}/${e}`} label={displayNames[i]} value={currentValues[e]} key={`fbody_${objName}_${i}`} />
                        )
                })                    
                }            
            </div>
            </React.Fragment>
        ) 
        }) : ''
           
        )
        
    }
    PrintObjectValues()
    return (
        <React.Fragment>
       
        <div className="col-lg-12 col-sm-12" data-spy="scroll" data-offset="0">
        <h5 id="list-item-1">Basic info</h5>
        <div className="row">
        <br/>
        
        {
            fieldsNames.filter(f=> typeof f !== 'object').map((e,i)=> {
                if(typeof values[i] === 'object') return ""                    
                let type = config.fieldsTypes.length > 0? config.fieldsTypes.find(ft=>ft.fieldName === e): null
            return (
                    <FieldBody type={type} onChange={changeHandler} className="form-control" disabled={disabled} name={e} label={displayNames[i]} value={values[i]} key={`fbody${i}`} />
                    )
            })
            
        }
                 
        </div> 
        {toRender}
        </div>
          
        </React.Fragment>
    )
}
