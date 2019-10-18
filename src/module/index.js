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
            tel: '8096546556',            
            country:'RD'
        },
        {
            idContact: 2,
            name: 'Samuel',
            tel: '80946545666',
            country:'USA'
        }
    ]
}
const App = () => <EasyCrud data={{
    entities: sampleData.contacts,
    entityName: 'contacts',
    entityId: 'idContact',
    entityDisplayName: 'Polla',
 
    
}}
   
   config={{
       labels:{
            listView:{
                deleteConfirmMessage:'are you sure you want to delete this contact?'
            }
       },
       actionsCallbacks:{
       update:(e)=>alert(e)
   }}}
/>;
export default App;