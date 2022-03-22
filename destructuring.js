const userProfile = {
    name: "David",
    age: "32",
    country: "Hungary"
}

/* const name=userProfile.name
const age=userProfile.age */

/*node destructuring.js*/

/* const {name, age} = userProfile

console.log("name: ", name)
console.log("age: ", age) */

const logNameAndAge = ({name , age}) => {
    console.log("name: ", name)
    console.log("age: ", age)
}

logNameAndAge(userProfile)

const numb = [1, 2, 3, 4];

/* const first = numb[0]
const second = numb[1]

console.log("first:",first)
console.log("second:",second) */

const [a2, b3] = numb

console.log('a:', a2)
console.log('b:', b3)

const [x, ...y] = numb

console.log("x: ", x)
console.log("y: ", y)

