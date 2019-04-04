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