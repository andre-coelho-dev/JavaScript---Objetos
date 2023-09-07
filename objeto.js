const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

console.log(informacoesPessoa[1]);

const objetoPessoa = {
  idade: 32,
  nome: "Jose"
};



// O que são objetos

// Explicação

// Nesta aula, começaremos a abordar a questão dos objetos em JavaScript.

// Para isso, abriremos o Visual Studio Code com a pasta OBJETOS vazia e selecionaremos o segundo ícone para criarmos uma pasta.

// Colocando o mouse por cima do ícone de pasta, será exibida a mensagem "New Folder" ("nova pasta") e ao selecionarmos ela, abrirá um campo abaixo em que digitaremos o nome que queremos atribuir ao diretório, no caso será "aula1".

// Logo após, clicaremos no primeiro ícone ao lado da pasta OBJETOS para criar um arquivo dentro da pasta aula1, que chamaremos de "objeto.js".

// Será aberto o arquivo objeto.js vazio. Nele, faremos um exemplo com as informações que vimos no curso anterior de arrays ("matrizes").

// Vamos supor que temos uma lista com diversos CPFs ou alguma outra informação repetida, ou um tipo simples do dado. Chamaremos uma listaCPFs declarando a como uma const, e usaremos os colchetes "[]", para listar os valores.

// objeto.js:

// const listaCPFs = [1111111, 22222, 3333];

// Uma lista de CPFs é uma estrutura de dados que armazena a mesma informação várias vezes. Por exemplo, no caso do CPF são vários CPFs diferentes.

// Mas se usarmos essa mesma estrutura para guardar outro dado, por exemplo, sobre uma pessoa? Vamos criar uma const informacoesPessoa com os valores que desejamos saber sobre a pessoa.

// const listaCPFs = [1111111, 22222, 3333];

// const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// Com isso, temos valores que se tivéssemos mais de uma pessoa estariam repetindo. Vamos supor que temos mais uma pessoas:

// const listaCPFs = [1111111, 22222, 3333];

// const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// Observe que todos os campos estariam sendo repetidos: nome, idade e CPF. E não necessariamente precisamos de todos os campos repetidos. Podemos remover este segundo informacoesPessoa.Outro detalhe é: e se quisermos acessar o nome dessa pessoa?

// Para isso, usaremos o console.log(), para visualizar o nome dessa pessoa. Pegaremos essa informação de informacoesPessoa, no índice 1, isso porque o nome é no índice 0 e o valor no índice 1.

// const listaCPFs = [1111111, 22222, 3333];

// const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// console.log(informacoesPessoa[1]);

// Porém, o número 1 não é tão intuitivo quando queremos saber o nome da pessoa. Seria mais interessante chamarmos as informações da pessoa e passar o nome.

// Vamos supor que adicionaremos ou não outros campos, e cada um terá um número com certa informação repetida. Pode ocorrer alguma confusão nessas horas.

// Para evitar isso, faremos outra estrutura de dados chamado objetos, e analisar como podemos lidar com esses dados. Abaixo do código do arquivo objeto.js, criaremos um objeto que armazena as informações de uma pessoa.

// Criaremos um const objetoPessoa e atribuiremos com chaves "{}" alguns campos.

// const objetoPessoa = {

// };

// Em JavaScript, um objeto é uma entidade independente com propriedades e tipos.

// Podemos comparar com um copo, que possui uma cor, um formato, um peso, um material que foi feito, entre outras coisas. Essas informações são o que chamamos de propriedades de um objeto.

// Por exemplo, ao nos referirmos a uma pessoa, nomeamos as propriedades de nome, idade e CPF. Logo, os objetos do JavaScript também vão ter essa característica de propriedades.

// Como declaramos as propriedades em um objeto? Escrevemos a propriedade, o nome, por exemplo, atribuímos dois pontos ":" e inserimos o valor.

// const objetoPessoa = {
//   nome: "Jose",
// };

// Cada propriedade é separada por vírgula e quebramos a linha para ficar como se fosse uma lista, com uma propriedade e seu respectivo valor, um abaixo do outro, de cima para baixo.

// const listaCPFs = [1111111, 22222, 3333];

// const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

// console.log(informacoesPessoa[1]);

// const objetoPessoa = {
//   idade: 32,
//   nome: "Jose",
// };

// Chamamos essa estrutura de cada propriedade de par de chave e valor, em que a chave é o nome da propriedade e o valor é o que está armazenado na propriedade.

// Por exemplo, no nosso caso, a chave é o nome e o valor é José, já o outro campo a chave é idade e o valor é 32.

// É importante destacar que a ordem com que declaramos essas propriedades, não importa. Isso porque não vamos acessá-las por posição.

// O objeto com o nome José e idade 32, em suas propriedades, é a mesma coisa caso a idade estivesse na linha de baixo.

// Nesta aula conhecemos a estrutura de dados que é o objeto, entendemos que ela não é ordenada e que as propriedades são um par chave-valor.

// A seguir, aprenderemos como podemos acessar essas informações do objeto, ou seja, acessar essas propriedades.