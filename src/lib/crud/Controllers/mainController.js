export default class MainController{
    constructor(data){
        this.data = data;
    }
    data
/**Updates the entities with the newEntity and then returns the updated data object. */
    updateEntity(newEntity){
        if(this.data.entities.length <=0) return []
        return this.data.entities.map(current =>{
           if(current[this.data.entityId] === newEntity[this.data.entityId])
                return Object.assign(current, current, newEntity)
            return current    
        })
    }
}