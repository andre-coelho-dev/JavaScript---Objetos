# JavaScript---Objetos

Aula - 1: O que são objetos

~~objeto.js~~

01 - O que são objetos

Nesta aula, começaremos a abordar a questão dos objetos em JavaScript.
Para isso, abriremos o Visual Studio Code com a pasta OBJETOS vazia e selecionaremos o segundo ícone para criarmos uma pasta.
Colocando o mouse por cima do ícone de pasta, será exibida a mensagem "New Folder" ("nova pasta") e ao selecionarmos ela, abrirá um campo abaixo em que digitaremos o nome que queremos atribuir ao diretório, no caso será "aula1".
Logo após, clicaremos no primeiro ícone ao lado da pasta OBJETOS para criar um arquivo dentro da pasta aula1, que chamaremos de "objeto.js".
Será aberto o arquivo objeto.js vazio. Nele, faremos um exemplo com as informações que vimos no curso anterior de arrays ("matrizes").
Vamos supor que temos uma lista com diversos CPFs ou alguma outra informação repetida, ou um tipo simples do dado. Chamaremos uma listaCPFs declarando a como uma const, e usaremos os colchetes "[]", para listar os valores.

objeto.js:

const listaCPFs = [1111111, 22222, 3333];

Uma lista de CPFs é uma estrutura de dados que armazena a mesma informação várias vezes. Por exemplo, no caso do CPF são vários CPFs diferentes.
Mas se usarmos essa mesma estrutura para guardar outro dado, por exemplo, sobre uma pessoa? Vamos criar uma const informacoesPessoa com os valores que desejamos saber sobre a pessoa.

 const listaCPFs = [1111111, 22222, 3333];

 const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

Com isso, temos valores que se tivéssemos mais de uma pessoa estariam repetindo. Vamos supor que temos mais uma pessoas:

 const listaCPFs = [1111111, 22222, 3333];

 const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

 const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

Observe que todos os campos estariam sendo repetidos: nome, idade e CPF. E não necessariamente precisamos de todos os campos repetidos. Podemos remover este segundo informacoesPessoa.Outro detalhe é: e se quisermos acessar o nome dessa pessoa?
Para isso, usaremos o console.log(), para visualizar o nome dessa pessoa. Pegaremos essa informação de informacoesPessoa, no índice 1, isso porque o nome é no índice 0 e o valor no índice 1.

 const listaCPFs = [1111111, 22222, 3333];

 const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

 console.log(informacoesPessoa[1]);

Porém, o número 1 não é tão intuitivo quando queremos saber o nome da pessoa. Seria mais interessante chamarmos as informações da pessoa e passar o nome.
Vamos supor que adicionaremos ou não outros campos, e cada um terá um número com certa informação repetida. Pode ocorrer alguma confusão nessas horas.
Para evitar isso, faremos outra estrutura de dados chamado objetos, e analisar como podemos lidar com esses dados. Abaixo do código do arquivo objeto.js, criaremos um objeto que armazena as informações de uma pessoa.
Criaremos um const objetoPessoa e atribuiremos com chaves "{}" alguns campos.

 const objetoPessoa = {

 };

Em JavaScript, um objeto é uma entidade independente com propriedades e tipos.
Podemos comparar com um copo, que possui uma cor, um formato, um peso, um material que foi feito, entre outras coisas. Essas informações são o que chamamos de propriedades de um objeto.
Por exemplo, ao nos referirmos a uma pessoa, nomeamos as propriedades de nome, idade e CPF. Logo, os objetos do JavaScript também vão ter essa característica de propriedades.
Como declaramos as propriedades em um objeto? Escrevemos a propriedade, o nome, por exemplo, atribuímos dois pontos ":" e inserimos o valor.

 const objetoPessoa = {
   nome: "Jose",
 };

Cada propriedade é separada por vírgula e quebramos a linha para ficar como se fosse uma lista, com uma propriedade e seu respectivo valor, um abaixo do outro, de cima para baixo.

 const listaCPFs = [1111111, 22222, 3333];

 const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

 console.log(informacoesPessoa[1]);

 const objetoPessoa = {
   idade: 32,
   nome: "Jose",
 };

