const leia = require('readline-sync')

// Salário Bruto: 2000.00
// Adicional Noturno: 500.00
// Horas Extras: 100.00
// Descontos: 200.00
// Salário Líquido: 2800.00

// variaveis
let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido

console.log("Digite seu salário bruto")
salarioBruto = leia.questionFloat()

console.log("Digite o addicional noturno")
adicionalNoturno = leia.questionFloat()

console.log("Digite as horas extras")
horasExtras = leia.questionFloat() * 5

console.log("Digite os descontos")
descontos = leia.questionFloat()

salarioLiquido = salarioBruto + adicionalNoturno + horasExtras

console.log("Seu salário liquido é", salarioLiquido - descontos)


















