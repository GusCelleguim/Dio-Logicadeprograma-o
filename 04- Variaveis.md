### O Que São Variáveis

Variáveis são espaços de armazenamento usados em programação para guardar valores temporários que podem ser manipulados e utilizados ao longo do código. Pense nelas como caixas com etiquetas onde você pode colocar informações como números, textos ou outros tipos de dados.

#### Declarando uma Variável

Para declarar uma variável em JavaScript, você usa as palavras-chave `let`, `const` ou `var`. Aqui está um exemplo simples de declaração e atribuição de valor a uma variável:

```javascript
let nome = "Gustavo Celleguim";
```

Neste exemplo, `let` é a palavra-chave usada para declarar a variável, `nome` é o nome da variável, e `"Gustavo Celleguim"` é o valor armazenado na variável.

#### Concatenando uma Variável

Concatenar significa unir ou juntar valores. Em JavaScript, você pode concatenar strings (cadeias de caracteres) usando o operador `+`.

```javascript
let nome = "Gustavo Celleguim";
console.log("Bem vindo, " + nome + "!");
console.log("Você entrou no servidor, " + nome + ".");
```

Neste exemplo, estamos unindo a string `"Bem vindo, "` com o valor da variável `nome`, e o resultado será `"Bem vindo, Gustavo Celleguim!"`.

#### Constantes e Variáveis

Em JavaScript, `const` é usado para declarar constantes, que são variáveis cujo valor não pode ser alterado após a atribuição inicial. Já `let` e `var` são usadas para declarar variáveis que podem ter seus valores alterados.

```javascript
const mensagem = "Bem vindo à sala de aula";
let nome = "Gustavo Celleguim";

console.log(mensagem + ", " + nome + "!");
```

No exemplo acima, `mensagem` é uma constante e `nome` é uma variável. A mensagem concatenada será `"Bem vindo à sala de aula, Gustavo Celleguim!"`.

#### Exemplo Completo

Vamos juntar todos os conceitos mencionados em um único exemplo:

```javascript
// Declarando variáveis
let nome = "Gustavo Celleguim";

// Declarando constantes
const mensagem = "Bem vindo à sala de aula";

// Concatenando variáveis e constantes
console.log(mensagem + ", " + nome + "!");

// Adicionando mais uma notificação
const notificacao = "Você entrou no servidor";
console.log(notificacao + ", " + nome + ".");
```

#### Saída Esperada

Ao executar o código acima, a saída no console será:

```
Bem vindo à sala de aula, Gustavo Celleguim!
Você entrou no servidor, Gustavo Celleguim.
```

### Conclusão

Variáveis e constantes são fundamentais na programação, permitindo armazenar e manipular dados de forma eficiente. Ao entender como declarar, concatenar e utilizar esses elementos, você poderá criar programas mais dinâmicos e funcionais. Lembre-se, constantes são imutáveis após a declaração, enquanto variáveis podem ter seus valores alterados conforme necessário.