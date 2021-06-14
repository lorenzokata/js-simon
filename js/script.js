var array = [];

while (array.length < 5) {
    var numeroRandom = Math.floor(Math.random()*100)+1;
    if (!array.includes(numeroRandom)) {
        array.push(numeroRandom);
    }
}

alert(array);

setTimeout(function(){

    var risultato = numeriIndovinati(array);

    if (risultato.length == 0) {
        console.log('Non hai indovinato nessun numero');
    } else{
        console.log('Hai indovinato ' + risultato.length + ' numeri, che sono: ' + risultato);
    }

}, 3000);


function numeriIndovinati(array) {

    var indovinati = [];

    for (var i = 0; i < 5; i++) {
    
        var numero = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));

        if (array.includes(numero) && !indovinati.includes(numero)) {
            indovinati.push(numero);
        }
    }

    console.log(indovinati);

    return indovinati;

}