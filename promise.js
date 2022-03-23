const showMessageLater = (msg) => {

    return new Promise( (resolve, reject) =>{    //Promis-nak két értek van, az egyik a resolve, a másik a reject. A reject, ha nem teljesül az igéret, a resolve, ha teljesül az igéret.
        setTimeout( () => {   //SetTimeout-ba azért kellett beletenni, mert így szimuláltuk azt, hogy egy külső szerverrül jön az információ.
            if(msg ==="malac"){
                return reject("error happened!!!!")
            }
            return resolve(msg)
        }, 3000) //itt a késleltetés idejeét lehet beállítani ms-ban.
    })

}

showMessageLater("malac2").then( (result) => { //itt hívjuk meg a függvényt, a függvényben. Then használunk, ami a resolve párja.
    console.log(result)
    showMessageLater("malac3").then( (result) => {
        console.log(result)
        showMessageLater("malac4").then( (result) => {
            console.log(result)
        })
    })
}).catch( (err) => { //catch a reject párja, ha nm valósul emg az igéret, ez a parancs fog lefutni.
    console.log(err)
})


