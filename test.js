





const sviluppoBackEnd = 20.5;
const sviluppoFrontEnd = 15.3;
const projectAnalist = 33.6;


let ore = document.getElementById("ore").value; //ore richieste
    ore = parseInt(ore);
    console.log("ore " + ore);
    alert(ore);

    let lavoro = document.getElementById("lavoro").value; //tipo di lavoro
    console.log(typeof lavoro);
    console.log("lavoro " + lavoro);
    alert(lavoro);

let prezzofin=0;
if (lavoro==sviluppoBackEnd){

prezzofin=sviluppoBackEnd* ore;




document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofin + "\u20AC";

}







   
