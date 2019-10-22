import React from 'react'
import { MainContext } from '../MainContext'
import { Cell } from './Cell'
export const Row = (props) => {
    return (
        <tr>
            <MainContext.Consumer>{
                ({ context, config, history }) => {

                    const gotoView = (id) => {
                       
                        history.setView({ view: 'view', id: id })
                    }
                    const gotoEdit = (id) => {
                        history.setView({ view: 'edit', id: id })
                       
                    }
                    let cells = []
                    let lastInd = 0
                    //Value Cells
                    Object.keys(props.row).forEach((fieldName, i) => {
                        let value = Object.values(props.row)[i]
                        let fType = config.fieldTypes.find(e=> e.fieldName.toLowerCase() === fieldName.toLowerCase()).type
                        let optionText = fType && fType.options ? fType.options.find(o=> o.value === value).text : null
                        if(optionText) value = optionText
                        lastInd = i + 1
                        if (config.fieldsToDisplay.length > 0) {
                            if (config.fieldsToDisplay.includes(fieldName))
                                cells.push(<Cell key={i}>{value}</Cell>)
                        }
                        else if (config.fieldsToHide.length > 0) {
                            if (!config.fieldsToHide.includes(fieldName))
                                cells.push(<Cell key={i}>{value}</Cell>)
                        }
                        else cells.push(<Cell key={i}>{value}</Cell>)
                    })
                  
                    //Action button cells
                    let val = []
                    if (config.actions.includes('view'))
                        val.push(
                            buildButton(
                                config.labels.listView.viewAction,
                                lastInd + 1,
                                config.tableConfig.viewActionClassName + " viewBtn",
                                props.row[context.entityId],
                                gotoView
                            )
                        )
                    if (config.actions.includes('edit'))
                        val.push(
                            buildButton(
                                config.labels.listView.editAction || 'edit',
                                lastInd + 2,
                                config.tableConfig.editActionClassName + " editBtn", props.row[context.entityId],
                                gotoEdit
                            )
                        )
                    if (config.actions.includes('delete'))
                        val.push(
                            buildButton(
                                config.labels.listView.deleteAction || 'delete',
                                lastInd + 3,
                                config.tableConfig.deleteActionClassName + " deleteBtn", props.row[context.entityId],
                                props.deleteHandler
                            )
                        )
                    cells.push(<Cell key={lastInd}>{val}</Cell>)
                    return cells
                }
            }
            </MainContext.Consumer>
        </tr>
    )
}

function buildButton(label, key, className, id, callback) {
    return (
        <button style={{ marginRight: '0.3em' }}
            onClick={() => callback(id)}
            id={id}
            key={key}
            className={className}>
            <span dangerouslySetInnerHTML={{ __html: label }}></span>
        </button>
    )
}