export const updateObjectInArray = (items, itemId, objectKey, newObjProperty) => {
    return items.map(u => {
        if (u[objectKey]===itemId) {
            return {...u, ...newObjProperty}
        }
        return u
    })
}