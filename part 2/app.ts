type ObjectShape = {
    id: number,
    age: number,
    name: string,
}

function updateObjectInArray<T>(initialArray: T[], keyToFind: string, keyValueToFind: string | number, patch): T[] {
    let clonedArray : T[] = initialArray.map((item: T) => {
        if (item[keyToFind] == keyValueToFind) {
            return { ...item, ...patch };
        }
        return item;
    });
    return clonedArray;
}

let initialArray: ObjectShape[] = [
    { id: 1, age: 12, name: "Klee" },
    { id: 2, age: 15, name: "QiQi" },
    { id: 4, age: 18, name: "Amber" },
    { id: 7, age: 16, name: "Venti" },
    { id: 3, age: 23, name: "Zhongli" },
];

let beforeUpdate = document.querySelector(".beforeUpdate");
for (let arrayItem of initialArray) {
    beforeUpdate.innerHTML += `
    <div>id: ${arrayItem.id}</div>
    <div>age: ${arrayItem.age}</div>
    <div>name: ${arrayItem.name}</div>
    <hr>
    `;
}

let clonedArray: ObjectShape[] = updateObjectInArray<ObjectShape>(initialArray, "name", "QiQi", { age: 22, name: "Diluc" });

let afterUpdate = document.querySelector(".afterUpdate");
for (let arrayItem of clonedArray) {
    afterUpdate.innerHTML += `
    <div>id: ${arrayItem.id}</div>
    <div>age: ${arrayItem.age}</div>
    <div>name: ${arrayItem.name}</div>
    <hr>
    `;
}