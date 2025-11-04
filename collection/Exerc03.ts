import * as readlineSync from "readline-sync";

// set 
const numeros: Set<number> = new Set<number>([])

for (let i = 1; i <= 10; i++) {
  const numero = readlineSync.questionInt("Digite um número inteiro: ")
  numeros.add(numero)
}

console.log("\nListar dados do Set: ");
for (const num of numeros) {
  console.log(num);
}

