var array = [];

for (var i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random()*10)+1);
}

alert(array);

setTimeout(numeriIndovinati, 30000, array);
console.log('I numeri indovinati sono ' + indovinati.length + ': ' + indovinati);

function numeriIndovinati(array) {

    var indovinati = [];

    for (var i = 0; i < 5; i++) {
    
        var numero = prompt('Inserisci il ' + (i+1) + '° numero');

        if (numero == array[i]) {
            indovinati.push(numero);
        }
    }

    return indovinati;

}

// COME SALVO IL RISULTATO (RETURN) DI UNA FUNZIONE CHIAMATA TRAMITE setTimeout IN UNA VARIABILE?????