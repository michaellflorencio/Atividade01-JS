const leia = require("readline-sync")

// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.


let idade
let maior50 = 0
let menor21 = 0
idade = leia.questionInt("Digite a idade ")
while(idade > 0){
    idade = leia.questionInt("Digite a idade ")
    if (idade <21){
        menor21=menor21 +1
    }
    if (idade >50){
        maior50=maior50+1
    }
}

console.log(maior50,menor21)











