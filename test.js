




function calcolo(){
let sviluppoBackEnd = 20.5;
let sviluppoFrontEnd = 15.3;
let projectAnalist = 33.6;


let ore = document.getElementById("ore").value; //ore richieste
    ore = parseInt(ore)
    alert(ore);
let lavoro = document.getElementById("lavoro").value; //tipo di lavor
    alert(lavoro);

let prezzofinito=0;
if (lavoro==sviluppoBackEnd){

prezzofin=sviluppoBackEnd* ore;
}
  
}



document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofinito;

}







   
