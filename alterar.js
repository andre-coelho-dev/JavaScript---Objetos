const pessoa = {
  nome: "luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 222333444"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva"

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa



// Adicionando e alterando

// Explicação

// Agora que sabemos acessar os valores das propriedades dos objetos, é interessante aprendermos como manipular, alterar ou criar novas propriedades.

// No VSCode, clicaremos no ícone "New File" ("Novo arquivo"), para criar um novo arquivo chamado "alterar.js" dentro da pasta aula1.

// Dentro do arquivo criado, inserimos um novo objeto const pessoa e atribuímos usando o sinal de igual "=" bloco de chaves. Nele, teremos o nosso objeto.

// alterar.js:

// const pessoa = {

// }

// Vamos atribuir ao objeto pessoa um atributo chamado nome, em que seu conteúdo será "Luma".

// const pessoa = {
//     nome: "Luma", 
// }

// Na linha seguinte, incluiremos uma propriedade chamada profissao:

// const pessoa = {
//   nome: "Luma",
//   profissao: "Engenheira",
// };

// Assim, temos um objeto pessoa que contém duas propriedades. Sabemos que podemos aplicar o console.log() para saber o nome, para isso pedimos para exibir pessoa.nome, como parâmetro.

// //código omitido

// console.log(pessoa.nome);

// Vamos rodar esse código voltando ao terminal e executando o comando node aula1/alterar.js.

// node aula1/alterar.js
// Luma

// Como saída, retornou o nome "Luma". E se quisermos exibir o telefone dessa pessoa? Lembrando que esse campo não existe no nosso objeto.

// //código omitido

// console.log(pessoa.telefone);

// Vamos salvar o arquivo clicando nas teclas "Ctrl + S" e voltar ao terminal para executar mais uma vez o comando node.

// node aula1/alterar.js
// Luma
// undefined

// Por ser uma propriedade que não existe dentro de um objeto, o retorno para esse cenário é a palavra undefined. Esta palavra representa algo que não foi iniciado ou definido.

// Vamos fazer mais algumas inclusões para analisarmos. E se colocarmos pessoa.telefone, que recebe um número?

// //código omitido

// pessoa.telefone = "11 2223333444";

// Logo após, podemos exibir essa informação usando console log.

// //código omitido

// pessoa.telefone = "11 2223333444";

// console.log(pessoa.telefone);

// Código do arquivo alterar.js completo até o momento:

// const pessoa = {
//   nome: "Luma",
//   profissao: "Engenheira",
// };

// console.log(pessoa.nome);

// console.log(pessoa.telefone);

// pessoa.telefone = "11 2223333444";

// console.log(pessoa.telefone);

// Para verificarmos o que vai acontecer, voltaremos ao terminal para executarmos o comando node aula1/alterar.js.

// Luma
// undefined
// 11 2223333444

// Antes de definirmos esse número de telefone, retornava como undefined. Mas após incluirmos no código, conseguimos devolver a propriedade.

// Desse modo, descobrimos que se criarmos uma propriedade depois, vai funcionar. Ou seja, podemos adicionar propriedades mesmo depois do objeto estar criado.

// Vamos supor que salvamos somente o primeiro nome da pessoa, mas agora temos o nome completo. O que acontece se inserirmos pessoa.nome = "Luma Silva";?

// pessoa.nome = "Luma Silva";

// Logo após, vamos solicitar que seja exibido o objeto completo (todos os campos).

// pessoa.nome = "Luma Silva";

// console.log(pessoa);

// Podemos salvar essas alterações e voltar ao terminal para executarmos o comando node mais uma vez.

// Luma
// undefined
// 11 2223333444
// {
//   nome: "Luma",
//   profissao: "Engenheira",
//     telefone: '11 2223333444'
// };

// Nos retorna o nome "Luma", sendo o primeiro que solicitamos a exibição no código. Antes de inserirmos o número telefone, nos devolvia a palavra undefined por não estar definido. Logo após, passamos a receber esse telefone alterado e depois de alterarmos o nome também, o objeto final consta com o nome completo "Luma Silva".

// Acessamos a chave nome, alteramos o valor que estava salvo nela e isso refletiu no objeto que solicitamos que fosse exibido.

// O Javascript nos permite alterar, adicionar e remover campos, para manipularmos esses campos.

// Se você estiver atento(a), talvez já tenha suspeitado de algo neste código que escrevemos juntos.

// alterar.js:

// const pessoa = {
//   nome: "Luma",
//   profissao: "Engenheira",
// };

// console.log(pessoa.nome);

// console.log(pessoa.telefone);

// pessoa.telefone = "11 2223333444";

// console.log(pessoa.telefone);

// pessoa.nome = "Luma Silva";

// console.log(pessoa);

// Na primeira linha, usamos a palavra reservada const para declararmos a variável pessoa que guarda o objeto. Mas se é uma constante, como alteramos essa variável?

// O que acontece é que a palavra reservada 'const' não nos permite reatribuir um objeto inteiro. Por exemplo, no final do arquivo vamos incluir uma const novaPessoa = {}.

// Nele, incluiremos um nome "Pedro" e depois tentaremos fazer com que pessoa receba uma nova pessoa: pessoa = novaPessoa. Isto é, reatribuir o valor que está sendo armazenado, pegar um novo objeto e reatribuir na variável anterior.

// // código omitido

// const novaPessoa = {
//   nome: "Pedro",
// };

// pessoa = novaPessoa;

// Após essa alteração, o arquivo alterar.js deve ficar da seguinte forma:

// const pessoa = {
//   nome: "Luma",
//   profissao: "Engenheira",
// };

// console.log(pessoa.nome);

// console.log(pessoa.telefone);

// pessoa.telefone = "11 2223333444";

// console.log(pessoa.telefone);

// pessoa.nome = "Luma Silva";

// console.log(pessoa);

// const novaPessoa = {
//   nome: "Pedro",
// };

// pessoa = novaPessoa;

// Agora, voltaremos ao terminal para executarmos novamente o comando node aula1/alterar.js.

// Parte do erro selecionada pelo instrutor:

// TypeError: Assignment to constant variable.

// Em português, atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.

// Por enquanto, esse conhecimento é satisfatório para seguirmos com o curso. Nesta aula estudamos um pouco sobre objetos, sua estrutura, formas de acessar e manipular. Aprendemos também como alterar e criar as propriedades, mesmo após o objeto já ter sido criado.