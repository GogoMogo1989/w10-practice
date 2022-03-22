const userProfile = {
    name: "David",
    age: "32",
    country: "Hungary"
}

/* const name=userProfile.name
const age=userProfile.age */


/* const {name, age} = userProfile

console.log("name: ", name)
console.log("age: ", age) */

const logNameAndAge = ({name , age}) => { //Így lehet egyszerűen lehívni adatokat.
    console.log("name: ", name)
    console.log("age: ", age)
}

logNameAndAge(userProfile)

const numb = [1, 2, 3, 4];

/* const first = numb[0] 
const second = numb[1]

console.log("first:",first)
console.log("second:",second) */

const [a2, b3] = numb //Ha tömbről van szó, akkor a "paramétereknek" megadott érték, a tömben lévő helyett fogja takarni, a név tökmindegy.

console.log('a:', a2)
console.log('b:', b3)

const [x, ...y] = numb //ha használjuk a copy pontokat(...y), akkor a tömböt, kettő tömbre fogja osztani, még pedig úgy, hogy az első értéket, egy különbe, és a többit is egy különbe.

console.log("x: ", x)
console.log("y: ", y)

