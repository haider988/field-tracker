function getPropertyHierarchyWithValue(obj, propertyName) {
    const hierarchy = [];

    function findProperty(currentObj, currentPath) {
        for (const key in currentObj) {
            if (key === propertyName) {
                hierarchy.push({ path: ['data', ...currentPath, key], value: currentObj[key] });
            } else if (typeof currentObj[key] === 'object') {
                findProperty(currentObj[key], [...currentPath, key]);
            }
        }
    }

    findProperty(obj, []);

    return hierarchy.length > 0 ? hierarchy : null;
}

module.exports = getPropertyHierarchyWithValue;