Chamamos essa estrutura de cada propriedade de par de chave e valor, em que a chave é o nome da propriedade e o valor é o que está armazenado na propriedade.
Por exemplo, no nosso caso, a chave é o nome e o valor é José, já o outro campo a chave é idade e o valor é 32.
É importante destacar que a ordem com que declaramos essas propriedades, não importa. Isso porque não vamos acessá-las por posição.
O objeto com o nome José e idade 32, em suas propriedades, é a mesma coisa caso a idade estivesse na linha de baixo.
Nesta aula conhecemos a estrutura de dados que é o objeto, entendemos que ela não é ordenada e que as propriedades são um par chave-valor.
A seguir, aprenderemos como podemos acessar essas informações do objeto, ou seja, acessar essas propriedades.


02 - Acessando dados

~~acesso-ponto.js~~

Nesta aula, aprenderemos como acessar as propriedades de um objeto.
Vamos voltar ao VSCode, e dentro da pasta aula1, criaremos um arquivo chamado acesso_ponto.js. Para isso, selecionaremos a pasta aula1, clicaremos no primeiro ícone do lado direito da pasta OBJETOS e digitaremos "acesso_ponto.js".
No arquivo criado, vamos imaginar um trecho simplificado de uma aplicação que temos uma loja, em que temos clientes. Vamos modelar, isto é, traduzir algumas informações físicas ou características em um objeto. Logo, vamos modelar um cliente.
Iniciaremos o código com const cliente que vai receber as propriedades do objeto.

 acesso_ponto.js:

 const cliente = {

 }

Vamos inserir as propriedades e seus respectivos valores dentro das chaves "{}":

 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

Digamos que no projeto desejamos acessar qual o nome desse cliente e escrever uma mensagem customizada e exibi-la no terminal. Com esse objetivo, digitaremos console.log(), se colocarmos "cliente" dentro do parêntese, temos o objeto com todos os campos.

 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(cliente)

Após inserir essa linha no código, abriremos o terminal e chamaremos o node para executar esse código.

 node aula1/acesso_ponto.js
 {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 }

Note que foi exibido o objeto com todos os campos, sendo eles: nome, idade, cpf e e-mail. Mas não é isso que queremos, desejamos exibir somente o nome desse cliente.
Para isso, podemos usar o operador ponto ".". Voltando para o arquivo acesso_ponto.js, após cliente colocaremos ..

 console.log(cliente.)

Note que ao inserirmos o ponto, o próprio VSCode sugere as seguintes opções:

 cpf
 email
 idade
 nome
 abc cliente
 abc console
 abc log

São os dados separados do cliente, clicaremos em "nome".

 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(cliente.nome)

Salvaremos novamente o arquivo, clicando em "Ctrl + S" e voltaremos ao terminal, para executar o mesmo comando que rodamos anteriormente.

 node aula1/acesso_ponto.js
 Andre

Nos devolveu somente o nome André!
Voltando para o VSCode, vamos escrever uma mensagem customizada para melhorar a visualização. Com esse objetivo, vamos começar removendocliente.nome e escrevendo uma template string utilizando duas crases "":

 console.log(``)

Dentro dessas crases, vamos inserir a mensagem que desejamos exibir:

 console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

Lembrando que ${} é a marcação de um valor que será lido. De novo, salvaremos o arquivo e voltaremos ao terminal para executar o comando node.

 node aula1/acesso_ponto.js
 O nome do cliente é Andre e essa pessoa tem 32 anos.

Desse modo, temos uma mensagem customizada com os campos de um objeto. Portanto, podemos usar o operador ponto para retornar o valor de uma propriedade.
Outra coisa que podemos fazer, também, é chamar métodos desse valor recebido. Criaremos outro console.log() no final do arquivo e novamente escrever uma template string:

 console.log(`Os 3 primeiros dígitos do CPF são`);

Agora, podemos inserir o valor com a marcação ${} e chamar o cliente.cpf:

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf}`);

Dessa forma, será exibido o cpf com todos os dígitos. Mas como estamos operando uma string dentro desse valor, sabemos que as strings possuem alguns métodos.

Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

Código completo do arquivo acesso_ponto.js:

 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(
   `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
 );

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

Após inserirmos esse console.log, voltaremos ao terminal e rodaremos novamente o comando node.

 node aula1/acesso_ponto.js
 O nome do cliente é Andre e essa pessoa tem 32 anos.
 Os 3 primeiros dígitos do CPF são 112

