import React, {useState} from 'react'
import {EasyList} from './EasyList/List';
import {MainContext} from './MainContext'
import PropTypes from 'prop-types'
import { EasyForm } from './EasyForm/Form';

import {getDataTableConfig} from './util/datatableConfig'
import {getConfig} from './util/defaultProps'
// const exampleData = {
//     cars : [
//             {
//                 id:1,
//                 make: 'Toyota',
//                 model: 'Corolla',
//                 year: '2015'
//             },
//             {
//                 id:2,
//                 make: 'Honda',
//                 model: 'Civic',
//                 year: '2016'
//             },
//     ],
//     contacts:[
//         {
//             idContact:1,
//             name: 'Alexander',
//             tel: '8096546556'
//         },
//         {
//             idContact:2,
//             name:'Samuel',
//             tel:'80946545666'
//         }
//     ]
// }

const EasyCrud = ({data, config}) => {
 
         const [currentView, setView] = useState('list')
        let toRender = <EasyList/>
      /*  let pathArray = this.props.match? this.props.match.url.split('/') : []
        let urlName = pathArray.some(e=>e === 'view')? 'view': pathArray.some(e=>e === 'edit') ? 'edit' : pathArray.some(e=>e === 'new')? 'new':'list'
        switch(urlName.toLowerCase()){
            case 'view':
                toRender = <EasyForm mode='view' id={this.props.match.params.id}/>
            break
            case 'edit':
                toRender = <EasyForm mode='edit' id={this.props.match.params.id}/>
            break
            case 'new':
                toRender = <EasyForm mode='new' id={this.props.match.params.id}/>
            break
            case 'list':
                toRender = <EasyList/>
            break
            default:
                toRender = <EasyList/>
            break
        }
      */
        return (
            <MainContext.Provider value={{context: data, config: getConfig(config), history:{setView: setView, current:currentView}}}>
            <div className="container" style={{marginTop:'2em'}}>
            <div style={{backgroundColor:'#ccc', padding:'0.3em', boxShadow:'0 1px 1px'}}><h4 style={{display:'inline'}} >{data.entityDisplayName.toUpperCase()}</h4><div style={{display:'inline', textAlign:'right'}}>{" "}<button className="btn btn-success" onClick={()=> this.props.history.push(`${this.props.history.location.pathname}/new`)}>Create</button></div></div>
            
                {toRender}
            </div>
            
            </MainContext.Provider>
        )
    
}


EasyCrud.propTypes = {
    data:PropTypes.shape({
        entities: PropTypes.array.isRequired,
        entityName: PropTypes.string.isRequired,
        entityDisplayName:PropTypes.string,
        entityIdColumn:PropTypes.string.isRequired,
    }),
    config:PropTypes.shape({        
        fieldsToDisplay: PropTypes.arrayOf(PropTypes.string),
        fieldsToHide:PropTypes.arrayOf(PropTypes.string),
        fieldsDisplayNames:PropTypes.arrayOf(PropTypes.string),        
        labelsConfig:PropTypes.shape({
            caseType:PropTypes.oneOf(['capital', 'upper', 'lower'])
        }),
        fieldsTypes:PropTypes.arrayOf(PropTypes.shape({
            fieldName:PropTypes.string,
            type:PropTypes.shape({
                type:PropTypes.oneOf(['text', 'date', 'select', 'bool']),
                options:PropTypes.any
            })
        })),
        actionsCallbacks: PropTypes.shape({
            delete: PropTypes.func,
            update: PropTypes.func,
            insert: PropTypes.func
        }),
        tableConfig: PropTypes.shape({
            className: PropTypes.string,
            deleteActionClassName: PropTypes.string,
            editActionClassName: PropTypes.string,
            viewActionClassName: PropTypes.string, 
            deleteActionCallBack: PropTypes.func,
            editActionCallBack: PropTypes.func,
            viewActionCallBack: PropTypes.func,          
        }),
        actions:PropTypes.arrayOf(PropTypes.string),        
        labels:PropTypes.shape({
            listView:PropTypes.shape({
                searchBoxPlaceholder: PropTypes.string,
                showRowsPerPages: PropTypes.string,
                showingRows: PropTypes.string,
                noRows: PropTypes.string,
                actionsHeader:PropTypes.string,
                deleteAction:PropTypes.string,
                editAction:PropTypes.string,
                viewAction:PropTypes.string,
                deleteConfirmMessage:PropTypes.string
            })
        }),
    })
}
export default EasyCrud