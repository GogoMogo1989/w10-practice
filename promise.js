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

showMessageLater("malac2").then( (result) => {
    console.log(result)
    showMessageLater("malac3").then( (result) => {
        console.log(result)
        showMessageLater("malac4").then( (result) => {
            console.log(result)
        })
    })
}).catch( (err) => {
    console.log(err)
})


