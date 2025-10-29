const leia = require('readline-sync')
// variaveis
let salario, abono, novoSalario
// entrada
console.log("Digite o Salário: ")
salario = leia.questionInt()

console.log("Digite o abono: ")
abono = leia.questionInt()

// saida
novoSalario = (salario + abono)
console.log("Seu novo salário é: ",novoSalario)


