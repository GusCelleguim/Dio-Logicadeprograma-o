NUME### Tipos de Variáveis em JavaScript

Em JavaScript, os tipos de variáveis são amplamente categorizados em dois grupos: **primitivos** e **de referência**. Vamos explorar esses tipos com mais detalhes.

#### Tipos Primitivos

Os tipos primitivos são os mais básicos e incluem:

1. **String**
2. **Number**
3. **Boolean**
4. **Undefined**
5. **Null**
6. **Symbol** (introduzido no ECMAScript 6)
7. **BigInt** (introduzido no ECMAScript 2020)

##### String

Strings são usadas para armazenar texto. Elas são delimitadas por aspas simples (`'`), duplas (`"`), ou crases (`` ` ``) para strings multilinha e interpoladas.

```javascript
let nome = "Gustavo Celleguim";
let saudacao = 'Olá, mundo!';
let mensagem = `Bem vindo, ${nome}!`;

console.log(nome); // Saída: Gustavo Celleguim
console.log(saudacao); // Saída: Olá, mundo!
console.log(mensagem); // Saída: Bem vindo, Gustavo Celleguim!
```

##### Number

Variáveis do tipo `number` armazenam valores numéricos, incluindo inteiros e decimais.

```javascript
let idade = 25;
let altura = 1.75;

console.log(idade); // Saída: 25
console.log(altura); // Saída: 1.75
```

##### Boolean

Variáveis do tipo `boolean` armazenam valores lógicos: `true` (verdadeiro) ou `false` (falso).

```javascript
let isAdulto = true;
let temPermissao = false;

console.log(isAdulto); // Saída: true
console.log(temPermissao); // Saída: false
```

##### Undefined

Uma variável declarada que ainda não foi atribuída a um valor tem o valor `undefined`.

```javascript
let indefinido;
console.log(indefinido); // Saída: undefined
```

##### Null

`null` é um valor especial que representa a ausência intencional de qualquer valor de objeto.

```javascript
let nulo = null;
console.log(nulo); // Saída: null
```

##### Symbol

Um `symbol` é um valor único e imutável. É geralmente usado para identificar propriedades de objetos de maneira única.

```javascript
let simbolo = Symbol('descricao');
console.log(simbolo); // Saída: Symbol(descricao)
```

##### BigInt

`BigInt` é um tipo de dado que pode representar inteiros muito grandes.

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // Saída: 1234567890123456789012345678901234567890n
```

#### Tipos de Referência

Os tipos de referência são usados para armazenar coleções de dados e entidades mais complexas. Os principais tipos de referência incluem:

1. **Object**
2. **Array**
3. **Function**
4. **Date**
5. **RegExp**
6. **Map** e **Set**

##### Object

Um objeto é uma coleção de propriedades, onde cada propriedade é um par de chave-valor.

```javascript
let pessoa = {
    nome: "Gustavo Celleguim",
    idade: 25,
    isAdulto: true
};

console.log(pessoa); // Saída: {nome: "Gustavo Celleguim", idade: 25, isAdulto: true}
```

##### Array

Um array é uma lista ordenada de valores, que pode conter múltiplos tipos de dados.

```javascript
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true, null];

console.log(numeros); // Saída: [1, 2, 3, 4, 5]
console.log(misto); // Saída: [1, "texto", true, null]
```

##### Function

Funções são blocos de código projetados para realizar uma tarefa específica. Elas podem ser armazenadas em variáveis.

```javascript
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Gustavo")); // Saída: Olá, Gustavo!
```

##### Date

`Date` é usado para trabalhar com datas e horas.

```javascript
let agora = new Date();
console.log(agora); // Saída: A data e hora atuais
```

##### RegExp

`RegExp` (Expressão Regular) é usado para correspondência de padrões em strings.

```javascript
let padrao = /abc/;
console.log(padrao.test("abcdef")); // Saída: true
```

##### Map e Set

`Map` é uma coleção de pares chave-valor, enquanto `Set` é uma coleção de valores únicos.

```javascript
let mapa = new Map();
mapa.set('chave1', 'valor1');
console.log(mapa.get('chave1')); // Saída: valor1

let conjunto = new Set();
conjunto.add(1);
conjunto.add(1); // Ignorado porque 1 já está no conjunto
console.log(conjunto); // Saída: Set { 1 }
```

### Conclusão

Entender os tipos de variáveis em JavaScript é essencial para manipular dados de maneira eficaz. Variáveis primitivas armazenam valores simples, enquanto variáveis de referência podem armazenar coleções de dados e objetos complexos. Ao dominar esses tipos, você estará bem equipado para desenvolver aplicações robustas e eficientes.

Outros tipos de variáveis

|   |   |
|---|---|
|Tipo de Variável|Descrição|
|Variáveis numéricas|São usadas para armazenar valores numéricos.|
|Inteiro|Armazena números inteiros, como 1, 10, -5.|
|Ponto flutuante ou decimal|Armazena números com casas decimais, como 3.14, -0.5.|
|Números complexos|Armazena números complexos, como 2+3j.|
|Variáveis de texto|Usadas para armazenar sequências de caracteres.|
|String|Armazena uma sequência de caracteres, como "Olá, mundo!"|
|Caractere|Armazena um único caractere, como 'a', 'X', '@'.|
|Variáveis lógicas|Usadas para armazenar valores de verdadeiro ou falso.|
|Booleano|Armazena os valores True ou False.|
|Variáveis de data e hora|Utilizadas para representar datas e horários.|
|Data|Armazena datas, no formato AAAA-MM-DD.|
|Hora|Armazena horários, no formato HH:MM:SS.|