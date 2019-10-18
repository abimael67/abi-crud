import React from 'react';
import EasyCrud from '../lib';

const sampleData = {
    cars: [
        {
            id: 1,
            make: 'Toyota',
            model: 'Corolla',
            year: '2015'
        },
        {
            id: 2,
            make: 'Honda',
            model: 'Civic',
            year: '2016'
        },
    ],
    contacts: [
        {
            idContact: 1,
            name: 'Alexander',
            tel: '8096546556'
        },
        {
            idContact: 2,
            name: 'Samuel',
            tel: '80946545666'
        }
    ]
}
const App = () => <EasyCrud data={{
    entities: sampleData.cars,
    entityName: 'cars',
    entityId: 'id',
    entityDisplayName: 'Cars',

}}
    config={{
        fieldsToHide: ['id'],
        actionsCallbacks: {

        }
    }}
/>;
export default App;