Conseguimos exibir somente os três primeiros dígitos do CPF do cliente!
Assim, aprendemos que conseguimos acessar o valor de uma propriedade de um objeto e manipulá-lo.


03 - Acessando dados com colchetes

~~acesso-colchete.js~~

Na aula anterior, vimos como acessar uma propriedade usando o operador ponto, mas vamos entender que essa não é a única maneira que temos para acessá-las.
Para demonstrar essa outra maneira, podemos selecionar o código inteiro do arquivo acesso_ponto.js e copiá-lo usando "Ctrl + C".
Após copiar, à esquerda em "Explorer", clicaremos no primeiro ícone para criarmos um novo arquivo chamado "acesso_colchete.js" dentro da pasta aula1.
Com isso, ficamos os as seguintes pastas até o momento:

 aula1
 acesso_colchetes.js
 acesso_ponto.js
 objeto.js

 No arquivo acesso_colchete.js, colaremos o código que copiamos anteriormente.

 acesso_colchete.js:
 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(
   `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
 );

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

A maneira como podemos acessar as propriedades é usando o operador de colchetes, similar ao que usávamos ao usar arrays.
No template string do primeiro console.log, podemos acessar o nome usando os colchetes: client["nome"] e aplicamos da mesma forma para o campo idade.

 acesso_colchete.js:
 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(
   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
 );

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

Podemos salvar e validar voltando no terminal para executar o comando node.

 node aula1/acesso_colchete.js
 O nome do cliente é Andre e essa pessoa tem 32 anos.
 Os 3 primeiros dígitos do CPF são 112

Obtivemos o mesmo retorno de quando usamos o operador ponto. Mas qual a diferença entre essas formas?
Às vezes temos um objeto para receber, que não necessariamente sabemos no momento de escrever o código, quais são as propriedades.
Neste exemplo estamos com um caso simples, em que visualizamos o nome das propriedades sem problema nenhum. Porém, nem todos os casos são assim, principalmente se tiver muitas propriedades.
Vamos remover o segundo console.log:

 console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

Assim, ficamos com o arquivo acesso_colchete.js da seguinte forma até o momento:

 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(
   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
 );

Após o console.log vamos escrever um trecho de código assumindo que não sabemos os valores das chaves. Vamos supor que as chaves foram passadas como parâmetro para nós, por isso, no final no arquivo colocaremos uma const chaves = [].
Dentro dela, teremos um array com todos os valores da chave.

//código omitido
 const chaves = ["nome", "idade", "cpf", "email"];

O que podemos fazer com essa informação? Temos uma lista, vimos o método de lista e é possível percorrermos essa lista e capturar cada valor.
Para tal, usaremos chaves.forEach() e dentro passaremos uma função que será chamada para cada valor daquela chave.
A propriedade que vamos ter do array é cada uma das chaves, logo dentro do parêntese incluiremos outro parêntese e digitaremos "chave": chaves.forEach((chave)). Nela, teremos uma arrow function em que listaremos as chaves e seus respectivos valores e exibiremos usando console.log().
No console.log() usaremos uma template string para passarmos uma mensagem customizada, chamando a chave que desejamos exibir.

//código omitido

 chaves.forEach((chave) => {
   console.log(`A chave ${chave} tem valor`);
 });

Por estarmos assumindo que não sabemos os nomes das chaves, usamos o operador de colchetes dentro do objeto: ${cliente[chave].

//código omitido
  
   chaves.forEach((chave) => {
     console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
   });

Ou seja, o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade.

 acesso_colchete.js:
 const cliente = {
   nome: "Andre",
   idade: 32,
   cpf: "1122233345",
   email: "andre@dominio.com",
 };

 console.log(
   `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
 );

 const chaves = ["nome", "idade", "cpf", "email"];

 chaves.forEach((chave) => {
   console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
 });

Para validarmos, voltaremos ao terminal e executamos novamente o comando node.

 node aula1/acesso_colchete.js
 O nome do cliente é Andre e essa pessoa tem 32 anos.
 A chave nome tem valor Andre
 A chave idade tem valor 32
 A chave cpf nome tem valor 1122233345
 A chave email tem valor andre@dominio.com

