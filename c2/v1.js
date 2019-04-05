
// var j=0;

// for(let i = 1; i <= 100; i++){
    
//     if(i % 2 == 0){

//          j++;
//         if(j == 3){
//             console.log(i);
//             j=0;
//         }

//     }
// }
var studenti =[
    {ime: "Pero", prezime:"Perovski", prosek: 7.2},
    {ime: "Ivan", prezime:"Ivanovski", prosek: 9.3},
    {ime: "Aleksandar", prezime:"Aleksandrov", prosek: 7.1},
    {ime: "Ana", prezime:"Aneva", prosek: 9.7}

]

var najdolgo = studenti[0];
var prosek = 0;
var ime = studenti[0];

for(var i in studenti){
  
    prosek += studenti[i].prosek;

    if(studenti[i].prezime.length > najdolgo.prezime.length){

        najdolgo=studenti[i];
    }

    if(studenti[i].ime.length < ime.ime.length){

        ime=studenti[i];
    }
}

console.log(najdolgo.prezime, ime.ime, prosek/studenti.length);

