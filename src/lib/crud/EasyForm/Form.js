import React from 'react'
import { MainContext } from '../MainContext';
import MainController from '../Controllers/mainController'
import { FormFooter } from './formParts/Footer';
import { FormBody } from './formParts/Body';

class EasyFormFactory extends React.Component{
    constructor(props){
        super(props)
       this.state = {
           entity: null,
           saveButtonDisabled: true
       }
       this.changeHandler = this.changeHandler.bind(this)
       this.goBack = this.goBack.bind(this)
       this.saveCallbackHandler = this.saveCallbackHandler.bind(this)
       this.createCallbackHandler = this.createCallbackHandler.bind(this)
       this.controller = new MainController(this.props.data)
    }
    
    goBack(){
        this.props.history.setView({view:'list'})
    }
    componentDidUpdate(prevProps){
        if(prevProps.data.entities !== this.props.data.entities && !this.state.entity)
            this.setState({
                entity: this.props.data.entities.find(e=> e[this.props.data.entityIdColumn] == this.props.id)
            })
    }
    componentDidMount(){
        if(this.props.mode !== 'new')
            this.setState({
                entity: this.props.data.entities.find(e=> e[this.props.data.entityIdColumn] == this.props.id)
            })
    }
    changeHandler(e){
        let {name, value} = e.target        
        name = name.split('/')
        if(this.state.entity && name.length===2)
            value = {...this.state.entity[name[0]], [name[1]]:value}
        this.setState({
            entity: Object.assign({}, this.state.entity, {
                [name[0]]:value
            }),
            saveButtonDisabled:false
        })
    }
    saveCallbackHandler(){
        this.setState({
            saveButtonDisabled: true
        })
        let d = this.props.data
        d.setData(Object.assign(d,d,{entities:this.controller.updateEntity(this.state.entity)}))
       // this.props.config.actionsCallbacks.update(this.state.entity)
    }
    createCallbackHandler(){
       
        this.props.config.actionsCallbacks.create(this.state.entity)
    }
    
    render(){
        console.log(this.props.data)
        let c = this.props.config  
        let values = [] 
        let fieldsNames = this.props.data.fields.filter(e=> typeof e !== 'object');
        this.props.data.fields.filter(f=> typeof f === 'object').forEach(e=> fieldsNames.push(e))    
        if (!this.state.entity && this.props.mode !== 'new'){            
            return (<div>No data</div>)
        }
        if(this.props.mode !== 'new'){  
            let entity = this.state.entity
           
            values = Object.values(entity).filter((e,i)=>{
                let keys = Object.keys(entity)
            
                return fieldsNames.includes(keys[i])
            })
            let fieldsObjectNames = fieldsNames.filter(e=> typeof e === 'object').reduce((pr, cu)=>{ 
                pr.push(Object.keys(cu)[0])
                return pr
            } ,[])
            fieldsObjectNames.forEach(e=>values.push(entity[e]))  
        }
      
        
        let displayNames = c.fieldsDisplayNames.length > 0? c.fieldsDisplayNames : fieldsNames
        let disabled = this.props.mode === 'view'? true:false
        
        return (
            <div className="container">
            <div className="row">
            <br/>
                <FormBody fieldsNames={fieldsNames} values={values} displayNames={displayNames} disabled={disabled} changeHandler={this.changeHandler} {...this.props}/> 

                <FormFooter saveCallback={this.saveCallbackHandler} createCallback={this.createCallbackHandler} mode={this.props.mode} goBack={this.goBack} saveButtonDisabled={this.state.saveButtonDisabled} />
            </div></div>
        )
    }
}

export const EasyForm = React.forwardRef((props, ref)=>(
    <MainContext.Consumer>
        {
            ({context, config, history})=><EasyFormFactory {...props} ref={ref} data={context} history={history} config={config} />
        }
    </MainContext.Consumer>
))