const leia = require("readline-sync")


// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.



let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("\nDigite o número que você deseja encontrar: ");

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`\nO número ${numero} está localizado na posição: ${i}`);
        encontrado = true;
    }
}

if (!encontrado) {
    console.log(`\nO número ${numero} não foi encontrado!`);
}