Perceba que exibiu a mensagem do código anterior e agora temos todas as chaves listadas com seus respectivos valores.
Assim, aprendemos que com a sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que estamos escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e dos objetos.
Uma coisa que podemos fazer, também, é analisar o que acontece ao tentarmos acessar uma chave que não existe. Para testarmos, em const chaves incluiremos altura.

 const chaves = ["nome", "idade", "cpf", "email", "altura"];

Após feita essa alteração, salvaremos o arquivo e voltamos ao terminal para executar o comando node aula1/acesso_colchete.js.

 O nome do cliente é Andre e essa pessoa tem 32 anos.
 A chave nome tem valor Andre
 A chave idade tem valor 32
 A chave cpf nome tem valor 1122233345
 A chave email tem valor andre@dominio.com
 A chave altura tem valor undefined

A última linha é a chave altura, em que o valor foi devolvido como undefined ("indefinido"). O undefined é um valor reservado do JavaScript (sendo uma palavra especial) devolvido ao tentarmos acessar uma propriedade que não existe.
Não retorna erro e não vai quebrar o código, mas o campo é devolvido com o valor undefined.
Aprendemos que podemos acessar os campos de um objeto, e que temos a notação de ponto e de colchetes. Esta última surgiu para cenários em que, não necessariamente, sabemos quais campos acessaremos. E que ao acessarmos uma propriedade que não existe, o valor devolvido será undefined.


- Acesse os dados

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado. Observe a representação abaixo:

const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};

Ao tentar acessar pet.dataDeNascimento iremos obter a string ”12/03/2017”.
-> Podemos usar o operador . para acessar as propriedades que já conhecemos de um objeto.

Ao tentar acessar pet[“brinquedoFavorito”] iremos obter a string ”bolinha”.
-> Podemos utilizar o nome da propriedade como string dentro de colchetes [“propriedade”] para acessar as propriedades de um objeto de forma mais dinâmica.


04 - Adicionando e alterando

~~alterar.js~~

Agora que sabemos acessar os valores das propriedades dos objetos, é interessante aprendermos como manipular, alterar ou criar novas propriedades.
No VSCode, clicaremos no ícone "New File" ("Novo arquivo"), para criar um novo arquivo chamado "alterar.js" dentro da pasta aula1.
Dentro do arquivo criado, inserimos um novo objeto const pessoa e atribuímos usando o sinal de igual "=" bloco de chaves. Nele, teremos o nosso objeto.

 alterar.js:

 const pessoa = {

 }

Vamos atribuir ao objeto pessoa um atributo chamado nome, em que seu conteúdo será "Luma".

 const pessoa = {
     nome: "Luma", 
 }

Na linha seguinte, incluiremos uma propriedade chamada profissao:

 const pessoa = {
   nome: "Luma",
   profissao: "Engenheira",
 };

Assim, temos um objeto pessoa que contém duas propriedades. Sabemos que podemos aplicar o console.log() para saber o nome, para isso pedimos para exibir pessoa.nome, como parâmetro.

 //código omitido

 console.log(pessoa.nome);

Vamos rodar esse código voltando ao terminal e executando o comando node aula1/alterar.js.

 node aula1/alterar.js
 Luma

Como saída, retornou o nome "Luma". E se quisermos exibir o telefone dessa pessoa? Lembrando que esse campo não existe no nosso objeto.

//código omitido

 console.log(pessoa.telefone);

Vamos salvar o arquivo clicando nas teclas "Ctrl + S" e voltar ao terminal para executar mais uma vez o comando node.

 node aula1/alterar.js
 Luma
 undefined

Por ser uma propriedade que não existe dentro de um objeto, o retorno para esse cenário é a palavra undefined. Esta palavra representa algo que não foi iniciado ou definido.
Vamos fazer mais algumas inclusões para analisarmos. E se colocarmos pessoa.telefone, que recebe um número?

//código omitido

 pessoa.telefone = "11 2223333444";

Logo após, podemos exibir essa informação usando console log.

//código omitido

 pessoa.telefone = "11 2223333444";

 console.log(pessoa.telefone);

