let arr=["apple", 0, "0", null, NaN, undefined, false, {}]

let result=arr.filter(item => item);  

console.log(result)

//Itt a truthy, és a falthy részt vettük, dokumentáció: https://developer.mozilla.org/en-US/docs/Glossary/Truthy