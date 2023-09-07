const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "1122233345",
  email: "andre@dominio.com",
}

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});



// Acessando dados com colchetes

// Explicação

// Na aula anterior, vimos como acessar uma propriedade usando o operador ponto, mas vamos entender que essa não é a única maneira que temos para acessá-las.

// Para demonstrar essa outra maneira, podemos selecionar o código inteiro do arquivo acesso_ponto.js e copiá-lo usando "Ctrl + C".

// Após copiar, à esquerda em "Explorer", clicaremos no primeiro ícone para criarmos um novo arquivo chamado "acesso_colchete.js" dentro da pasta aula1.

// Com isso, ficamos os as seguintes pastas até o momento:

// aula1
// acesso_colchetes.js
// acesso_ponto.js
// objeto.js
// No arquivo acesso_colchete.js, colaremos o código que copiamos anteriormente.

// acesso_colchete.js:

// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(
//   `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
// );

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// A maneira como podemos acessar as propriedades é usando o operador de colchetes, similar ao que usávamos ao usar arrays.

// No template string do primeiro console.log, podemos acessar o nome usando os colchetes: client["nome"] e aplicamos da mesma forma para o campo idade.

// acesso_colchete.js:
// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(
//   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
// );

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// Podemos salvar e validar voltando no terminal para executar o comando node.

// node aula1/acesso_colchete.js
// O nome do cliente é Andre e essa pessoa tem 32 anos.
// Os 3 primeiros dígitos do CPF são 112

// Obtivemos o mesmo retorno de quando usamos o operador ponto. Mas qual a diferença entre essas formas?

// Às vezes temos um objeto para receber, que não necessariamente sabemos no momento de escrever o código, quais são as propriedades.

// Neste exemplo estamos com um caso simples, em que visualizamos o nome das propriedades sem problema nenhum. Porém, nem todos os casos são assim, principalmente se tiver muitas propriedades.

// Vamos remover o segundo console.log:

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// Assim, ficamos com o arquivo acesso_colchete.js da seguinte forma até o momento:

// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(
//   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
// );

// Após o console.log vamos escrever um trecho de código assumindo que não sabemos os valores das chaves. Vamos supor que as chaves foram passadas como parâmetro para nós, por isso, no final no arquivo colocaremos uma const chaves = [].

// Dentro dela, teremos um array com todos os valores da chave.

// //código omitido

// const chaves = ["nome", "idade", "cpf", "email"];

// O que podemos fazer com essa informação? Temos uma lista, vimos o método de lista e é possível percorrermos essa lista e capturar cada valor.

// Para tal, usaremos chaves.forEach() e dentro passaremos uma função que será chamada para cada valor daquela chave.

// A propriedade que vamos ter do array é cada uma das chaves, logo dentro do parêntese incluiremos outro parêntese e digitaremos "chave": chaves.forEach((chave)). Nela, teremos uma arrow function em que listaremos as chaves e seus respectivos valores e exibiremos usando console.log().

// No console.log() usaremos uma template string para passarmos uma mensagem customizada, chamando a chave que desejamos exibir.

// //código omitido

// chaves.forEach((chave) => {
//   console.log(`A chave ${chave} tem valor`);
// });

// Por estarmos assumindo que não sabemos os nomes das chaves, usamos o operador de colchetes dentro do objeto: ${cliente[chave].

//   //código omitido
  
//   chaves.forEach((chave) => {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
//   });

//   Ou seja, o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade.

// acesso_colchete.js:
// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(
//   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
// );

// const chaves = ["nome", "idade", "cpf", "email"];

// chaves.forEach((chave) => {
//   console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
// });

// Para validarmos, voltaremos ao terminal e executamos novamente o comando node.

// node aula1/acesso_colchete.js
// O nome do cliente é Andre e essa pessoa tem 32 anos.
// A chave nome tem valor Andre
// A chave idade tem valor 32
// A chave cpf nome tem valor 1122233345
// A chave email tem valor andre@dominio.com

// Perceba que exibiu a mensagem do código anterior e agora temos todas as chaves listadas com seus respectivos valores.

// Assim, aprendemos que com a sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que estamos escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e dos objetos.

// Uma coisa que podemos fazer, também, é analisar o que acontece ao tentarmos acessar uma chave que não existe. Para testarmos, em const chaves incluiremos altura.

// const chaves = ["nome", "idade", "cpf", "email", "altura"];

// Após feita essa alteração, salvaremos o arquivo e voltamos ao terminal para executar o comando node aula1/acesso_colchete.js.

// O nome do cliente é Andre e essa pessoa tem 32 anos.
// A chave nome tem valor Andre
// A chave idade tem valor 32
// A chave cpf nome tem valor 1122233345
// A chave email tem valor andre@dominio.com
// A chave altura tem valor undefined

// A última linha é a chave altura, em que o valor foi devolvido como undefined ("indefinido"). O undefined é um valor reservado do JavaScript (sendo uma palavra especial) devolvido ao tentarmos acessar uma propriedade que não existe.

// Não retorna erro e não vai quebrar o código, mas o campo é devolvido com o valor undefined.

// Aprendemos que podemos acessar os campos de um objeto, e que temos a notação de ponto e de colchetes. Esta última surgiu para cenários em que, não necessariamente, sabemos quais campos acessaremos. E que ao acessarmos uma propriedade que não existe, o valor devolvido será undefined.