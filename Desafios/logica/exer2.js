
//exer 2 

//primeiramaneiradesefazer 

// Leitura dos dados de entrada
const nivelMonstro = parseInt(gets());
const dificuldadeBatalha = parseInt(gets());

// Cálculo da quantidade de XP ganhos
const xpGanho = nivelMonstro * dificuldadeBatalha * 100;

// Formatação da mensagem de saída
const mensagem = `Você ganhou ${xpGanho} XP!`;

// Impressão da mensagem de saída
print(mensagem);



//segundamaneira 

const multiplicadorXP = 100;
let nivelMonstro = 130;
let dificuldadeBatalha = 160;

function calcularQuantidadeDeXp(nivelMonstro, dificuldadeBatalha) {
    return nivelMonstro * dificuldadeBatalha * multiplicadorXP;
}

let xpGanho = calcularQuantidadeDeXp(nivelMonstro, dificuldadeBatalha);

let mensagem = `Você ganhou ${xpGanho} XP!`;

console.log(mensagem);