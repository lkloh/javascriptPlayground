

var jsonObjEmpty = {};
console.log(Object.keys(jsonObjEmpty).length === 0);

var jsonObjNonEmpty = {A: 1, B: 2};
console.log(Object.keys(jsonObjNonEmpty).length > 0);