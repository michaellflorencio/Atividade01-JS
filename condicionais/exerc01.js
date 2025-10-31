const leia = require ('readline-sync')

// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

let numero1, numero2, numero3
console.log("Digite o número A")
numero1 = leia.questionInt()

console.log("Digite o número B")
numero2 = leia.questionInt()

console.log("Digite o número C")
numero3 = leia.questionInt()

if(numero1+numero2 > numero3){
    console.log("A Soma de A + B é Maior do que C")
} 
else if(numero1+numero2 == numero3){
    console.log("A Soma de A + B é Igual a C")
}
else{
    console.log("A Soma de A + B é Menor do que C")
}

















