import React, { useState } from 'react'
import { EasyList } from './EasyList/List'
import { MainContext } from './MainContext'
import { getConfig, getData } from './Util/defaultProps'
import { crudPT } from './Util/propTypes'
import EasyForm from './EasyForm/'
import {ViewScreens, ActionModes} from './Util/enum'
/**Master entry component that controls all screens and manages the initial states for the CRUD operations. */
const EasyCrud = ({ data, config }) => {

    const [currentView, setView] = useState({ view: ViewScreens.List, id: '' })
    const [currentData, setData] = useState(data)

    let toRender = <EasyList />

    switch (currentView.view.toLowerCase()) {
        case ViewScreens.View:
            toRender = <EasyForm mode={ActionModes.Display} id={currentView.id} />
            break
        case ViewScreens.Edit:
            toRender = <EasyForm mode={ActionModes.Update} id={currentView.id} />
            break
        case ViewScreens.Create:
            toRender = <EasyForm mode={ActionModes.Insert} id={currentView.id} />
            break
        case ViewScreens.List:
            toRender = <EasyList />
            break
        default:
            toRender = <EasyList />
            break
    }
    let setEntities = (entities) => {
        setData(Object.assign(currentData, { entities: entities }))
    }
   
    return (
        <MainContext.Provider value={
            {
                context: Object.assign(getData(currentData), {  setData, setEntities }),
                config:getConfig({...config,fields:getData(currentData).fields}),
                history: {  setView, current: currentView }
            }
        }>
            <div className="container" style={{ marginTop: '2em' }}>
                <div style={{ backgroundColor: '#ccc', padding: '0.3em', boxShadow: '0 1px 1px' }}><h4 style={{ display: 'inline' }} >{data.entityDisplayName.toUpperCase()}</h4><div style={{ display: 'inline', textAlign: 'right' }}>{" "}<button className="btn btn-success" onClick={() => setView({ view: 'new' })}>Create</button></div></div>
                {toRender}
            </div>
        </MainContext.Provider>
    )
}


EasyCrud.propTypes = crudPT()
export default EasyCrud