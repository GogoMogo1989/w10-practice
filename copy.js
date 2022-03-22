const arr1=[2, 3, 5]

const arr2=[6, 7, 8]

const arr3= [...arr1] //tömb másolása

arr3.push(6)

console.log("arr3: ", arr3)
console.log("arr1: ", arr1)

const arr4 = [...arr1, ...arr2]

console.log("arr4: ", arr4);

const userProfile = {
    name: "David",
    age: "32",
    country: "Hungary"
}

const userProfile2 = {...userProfile, gender: "male", name: "Kovács"}

console.log("userProfile1: ", userProfile);
console.log("userProfile2: ", userProfile2);