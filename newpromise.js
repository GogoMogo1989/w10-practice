const showMessageLater = (msg) => {

    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            if(msg ==="malac"){
                return reject("error happened!!!!")
            }
            return resolve(msg)
        }, 3000)
    })

}

const myFunction = async () => {
   
     try {
        let result = "" 
        result = await showMessageLater("hello5")
        console.log(result)
        result = await showMessageLater("hello6")
        console.log(result)
        result = await showMessageLater("malac")
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

myFunction()