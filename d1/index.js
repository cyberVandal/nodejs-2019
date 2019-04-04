function proverka(bukva){

    switch (bukva) {
        case "B":
            console.log("Zdravo: "+bukva)
            break;
        case "A":
            console.log("Zdravo: "+bukva )
            break;
        default:
            console.log("Nema takva Bukva.")
            break;
    }


}

proverka("A");




function dodadi(a, text, sodrzi){

    if(sodrzi(a, text)){

        console.log("Bukvata "+a+" se sodrzi vo tekstot shto go isprativte.")
    }else{

        console.log("Bukvata "+a+" ne se sodrzi vo tekstot, probajte druga varijanta.")
    }

}


var proverka = (a, string) =>{

       if(string.includes(a)){
           return true;
       } 

       return false;

}


dodadi("V","Goran", proverka);



var vetuvanje = (broj) =>{

    return new Promise((resolve, reject) =>{
        if(broj % 2 == 0 ){
            return resolve(broj)


        }else{
            return reject(broj)
        }



    })


}

var b = 10;

vetuvanje(b)
    .then( 
        resolve => {
            console.log("Brojot "+b+" e paren")
        },
        reject => {
            console.log("Brojot "+b+" ne e paren")
        }
        
    )