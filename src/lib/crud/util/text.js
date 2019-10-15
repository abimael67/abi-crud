import {getValuesByIndexes, getMatchingIndexes} from './array'
export const changeCaseType = (caseType, text) => {
    switch(caseType){
        case 'capital':
            return capitalizeFirstLetter(text.toLowerCase())
        case 'upper':
            return text.toUpperCase()
        case 'lower':
            return text.toLowerCase()
        default:
            return text
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getColumnsDisplayNames = (displays, source, matchs) => {
    let inds = getMatchingIndexes(matchs,source)
    return getValuesByIndexes(inds,displays)
}