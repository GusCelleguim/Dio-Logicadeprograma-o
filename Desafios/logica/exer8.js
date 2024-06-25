// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque = '';
  
      // Estrutura de decisão para determinar o tipo de ataque
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'realizou um ataque desconhecido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.nome} ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis com diferentes tipos
  let mago = new Heroi('Gustavo Celleguim', 18, 'mago');
  let guerreiro = new Heroi('Gustavo Celleguim', 18, 'guerreiro');
  let monge = new Heroi('Gustavo Celleguim', 18, 'monge');
  let ninja = new Heroi('Gustavo Celleguim', 18, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar(); // O Gustavo Celleguim mago atacou usando magia
  guerreiro.atacar(); // O Gustavo Celleguim guerreiro atacou usando espada
  monge.atacar(); // O Gustavo Celleguim monge atacou usando artes marciais
  ninja.atacar(); // O Gustavo Celleguim ninja atacou usando shuriken
 