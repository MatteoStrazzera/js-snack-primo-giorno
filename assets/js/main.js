/*
Esercizio 1

Dichiara una variabile chiamata number e assegnale il valore 100. 
Stampa il valore della variabile in console.

*/

const number = 100; // number

console.log(number);

/* 

Esercizio 2

Dichiara una costante chiamata PI e assegnale il valore di 3.14. 
Stampa il valore della costante in console.

*/

const PI = 3.14; // number

console.log(PI);

/*

Esercizio 2/B

Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?

*/

// const PI = 3.1416; // number

// console.log(PI);

/* 
Uncaught SyntaxError: Identifier 'PI' has already been declared

you can't change the value of const.
you can change the value only with the variable let

*/

/* 

Esercizio 2/C

Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console.

*/

const radius = 8; // number

const circle = radius * 2 * PI; // number

console.log(circle);

/* 

Esercizio 3

Dichiara una variabile chiamata name e
assegnale il valore "Carlo".
Successivamente, modifica il valore della variabile in "Marco".
Stampa il nuovo valore in console.

*/

let name = "Carlo"; // string

console.log(name);

name = "Marco"; // string

console.log(name);

// Extra exercise

/* 

Esercizio 4

Dichiara una variabile chiamata temperature e assegnale il valore 22.5. 
Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.

*/

let temperature = 22.5; // number

temperature = 22.5 + 5; // number

console.log(temperature);