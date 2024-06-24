
/*
function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O ${name} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let name = "Gustavo De Andrade Celleguim";
let mensagem = "Parabéns ";
let vitorias = 300; 
let derrotas = 2;
let nivel = "";

let resultado = calcularNivel(vitorias, derrotas);
console.log(mensagem + resultado);*/ 

let nome = "Gustavo De Andrade Celleguim";
let mensagem = "Parabéns ";
let vitorias = 300; 
let derrotas = 2;
let saldoVitorias = vitorias - derrotas;
let nivel = "";

if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else if (vitorias >= 101) {
    nivel = "Imortal";
}

for (let i = 0; i < 1; i++) { // Laço de repetição (apenas para estrutura, não afeta a lógica)
    console.log(mensagem + `O ${nome} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}


