var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateObjectInArray(initialArray, keyToFind, keyValueToFind, patch) {
    var clonedArray = initialArray.map(function (item) {
        if (item[keyToFind] == keyValueToFind) {
            return __assign(__assign({}, item), patch);
        }
        return item;
    });
    return clonedArray;
}
var initialArray = [
    { id: 1, age: 12, name: "Klee" },
    { id: 2, age: 15, name: "QiQi" },
    { id: 4, age: 18, name: "Amber" },
    { id: 7, age: 16, name: "Venti" },
    { id: 3, age: 23, name: "Zhongli" },
];
var beforeUpdate = document.querySelector(".beforeUpdate");
for (var _i = 0, initialArray_1 = initialArray; _i < initialArray_1.length; _i++) {
    var arrayItem = initialArray_1[_i];
    beforeUpdate.innerHTML += "\n    <div>id: " + arrayItem.id + "</div>\n    <div>age: " + arrayItem.age + "</div>\n    <div>name: " + arrayItem.name + "</div>\n    <hr>\n    ";
}
var clonedArray = updateObjectInArray(initialArray, "name", "QiQi", { age: 22, name: "Diluc" });
var afterUpdate = document.querySelector(".afterUpdate");
for (var _a = 0, clonedArray_1 = clonedArray; _a < clonedArray_1.length; _a++) {
    var arrayItem = clonedArray_1[_a];
    afterUpdate.innerHTML += "\n    <div>id: " + arrayItem.id + "</div>\n    <div>age: " + arrayItem.age + "</div>\n    <div>name: " + arrayItem.name + "</div>\n    <hr>\n    ";
}
