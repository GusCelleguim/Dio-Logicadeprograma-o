function combinandoNomes(primeiraPalavra) {
    // A variável precisa ser declarada com 'let' ou 'const' dentro da função
    let palavraPokemonusuario = primeiraPalavra + "saur";
    // A função deve retornar a variável 'palavraPokemonusuario'
    return palavraPokemonusuario;
  }
  
  // A variável 'primeiraPalavra' precisa ser uma string
  let primeiraPalavra = "buba";
  
  // Chamando a função corretamente e armazenando o resultado
  let palavraPokemonusuarioGerada = combinandoNomes(primeiraPalavra);
  
  // Exibindo a palavra gerada
  console.log(palavraPokemonusuarioGerada);
  