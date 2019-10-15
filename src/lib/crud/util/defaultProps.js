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
                list:{
                    searchBoxPlaceholder: "Buscar {entity}",
                    showRowsPerPages: "Mostrar {select} {entity} por página",
                    showingRows: "Mostrando de {start} a {end} de {rows} {entity} (Página {page} de {pages})",
                    noRows: "No se encontraron {entity}",
                    actionsHeader: "Acciones",
                    deleteAction:"<span class='oi oi-trash'></span>",
                    editAction:"<span class='oi oi-pencil'></span>",
                    viewAction:"<span class='oi oi-eye'></span>",
                }
            },
            actions:['edit', 'view', 'delete']
        }
    

    return Object.assign(defaultConfigProps, defaultConfigProps, customConfig)
}