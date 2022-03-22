const [min, max] = [34, 30]

/* if(min<max){
    console.log("Min lower than max")
}else{
    console.log(("Min is not over than max"))
} */
/* 
min<max ? console.log("min lower than max") : console.log("min not lower than max") */

console.log(`min${min>max ? "" : "not"} lower than max`)