Código do arquivo alterar.js completo até o momento:

 const pessoa = {
   nome: "Luma",
   profissao: "Engenheira",
 };

 console.log(pessoa.nome);

 console.log(pessoa.telefone);

 pessoa.telefone = "11 2223333444";

 console.log(pessoa.telefone);

Para verificarmos o que vai acontecer, voltaremos ao terminal para executarmos o comando node aula1/alterar.js.

 Luma
 undefined
 11 2223333444

Antes de definirmos esse número de telefone, retornava como undefined. Mas após incluirmos no código, conseguimos devolver a propriedade.
Desse modo, descobrimos que se criarmos uma propriedade depois, vai funcionar. Ou seja, podemos adicionar propriedades mesmo depois do objeto estar criado.
Vamos supor que salvamos somente o primeiro nome da pessoa, mas agora temos o nome completo. O que acontece se inserirmos pessoa.nome = "Luma Silva";?

 pessoa.nome = "Luma Silva";

Logo após, vamos solicitar que seja exibido o objeto completo (todos os campos).

 pessoa.nome = "Luma Silva";

 console.log(pessoa);

Podemos salvar essas alterações e voltar ao terminal para executarmos o comando node mais uma vez.

 Luma
 undefined
 11 2223333444
 {
   nome: "Luma",
   profissao: "Engenheira",
     telefone: '11 2223333444'
 };

Nos retorna o nome "Luma", sendo o primeiro que solicitamos a exibição no código. Antes de inserirmos o número telefone, nos devolvia a palavra undefined por não estar definido. Logo após, passamos a receber esse telefone alterado e depois de alterarmos o nome também, o objeto final consta com o nome completo "Luma Silva".
Acessamos a chave nome, alteramos o valor que estava salvo nela e isso refletiu no objeto que solicitamos que fosse exibido.
O Javascript nos permite alterar, adicionar e remover campos, para manipularmos esses campos.
Se você estiver atento(a), talvez já tenha suspeitado de algo neste código que escrevemos juntos.

 alterar.js:

 const pessoa = {
   nome: "Luma",
   profissao: "Engenheira",
 };

 console.log(pessoa.nome);

 console.log(pessoa.telefone);

 pessoa.telefone = "11 2223333444";

 console.log(pessoa.telefone);

 pessoa.nome = "Luma Silva";

 console.log(pessoa);

Na primeira linha, usamos a palavra reservada const para declararmos a variável pessoa que guarda o objeto. Mas se é uma constante, como alteramos essa variável?
O que acontece é que a palavra reservada 'const' não nos permite reatribuir um objeto inteiro. Por exemplo, no final do arquivo vamos incluir uma const novaPessoa = {}.
Nele, incluiremos um nome "Pedro" e depois tentaremos fazer com que pessoa receba uma nova pessoa: pessoa = novaPessoa. Isto é, reatribuir o valor que está sendo armazenado, pegar um novo objeto e reatribuir na variável anterior.

// código omitido

 const novaPessoa = {
   nome: "Pedro",
 };

 pessoa = novaPessoa;

Após essa alteração, o arquivo alterar.js deve ficar da seguinte forma:

 const pessoa = {
   nome: "Luma",
   profissao: "Engenheira",
 };

 console.log(pessoa.nome);

 console.log(pessoa.telefone);

 pessoa.telefone = "11 2223333444";

 console.log(pessoa.telefone);

 pessoa.nome = "Luma Silva";

 console.log(pessoa);

 const novaPessoa = {
   nome: "Pedro",
 };

 pessoa = novaPessoa;

Agora, voltaremos ao terminal para executarmos novamente o comando node aula1/alterar.js.
Parte do erro selecionada pelo instrutor:

 TypeError: Assignment to constant variable.

Em português, atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.
Por enquanto, esse conhecimento é satisfatório para seguirmos com o curso. Nesta aula estudamos um pouco sobre objetos, sua estrutura, formas de acessar e manipular. Aprendemos também como alterar e criar as propriedades, mesmo após o objeto já ter sido criado.


- Para saber mais: tipos de variáveis e objetos

