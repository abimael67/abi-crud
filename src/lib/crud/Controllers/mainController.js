import { getUniqueId } from '../Util/generators'
export default class MainController {
    constructor(data) {
        this.data = data;
    }
    data

    /**Updates the entities with the newEntity and then returns the updated data object. */
    updateEntity(newEntity) {
        if (this.data.entities.length <= 0) return []
        this.data.setEntities(this.data.entities.map(current => {
            if (current[this.data.entityId] === newEntity[this.data.entityId])
                return Object.assign(current, current, newEntity)
            return current
        }))
    }
    /**Inserts a new entity in the context entities array */
    insertEntity(newEntity) {
        let entities = this.data.entities
        this.data.setEntities(
            entities.concat([Object.assign(newEntity, { id: getUniqueId() })])
        )
    }
}