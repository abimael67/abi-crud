import React from 'react';
import { Row } from './Row'
import { MainContext } from '../MainContext'
import { Header } from './Header'

class EasyListFactory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableName: "",
            entities: this.props.data.entities
        }
        this.setTableName = name => this.setState({ tableName: name })
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.entities != this.props.data.entities) {
            this.setState({
                entities: this.props.data.entities
            })
        }
    }
    deleteHandler(id) {
        let d = this.props.data
        if (window.confirm(this.props.config.labels.listView.deleteConfirmMessage))
            this.setState({
                entities: this.state.entities.filter(e => e[d.entityIdColumn] != id)
            })
    }

    render() {
        return (
            <div>
                <table id={`datatable_${this.props.data.entityName || ""}`} className={this.props.config.tableConfig.className}>
                    <Header />
                    <tbody>
                        {this.state.entities.map((row, i) => (<Row deleteHandler={this.deleteHandler}
                         key={i}
                         row={row}
                          
                          />))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export const EasyList = React.forwardRef((props, ref) => (
    <MainContext.Consumer>
        {
            ({ context, history, config }) => <EasyListFactory {...props} ref={ref} data={context} history={history} config={config} />
        }
    </MainContext.Consumer>
))


