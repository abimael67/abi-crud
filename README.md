# ABI CRUD
## How to use?
- Clone this repo
- Run npm install
- Import EasyCrud from /lib
- Use it like this

```sh
...
let myCars = [{...car1}, {...car2}]
...
<EasyCrud data={{
    entities:<list/array of entities. i.e. myCars>,
    entityName:'<name of your entity. i.e cars>',
    entityIdColumn:'<unique identity field of the entities. i.e. carId>'[,
    entityDisplayName:'<display name for a single entity>. i.e. Car']
}} />
```
