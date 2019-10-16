import React from 'react'
import {MainContext} from '../MainContext'
import {changeCaseType, getColumnsDisplayNames} from '../util/text'
export const Header = (props) =>{    
    return (
        <thead>
        <tr>
        <MainContext.Consumer>{
            ({context, config}) => {
                let headerNames = []
               
                if(config.fieldsToDisplay.length > 0)
                    headerNames = config.fieldsToDisplay
                else if(config.fieldsToHide.length > 0){
                    headerNames = Object.keys(context.entities[0])
                    .filter(e=> !config.fieldsToHide.includes(e) )
                 } else {
                    headerNames = context.entities.length>0? Object.keys(context.entities[0]) : config.fieldsDisplayNames
                }
                if(config.fieldsDisplayNames.length === 0 && context.entities.length === 0)
                    return <th>No data</th>
                    let displaysNames =  config.fieldsDisplayNames.length>0?config.fieldsDisplayNames: Object.keys(context.entities[0])
                    let source = context.entities.length>0? Object.keys(context.entities[0]) : config.fieldsDisplayNames
                let displays = getColumnsDisplayNames(
                        displaysNames,
                        source,
                        headerNames
                    )
                
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