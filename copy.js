const arr1=[2, 3, 5]

const arr2=[6, 7, 8]

const arr3= [...arr1] //tömb másolása

arr3.push(6) //tömbbe raktunk ey új elemet, ami az arr3-omban látszik, de az arr1-be nem, hiába az arr1-et másoltunk.

console.log("arr3: ", arr3)
console.log("arr1: ", arr1)

const arr4 = [...arr1, ...arr2] //egy tömbbé alakítottuk az arr1-et, és az arr2-őt, arr4 néven

console.log("arr4: ", arr4);

const userProfile = {
    name: "David",
    age: "32",
    country: "Hungary"
}

const userProfile2 = {...userProfile, gender: "male", name: "Kovács"} //userProfile2 néven, egy új változót hoztunk létre, amibe az userProfile adatait használtuk fel, majd új objecteket adtunk hozzá. Ha meglévő kulcshoz, egy új értéket adunk, akkor felülírja a régi értéket.

console.log("userProfile1: ", userProfile);
console.log("userProfile2: ", userProfile2);