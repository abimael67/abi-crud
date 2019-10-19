import React from 'react'
import {MainContext} from '../MainContext'
import {changeCaseType} from '../Util/text'
export const Header = (props) =>{    
    return (
        <thead>
        <tr>
        <MainContext.Consumer>{
            ({config}) => {                                           
                let displays = config.fieldsToDisplayNames    
                if(config.actions.length>0)
                        displays.push(
                        changeCaseType(
                            config.labelsConfig.caseType,
                           config.labels.listView.actionsHeader
                        ))    
                return(
                    displays.map((fieldName, i) => <th key={i}>{changeCaseType(config.labelsConfig.caseType,fieldName)}</th>)              
                ) 
            }
        }
        </MainContext.Consumer>
        </tr>
        </thead>
    )
}