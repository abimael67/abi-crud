import React from 'react';
import EasyCrud from '../lib';

const sampleData = {
    cars : [
            {
                id:1,
                make: 'Toyota',
                model: 'Corolla',
                year: '2015'
            },
            {
                id:2,
                make: 'Honda',
                model: 'Civic',
                year: '2016'
            },
    ],
    contacts:[
        {
            idContact:1,
            name: 'Alexander',
            tel: '8096546556'
        },
        {
            idContact:2,
            name:'Samuel',
            tel:'80946545666'
        }
    ]
}
const App =()=> <EasyCrud data={{
    entities:sampleData.cars,
    entityName:'cars',
    entityIdColumn:'id',
    entityDisplayName:'Cars'
}} config={
    {labelsConfig:{caseType:'lower'},
     fieldsToHide:['id'],
     labels:{listView:{
         deleteConfirmMessage:'Are you sure you want to delete this car?',
         
        }}}}/>;
export default App;