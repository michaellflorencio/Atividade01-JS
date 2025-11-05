import { Stack } from "./Stack.ts";
import * as readlineSync from "readline-sync";
const pilhaLivros = new Stack<string>();

let opcao: number
do{
    console.log(`\nDigite uma opção:
    \n1 - Adicionar Livro na pilha
    \n2 - Listar todos os Livros
    \n3 - Retirar Livro da Pilha
    \n0 - Sair`)
    opcao = readlineSync.questionInt()

    switch(opcao){
        case 1:
        const livro = readlineSync.question("Digite o nome:")
        pilhaLivros.push(livro) // adiciona o livro
        console.log(`Pilha: \n${livro}\nLivro Adicionado!`)
        break

        case 2:
        console.log("Lista de Livros na Pilha")
        pilhaLivros.printStack()
        break

        case 3:
        if(pilhaLivros.isEmpty()){
            console.log("A pilha esta vazia!")
        } else{
            pilhaLivros.pop()
            console.log("Um Livro foi retirado da pilha!")
        }
        break

        case 0:
        console.log("Programa finalizado")
        break
    }
}while(opcao !==0)



// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nRemover Elemento: " + pilha.pop());

// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nAdicionar Elemento 11: ");

// pilha.push("Prato Roxo");

// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nExibir o Primeiro Elemento da pilha: " + pilha.peek());

// console.log("\nExibir o Tamanho da pilha: " + pilha.count());

// console.log("\nChecar se o Elemento Prato Verde existe na pilha? " + pilha.contains("Prato Verde"));

// console.log("\nChecar se o Elemento Prato Verde Limão existe na pilha? " + pilha.contains("Prato Verde Limão"));

// console.log("\nLimpar a pilha");

// pilha.clear();

// console.log("\nA pilha está vazia? " + pilha.isEmpty());