
function sconto(a) {
    let codiceScontoAccettato = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let sconto = document.getElementById("codiceSconto").value;
    let prezzo = a;

    for (i = 0; i < codiceScontoAccettato.length; i++) {

        if (sconto == codiceScontoAccettato[i]) {

            alert("accettato codice sconto");
            alert(prezzo);
            prezzo = prezzo * 0.25;
            alert(prezzo);

            document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzo + "\u20AC";
        }

        else {
            document.getElementById("risultato").innerHTML = "Il prezzo finale è di : " + prezzo + "\u20AC";

        }

    }
}
function calcolo() {

    var sviluppoBackEnd = 20.5;
    var sviluppoFrontEnd = 15.3;
    var projectAnalist = 33.6;
    var prezzo;

    let ore = document.getElementById("ore").value;
    ore = parseInt(ore);
    let lavoro = document.getElementById("lavoro").value;
    
    if (lavoro == 1) {
        prezzo = sviluppoBackEnd * ore;
        sconto(prezzo);
    }

    if (lavoro == 2) {
        prezzo = sviluppoFrontEnd * ore;
        sconto(prezzo);

    }

    if (lavoro == 3) {
        prezzo = projectAnalist;
        sconto(prezzo);
    }

}
























