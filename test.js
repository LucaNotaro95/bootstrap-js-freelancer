



function calcolo(){
let BackEnd = 20.5;

let ore = document.getElementById("ore").value; 
    ore = parseInt(ore)
    alert(ore);
let lavoro = document.getElementById("lavoro").value; 
    alert(lavoro);

let prezzofinito=0;
if (lavoro==BackEnd){

prezzofin=BackEnd* ore;
}
  
}



document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzofinito;

}







   