No último vídeo, vimos que podemos alterar e manipular as propriedades de um objeto mesmo quando o objeto está armazenado em uma variável do tipo const.
Temos um artigo na plataforma que explica as diferenças entre as variáveis que podemos declarar, mas vale lembrar que as variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.
-> https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?_gl=1*4a2um6*_ga*MTIyMzM4MDk5NC4xNjkyNzQ1NDk5*_ga_1EPWSW3PCS*MTY5NDExMzg3MC4xNC4xLjE2OTQxMTU4NDEuMC4wLjA.*_fplc*VFhUem41UndVNFFQRzN2TjB3RWp3dnpwTGdyUGx5WkE1RTJDYlB1VkdXQmg4SDB4Z1NXenNhT2tUNUslMkJiUTZFWDFGZURHVDhqRUQzZDlPNDM2QlFlWGRIWnEzNUEybnE1M3kyRSUyQm8xbjVRQ3NIcjk4Zzh4bTklMkYlMkJETUg2bnclM0QlM0Q.


- Para saber mais: como deletar uma propriedade?

Já vimos como acessar, alterar e adicionar valores em um objeto. Mas ainda faltou falarmos sobre um caso: e quando queremos deletar um conjunto de chave/valor?
Vamos considerar o objeto abaixo:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined

Também é possível utilizar a notação de colchetes:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.
Após remover as duas propriedades acima, o objeto agora está desta forma:

{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}

O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true


- Novos campos

Considere o seguinte código:

const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório, deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.

Para adicionar as novas propriedades precisamos somente informar o novo campo e o seu valor, ou seja,pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9" .Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos como pessoa.cpf.substring(0,4).
-> Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.


- Faça como eu fiz: criando objetos
Nesta aula, começamos a aprender sobre a estrutura de dados chamada de objetos no Javascript, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores.


- O que aprendemos?
Nessa aula, você aprendeu:
Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.



Aula - 2: Manipulação de objetos

~~tipos.js~~

Tipos de dados e valores

Na aula anterior, vimos algumas coisas que podemos armazenar em um objeto e neste vídeo aprofundaremos como e o que podemos guardar, conhecendo algumas estruturas mais elaboradas.

Voltaremos ao VSCode, e à esquerda clicaremos no segundo ícone que representa o "New folder". Chamaremos este novo arquivo de "aula2", nele seguiremos desenvolvendo o nosso projeto.

Agora, selecionando a pasta aula2, selecionaremos o primeiro ícone "New file" para criarmos uma pasta dentro da aula2 chamada "tipos.js ". Nele, criaremos um objeto cliente que analisamos em aulas passadas.

Vamos criar a const cliente, que vai armazenar um objeto.

tipos.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: "1155555550",
};

Por enquanto, nada de novo para nós. Mas podemos armazenar algumas estruturas mais elaboradas!

Por exemplo, em casos em que o usuário possui mais de um telefone. Desse modo, podemos incluir mais uma linha com um telefone2.

tipos.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: "1155555550",
    telefone2: "1144444440",
};

Nós já conhecemos uma forma de agrupar informações semelhantes: lista. Desejamos guardar esses dois telefones em uma lista, e essa lista deve ficar dentro de um objeto.

Por isso, copiaremos o número do telefone2 e colocaremos dentro dos colchetes junto com o outro número de telefone.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

Com isso, temos um array em que podemos guardar todos os números de telefones desejados. Incluiremos ao final o console log, para exibir essas informações do objeto.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

console.log(cliente);

Salvaremos este código e abriremos o terminal para executar o comando:

node aula2/tipos.js

{
  nome: "Joao",
    idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"]
};

Após selecionarmos a tecla "Enter", percebemos que este formato é aceito pelo Javascript. Conseguimos armazenar um array no objeto, também, precisamos acessar esse objeto, porque podemos querer alterar o array ou capturar um campo específico.

Para acessar o objeto, voltaremos ao VSCode e no console log do cliente, incluiremos .telefone para acessarmos uma propriedade dentro do objeto.

//código omitido

console.log(cliente.telefone);

Dessa forma, vamos acessar somente o array que contém os telefones. Podemos salvar essa alteração e voltar ao terminar para executarmos o comando node aula2/tipos.js mais uma vez.

["1155555550", "1144444440"]

Note que nos devolveu somente o array com os telefones. Este array está guardado em uma propriedade de um objeto.

Assim, conseguimos armazenar um array, e conseguimos estipular como seriam as operações e o que poderíamos fazer. Mas e se desejarmos guardar outro objeto?