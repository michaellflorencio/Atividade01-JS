const leia = require ('readline-sync')

let codigo, quantidade, preco, produto

console.log("Digite o código do item")
codigo = leia.questionInt()

console.log("Digite a quantidade comprada:")
quantidade = leia.questionInt()

switch(codigo){
  case 1:
    produto = "Cachorro Quente"
    preco = 10.00
    break
  case 2:
    produto = "X-Salada"
    preco = 15.00
    break
  case 3:
    produto = "X-Bacon"
    preco = 18.00
    break
  case 4:
    produto = "Bauru"
    preco = 12.00
    break
  case 5:
    produto = "Refrigerante"
    preco = 8.00
    break
  case 6:
    produto = "Suco de laranja"
    preco = 13.00
    break
  default:
    console.log("Código inválido!")
}


let total = quantidade * preco
console.log("Produto: ", produto, "\nValor total: R$ ",total )










