const leia = require ('readline-sync')

// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

let nome, codigoCargo, salario, novoSalario, reajuste, cargo

// entrada
nome = leia.question("Nome do Colaborador ")
codigoCargo = leia.questionInt("Código do cargo ")
salario = leia.questionFloat("Digite o salário ")

// estrutura condicional 
switch (codigoCargo) {
  case 1:
    cargo = "Gerente"
    reajuste = 0.10
    break
  case 2:
    cargo = "Vendedor"
    reajuste = 0.07
    break
  case 3:
    cargo = "Supervisor"
    reajuste = 0.09
    break
  case 4:
    cargo = "Motorista"
    reajuste = 0.06
    break
  case 5:
    cargo = "Estoquista"
    reajuste = 0.05
    break
  case 6:
    cargo = "Técnico de TI"
    reajuste = 0.08
    break
  default:
    console.log("Código de cargo inválido!")
}

novoSalario = salario + (reajuste*salario)

// saida
console.log("Nome do colaborador:" , nome)
console.log("Cargo: ", cargo)
console.log("Novo salário: R$ " + novoSalario)


















