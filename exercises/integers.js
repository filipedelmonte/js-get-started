// Dada uma seqüência de números inteiros não-nulos,
// seguida por 0, imprimir seus quadrados.

function main(sequence) {
    let i = 0;
    while(sequence[i] !== 0) {
        console.log(sequence[i]);
        i++;
    }
}

main([1, 5, 3, 4, 3, 0]);