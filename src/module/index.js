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
            type:'TEL',
            value: '8096546556',
            country:'DOP'
        },
        {
            idContact: 2,
            name: 'Samuel',
            type:'WORK',
            value: '80946545666',
            country:'USA'
        },
        {
            idContact: 3,
            name: 'Arlenys',
            type:'',
            value: '',
            country:'CAD'
        }
    ],
}
const App = () => <EasyCrud data={{
    entities: sampleData.contacts,
    entityName: 'contacts',
    entityId: 'idContact',
    entityDisplayName: 'List of Contacts',
}}
   
    config={{
      labels:{
        listView:{
            deleteConfirmMessage:'are you sure you want to delete this contact?'
        }
      },
      // TODO
      // If we remove/comment the 'fieldsToHide' property
      // in the Edit screen, fields got mixed.
      fieldsToHide:['idContact'],
      fieldTypes:[
        {
          fieldName:'type',
          fieldDisplayName:'Contact Type',
          type:{
            dataType:'select',
            options:[
              { text:'Telephone',
               value:'TEL'
              },
              { text:'Work',
                value:'WORK'
              },
              { text:'Fax',
                value:'FAX'
              },
              { text:'Email Address',
                value:'EMAIL'
              },
            ]
          }
        }
      ]
    }}
/>;
export default App;