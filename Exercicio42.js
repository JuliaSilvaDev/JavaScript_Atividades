

function obterGabarito() { 
    let gabarito = []; 
        let resposta = prompt("Informe o gabarito da " + i + "° Questão.");
        gabarito.push(resposta.toUpperCase());
    }

    return gabarito; 

function verificarResposta(gabarito, respostaAluno) { 
    let acertos = 0;
    for(i = 1; i <= gabarito.length; i++) { 
        if(respostaAluno[i] === gabarito[i]) { 
        }
    }
    return acertos; 

;
function main() { 
    let gabarito = obterGabarito(); 
    let maiorAcerto = 0;
    let menorAcerto = Infinity; 
    let totalAlunos = 0;
    let somaNotas = 0;

    while (true) { 
        let respostaAluno = [];
        for (let i = 1; i <= 10; i++) {
          let resposta = prompt(`Informe a resposta do aluno para a questão ${i}:`);
          respostaAluno.push(resposta.toUpperCase());
        }

        let acertos = verificarResposta(gabarito, respostaAluno); 

        if (acertos > maiorAcerto) { 
            maiorAcerto = acertos;
        }

        if (acertos < menorAcerto) { 
            menorAcerto = acertos;
        }

        totalAlunos++;
        somaNotas += acertos;

        let continuar = prompt("Outro aluno vai utilizar o sistema? (S/N):"); 
        if (continuar.toUpperCase() != "S") {
            break;
        }
    }

    let mediaNotas = somaNotas / totalAlunos;

    document.write("<center>Resultado:<br>");
    document.write("<center>Maior Acerto:" + maiorAcerto + "</br>");
    document.write("<center>Menor Acerto:" + menorAcerto + "</br>");
    document.write("<center>Total de Alunos:" + totalAlunos + "</br>");
    document.write("<center>Média das Notas:" + mediaNotas + "</br>");
    document.write("<center>Gabarito da Prova:" + gabarito + "</br>");
}

main();