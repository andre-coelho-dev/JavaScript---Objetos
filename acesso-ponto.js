const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "1122233345",
  email: "andre@dominio.com",
}

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);



// Acessando dados

// Explicação

// Nesta aula, aprenderemos como acessar as propriedades de um objeto.

// Vamos voltar ao VSCode, e dentro da pasta aula1, criaremos um arquivo chamado acesso_ponto.js. Para isso, selecionaremos a pasta aula1, clicaremos no primeiro ícone do lado direito da pasta OBJETOS e digitaremos "acesso_ponto.js".

// No arquivo criado, vamos imaginar um trecho simplificado de uma aplicação que temos uma loja, em que temos clientes. Vamos modelar, isto é, traduzir algumas informações físicas ou características em um objeto. Logo, vamos modelar um cliente.

// Iniciaremos o código com const cliente que vai receber as propriedades do objeto.

// acesso_ponto.js:

// const cliente = {

// }

// Vamos inserir as propriedades e seus respectivos valores dentro das chaves "{}":

// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// Digamos que no projeto desejamos acessar qual o nome desse cliente e escrever uma mensagem customizada e exibi-la no terminal. Com esse objetivo, digitaremos console.log(), se colocarmos "cliente" dentro do parêntese, temos o objeto com todos os campos.

// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(cliente)

// Após inserir essa linha no código, abriremos o terminal e chamaremos o node para executar esse código.

// node aula1/acesso_ponto.js
// {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// }

// Note que foi exibido o objeto com todos os campos, sendo eles: nome, idade, cpf e e-mail. Mas não é isso que queremos, desejamos exibir somente o nome desse cliente.

// Para isso, podemos usar o operador ponto ".". Voltando para o arquivo acesso_ponto.js, após cliente colocaremos ..

// console.log(cliente.)

// Note que ao inserirmos o ponto, o próprio VSCode sugere as seguintes opções:

// cpf
// email
// idade
// nome
// abc cliente
// abc console
// abc log
// São os dados separados do cliente, clicaremos em "nome".

// const cliente = {
//   nome: "Andre",
//   idade: 32,
//   cpf: "1122233345",
//   email: "andre@dominio.com",
// };

// console.log(cliente.nome)

// Salvaremos novamente o arquivo, clicando em "Ctrl + S" e voltaremos ao terminal, para executar o mesmo comando que rodamos anteriormente.

// node aula1/acesso_ponto.js
// Andre

// Nos devolveu somente o nome André!

// Voltando para o VSCode, vamos escrever uma mensagem customizada para melhorar a visualização. Com esse objetivo, vamos começar removendocliente.nome e escrevendo uma template string utilizando duas crases "":

// console.log(``)

// Dentro dessas crases, vamos inserir a mensagem que desejamos exibir:

// console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

// Lembrando que ${} é a marcação de um valor que será lido. De novo, salvaremos o arquivo e voltaremos ao terminal para executar o comando node.

// node aula1/acesso_ponto.js
// O nome do cliente é Andre e essa pessoa tem 32 anos.

// Desse modo, temos uma mensagem customizada com os campos de um objeto. Portanto, podemos usar o operador ponto para retornar o valor de uma propriedade.

// Outra coisa que podemos fazer, também, é chamar métodos desse valor recebido. Criaremos outro console.log() no final do arquivo e novamente escrever uma template string:

// console.log(`Os 3 primeiros dígitos do CPF são`);

// Agora, podemos inserir o valor com a marcação ${} e chamar o cliente.cpf:

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf}`);

// Dessa forma, será exibido o cpf com todos os dígitos. Mas como estamos operando uma string dentro desse valor, sabemos que as strings possuem alguns métodos.

// Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.

// console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

// Código completo do arquivo acesso_ponto.js:

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

// Após inserirmos esse console.log, voltaremos ao terminal e rodaremos novamente o comando node.

// node aula1/acesso_ponto.js
// O nome do cliente é Andre e essa pessoa tem 32 anos.
// Os 3 primeiros dígitos do CPF são 112

// Conseguimos exibir somente os três primeiros dígitos do CPF do cliente!

// Assim, aprendemos que conseguimos acessar o valor de uma propriedade de um objeto e manipulá-lo.