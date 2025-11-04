import * as readlineSync from 'readline-sync'

// const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

// const numero = readlineSync.questionInt("Digite um número: ")

// let encontrado = false // variável para saber se o número foi achado

// for (let i = 0; i < numeros.length; i++) {
//   if (numero == numeros) { // verifica se o número da posição i é igual ao número digitado
//     console.log(`O número ${numero} está localizado na posição ${i}.`)
//     encontrado = true
//     }
// }
// else{
// console.log(`O número ${numero} não foi encontrado.`)
// }





// const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
// let numero = readlineSync.questionInt("Digite um número: ")
// let encontrado = false
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] === numero){
//         console.log(`O número ${numero} está localizado na posição: ${i}`)
//         encontrado = true
//     }
// }
// if(encontrado === false){
//     console.log(`O número ${numero} não foi encontrado!`)
// }


const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

const numero = readlineSync.questionInt("Digite um número: ")

let encontrado = false

for (const valor of numeros) {
    if (valor === numero) {
        encontrado = true
    }
}

if (encontrado) {
    console.log(`O número ${numero} foi encontrado na posição !`)
} else {
    console.log(`O número ${numero} não foi encontrado!`)
}










