import { notas } from "./notas";
import prompt from 'prompt-sync';

let control: notas = new notas(0,0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu Escola===============`);
    console.log('1. Para saber a Média do aluno 😄   ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Escolha uma ação : ');

    switch (option) {
        case 1:
            let v: number = +teclado('Digite a nota do aluno no 1° bimestre: ');
            let v2: number = +teclado('Digite a nota do aluno no 2° bimestre: ');
            control.resultado(v, v2)
            control.media();

            break;
    
            
        default:
            break;
    }
}