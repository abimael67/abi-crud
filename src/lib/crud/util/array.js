export const getMatchingIndexes = (matchs, source) =>{
    let arr = []
    source.forEach((e, i)=> {
        if(matchs.some(s => e === s))
            arr.push(i)
    })
    return arr
}

export const getValuesByIndexes = (indexes, source) =>{
    return source
        .reduce((prev, curr, ind)=>{     
                if(indexes.includes(ind))                  
                    prev.push(curr)                
                return prev                    
            }, []
        )    
}