export const getDataTableConfig = (entityName, listLabels, searchable=true) => {
    return {
        searchable: searchable,
        fixedHeight: true,
        header:true,
        labels: {
            placeholder: listLabels.searchBoxPlaceholder.replace('{entity}', entityName),
            perPage: listLabels.showRowsPerPages.replace('{entity}', entityName),
            noRows: listLabels.noRows.replace('{entity}', entityName),
            info: listLabels.showingRows.replace('{entity}', entityName),
        },
    }
}