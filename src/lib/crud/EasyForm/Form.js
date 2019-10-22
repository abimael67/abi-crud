import React from 'react'
import { MainContext } from '../MainContext';
import MainController from '../Controllers/mainController'
import { FormFooter } from './formParts/Footer';
import { FormBody } from './formParts/Body';
import {ViewScreens, ActionModes} from '../Util/enum'
class EasyFormFactory extends React.Component {
    constructor(props) {
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

    goBack() {
        this.props.history.setView({ view: ViewScreens.List })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.data.entities !== this.props.data.entities && !this.state.entity)
            this.setState({
                entity: this.props.data.entities.find(e => e[this.props.data.entityId] == this.props.id)
            })
    }
    componentDidMount() {
        if (this.props.mode !== ActionModes.Insert)
            this.setState({
                entity: this.props.data.entities.find(e => e[this.props.data.entityId] == this.props.id)
            })
    }
    changeHandler(e) {
        let { name, value } = e.target
        name = name.split('/')
        if (this.state.entity && name.length === 2)
            value = { ...this.state.entity[name[0]], [name[1]]: value }
        this.setState({
            entity: Object.assign({}, this.state.entity, {
                [name[0]]: value
            }),
            saveButtonDisabled: false
        })
    }
    saveCallbackHandler() {
        this.setState({
            saveButtonDisabled: true
        })
        this.controller.updateEntity(this.state.entity)
        let cb = this.props.config.actionsCallbacks.update
        if (cb) cb(this.state.entity)
    }
    createCallbackHandler() {
        this.controller.insertEntity(this.state.entity)
        let cb = this.props.config.actionsCallbacks.insert
        if (cb) cb(this.state.entity)
        this.props.history.setView({ view: ViewScreens.List })
    }

    render() {
        let c = this.props.config
        let values = []
        //Filter the fields that will be shown in the forms. Note that we exclude any field with object value here.
        let fieldsNames = this.props.config.fields.filter(e => typeof e !== 'object' && e !== this.props.data.entityId.toLowerCase());

        //Here we extract the object values
        this.props.data.fields.filter(f => typeof f === 'object').forEach(e => fieldsNames.push(e))
        if (!this.state.entity && this.props.mode !== ActionModes.Insert) {
            return (<div>No data</div>)
        }
        if (this.props.mode !== ActionModes.Insert) {
            let entity = this.state.entity
            values = Object.values(entity).filter((e, i) => {
                let keys = Object.keys(entity)
                return fieldsNames.includes(keys[i])
            })
            let fieldsObjectNames = fieldsNames.filter(e => typeof e === 'object').reduce((pr, cu) => {
                pr.push(Object.keys(cu)[0])
                return pr
            }, [])
            fieldsObjectNames.forEach(e => values.push(entity[e]))
        }

        let displayNames = c.fieldsToDisplayNames.length > 0 ? c.fieldsToDisplayNames : fieldsNames
        let disabled = this.props.mode === ActionModes.Display ? true : false

        return (
            <div className="container">
                <div className="row">
                    <br />
                    <FormBody fieldsNames={fieldsNames} values={values} displayNames={displayNames} disabled={disabled} changeHandler={this.changeHandler} {...this.props} />

                    <FormFooter saveCallback={this.saveCallbackHandler} createCallback={this.createCallbackHandler} mode={this.props.mode} goBack={this.goBack} saveButtonDisabled={this.state.saveButtonDisabled} />
                </div></div>
        )
    }
}

export const EasyForm = React.forwardRef((props, ref) => (
    <MainContext.Consumer>
        {
            ({ context, config, history }) => <EasyFormFactory {...props} ref={ref} data={context} history={history} config={config} />
        }
    </MainContext.Consumer>
))