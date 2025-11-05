import * as readlineSync from "readline-sync";
import { Queue } from "./Queue.ts"

const fila = new Queue<string>()
let opcao: number



do{
    console.log(`\nDigite uma opção:
    \n1 - Adicionar Cliente na Fila
    \n2 - Listar todos os Clientes
    \n3 - Retirar Cliente da Fila
    \n0 - Sair`)
    opcao = readlineSync.questionInt()

    switch(opcao){
        case 1:
            const cliente = readlineSync.question("Digite o nome:")
            fila.enqueue(cliente) // adiciona o cliente
            console.log(`Fila: \n${cliente}\nCliente Adicionado!`)
            break

        case 2:
            console.log("Lista de clientes na fila")
            fila.printQueue()
            break

        case 3:
            fila.dequeue()
            break

        case 0:
            console.log("Programa finalizado")
            break
    }
}while(opcao !=0)


// const fila = new Queue<string>()
// fila.enqueue() // adiciona cliente
// fila.printQueue() // mostra todos na fila
// fila.dequeue() // remove cliente da fila
// fila.isEmpty() // fila vazia
// fila.peek() //Exibir o Primeiro Elemento da fila
// fila.count() // Exibir o Tamanho da fila
// fila.contains(4) //Checar se o Elemento 4 existe na fila
// fila.clear() // Limpar a fila
