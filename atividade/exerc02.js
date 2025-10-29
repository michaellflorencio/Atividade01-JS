const leia = require('readline-sync')

let nota01, nota02, nota03, nota04, mediaNotas

console.log("Digitea a primeira nota")
nota01 = leia.questionFloat()

console.log("Digitea a segunda nota")
nota02 = leia.questionFloat()

console.log("Digitea a terceira nota")
nota03 = leia.questionFloat()

console.log("Digite a quarta nota")
nota04 = leia.questionFloat()

mediaNotas = (nota01+nota02+nota03+nota04) / 4
console.log("Média das notas é", mediaNotas)








