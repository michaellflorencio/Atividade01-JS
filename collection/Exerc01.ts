import * as readlineSync from 'readline-sync';


const cores: string[] = [] 
for(let i = 0; i < 5; i++){ // contador - até 5 cores
    let cor = readlineSync.question("Digite a cor");
    cores.push(cor);  // adiciona a cor no array
}
console.log("Todas as cores digitadas: ", cores);
console.log("Todas as cores digitadas em Ordem Alfabetica: ", cores.sort()) // .sort metodo de ordem crescente.








