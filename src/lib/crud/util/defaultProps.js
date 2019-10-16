export const getConfig = (customConfig) => {
    let defaultConfigProps = {
                  
            fieldsToDisplay: [],
            fieldsToHide: [],
            fieldsDisplayNames:[],       
            labelsConfig:{
                caseType: 'capital'
            },
            fieldsTypes:[],
            tableConfig:{
                className: 'table table-striped table-bordered',
                deleteActionClassName: 'btn btn-danger',
                editActionClassName: "btn btn-warning",
                viewActionClassName: 'btn btn-info',
                deleteActionCallBack: null,
                editActionCallBack: null,
                viewActionCallBack: null,            
            },
            labels:{
                listView:{
                    searchBoxPlaceholder: "Search {entity}",
                    showRowsPerPages: "Show {select} {entity} per page",
                    showingRows: "Showing from {start} to {end} of {rows} {entity} (Page {page} of {pages})",
                    noRows: "No {entity} found",
                    actionsHeader: "Actions",
                    deleteAction:"delete",
                    editAction:"edit",
                    viewAction:"view",
                }
            },
            actions:['edit', 'view', 'delete']
        }
    

    return Object.assign(defaultConfigProps, defaultConfigProps, customConfig)
}