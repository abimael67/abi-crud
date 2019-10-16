import React, {useState} from 'react'
import {EasyList} from './EasyList/List';
import {MainContext} from './MainContext'

import { EasyForm } from './EasyForm/Form';

import {getDataTableConfig} from './util/datatableConfig'
import {getConfig} from './util/defaultProps'
import { crudPT } from './util/propTypes';

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


EasyCrud.propTypes = crudPT()
export default EasyCrud