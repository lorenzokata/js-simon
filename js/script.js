var array = [];

for (var i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random()*10)+1);
}

alert(array);

setTimeout(numeriIndovinati(array), 30000);

console.log('I numeri indovinati sono ' );


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