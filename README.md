# JavaScript - Objetos

## Aula - 01: O que são objetos

```javascript
objeto.js
```

### O que são objetos
***
Nesta aula, começaremos a abordar a questão dos objetos em JavaScript.
Para isso, abriremos o Visual Studio Code com a pasta OBJETOS vazia e selecionaremos o segundo ícone para criarmos uma pasta.
Colocando o mouse por cima do ícone de pasta, será exibida a mensagem "New Folder" ("nova pasta") e ao selecionarmos ela, abrirá um campo abaixo em que digitaremos o nome que queremos atribuir ao diretório, no caso será "aula1".
Logo após, clicaremos no primeiro ícone ao lado da pasta OBJETOS para criar um arquivo dentro da pasta aula1, que chamaremos de "objeto.js".
Será aberto o arquivo objeto.js vazio. Nele, faremos um exemplo com as informações que vimos no curso anterior de arrays ("matrizes").
Vamos supor que temos uma lista com diversos CPFs ou alguma outra informação repetida, ou um tipo simples do dado. Chamaremos uma listaCPFs declarando a como uma const, e usaremos os colchetes "[]", para listar os valores.

```javascript
objeto.js
```
```javascript
const listaCPFs = [1111111, 22222, 3333];
```

Uma lista de CPFs é uma estrutura de dados que armazena a mesma informação várias vezes. Por exemplo, no caso do CPF são vários CPFs diferentes.
Mas se usarmos essa mesma estrutura para guardar outro dado, por exemplo, sobre uma pessoa? Vamos criar uma const informacoesPessoa com os valores que desejamos saber sobre a pessoa.

```javascript
const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];
```
Com isso, temos valores que se tivéssemos mais de uma pessoa estariam repetindo. Vamos supor que temos mais uma pessoas:

```javascript
const listaCPFs = [1111111, 22222, 3333];
   
const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];
    
const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];
```

Observe que todos os campos estariam sendo repetidos: nome, idade e CPF. E não necessariamente precisamos de todos os campos repetidos. Podemos remover este segundo informacoesPessoa.Outro detalhe é: e se quisermos acessar o nome dessa pessoa?
Para isso, usaremos o console.log(), para visualizar o nome dessa pessoa. Pegaremos essa informação de informacoesPessoa, no índice 1, isso porque o nome é no índice 0 e o valor no índice 1.

```javascript
const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

console.log(informacoesPessoa[1]);
```

Porém, o número 1 não é tão intuitivo quando queremos saber o nome da pessoa. Seria mais interessante chamarmos as informações da pessoa e passar o nome.
Vamos supor que adicionaremos ou não outros campos, e cada um terá um número com certa informação repetida. Pode ocorrer alguma confusão nessas horas.
Para evitar isso, faremos outra estrutura de dados chamado objetos, e analisar como podemos lidar com esses dados. Abaixo do código do arquivo objeto.js, criaremos um objeto que armazena as informações de uma pessoa.
Criaremos um const objetoPessoa e atribuiremos com chaves "{}" alguns campos.

```javascript
const objetoPessoa = {

};
```

Em JavaScript, um objeto é uma entidade independente com propriedades e tipos.
Podemos comparar com um copo, que possui uma cor, um formato, um peso, um material que foi feito, entre outras coisas. Essas informações são o que chamamos de propriedades de um objeto.
Por exemplo, ao nos referirmos a uma pessoa, nomeamos as propriedades de nome, idade e CPF. Logo, os objetos do JavaScript também vão ter essa característica de propriedades.
Como declaramos as propriedades em um objeto? Escrevemos a propriedade, o nome, por exemplo, atribuímos dois pontos ":" e inserimos o valor.

```javascript
const objetoPessoa = {
  nome: "Jose",
};
```

Cada propriedade é separada por vírgula e quebramos a linha para ficar como se fosse uma lista, com uma propriedade e seu respectivo valor, um abaixo do outro, de cima para baixo.

```javascript
const listaCPFs = [1111111, 22222, 3333];

const informacoesPessoa = ["nome", "Jose", "idade", 32, "CPF", "1111222333"];

console.log(informacoesPessoa[1]);

const objetoPessoa = {
  idade: 32,
  nome: "Jose",
};
```

Chamamos essa estrutura de cada propriedade de par de chave e valor, em que a chave é o nome da propriedade e o valor é o que está armazenado na propriedade.
Por exemplo, no nosso caso, a chave é o nome e o valor é José, já o outro campo a chave é idade e o valor é 32.
É importante destacar que a ordem com que declaramos essas propriedades, não importa. Isso porque não vamos acessá-las por posição.
O objeto com o nome José e idade 32, em suas propriedades, é a mesma coisa caso a idade estivesse na linha de baixo.
Nesta aula conhecemos a estrutura de dados que é o objeto, entendemos que ela não é ordenada e que as propriedades são um par chave-valor.
A seguir, aprenderemos como podemos acessar essas informações do objeto, ou seja, acessar essas propriedades.


### Acessando dados
***
```javascript
acesso-ponto.js
```

Nesta aula, aprenderemos como acessar as propriedades de um objeto.
Vamos voltar ao VSCode, e dentro da pasta aula1, criaremos um arquivo chamado acesso_ponto.js. Para isso, selecionaremos a pasta aula1, clicaremos no primeiro ícone do lado direito da pasta OBJETOS e digitaremos "acesso_ponto.js".
No arquivo criado, vamos imaginar um trecho simplificado de uma aplicação que temos uma loja, em que temos clientes. Vamos modelar, isto é, traduzir algumas informações físicas ou características em um objeto. Logo, vamos modelar um cliente.
Iniciaremos o código com const cliente que vai receber as propriedades do objeto.

```javascript
acesso-ponto.js
```
```javascript
const cliente = {

}
```

Vamos inserir as propriedades e seus respectivos valores dentro das chaves "{}":

```javascript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
```

Digamos que no projeto desejamos acessar qual o nome desse cliente e escrever uma mensagem customizada e exibi-la no terminal. Com esse objetivo, digitaremos console.log(), se colocarmos "cliente" dentro do parêntese, temos o objeto com todos os campos.

```javascript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
```
```javascript
console.log(cliente)
```

Após inserir essa linha no código, abriremos o terminal e chamaremos o node para executar esse código.

```javascript
acesso-ponto.js
```
```javascript
{
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
}
```

Note que foi exibido o objeto com todos os campos, sendo eles: nome, idade, cpf e e-mail. Mas não é isso que queremos, desejamos exibir somente o nome desse cliente.
Para isso, podemos usar o operador ponto ".". Voltando para o arquivo acesso_ponto.js, após cliente colocaremos ..

```javascript
console.log(cliente.);
```

Note que ao inserirmos o ponto, o próprio VSCode sugere as seguintes opções:

```git
cpf
email
idade
nome
abc cliente
abc console
abc log
```

São os dados separados do cliente, clicaremos em "nome".

```javascript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};
```
```javascript
console.log(cliente.nome)
```

Salvaremos novamente o arquivo, clicando em "Ctrl + S" e voltaremos ao terminal, para executar o mesmo comando que rodamos anteriormente.

```javascript
acesso-ponto.js
```
```git
Andre
```

Nos devolveu somente o nome André!
Voltando para o VSCode, vamos escrever uma mensagem customizada para melhorar a visualização. Com esse objetivo, vamos começar removendocliente.nome e escrevendo uma template string utilizando duas crases "":

```javascript
console.log(``)
```

Dentro dessas crases, vamos inserir a mensagem que desejamos exibir:

```javascript
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
```

Lembrando que ${} é a marcação de um valor que será lido. De novo, salvaremos o arquivo e voltaremos ao terminal para executar o comando node.

```javascript
acesso-ponto.js
```
```git
O nome do cliente é Andre e essa pessoa tem 32 anos.
```

Desse modo, temos uma mensagem customizada com os campos de um objeto. Portanto, podemos usar o operador ponto para retornar o valor de uma propriedade.
Outra coisa que podemos fazer, também, é chamar métodos desse valor recebido. Criaremos outro console.log() no final do arquivo e novamente escrever uma template string:

```javascript
console.log(`Os 3 primeiros dígitos do CPF são`);
```

Agora, podemos inserir o valor com a marcação ${} e chamar o cliente.cpf:

```javascript
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf}`);
```

Dessa forma, será exibido o cpf com todos os dígitos. Mas como estamos operando uma string dentro desse valor, sabemos que as strings possuem alguns métodos.
Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.

```javascript
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
```

Código completo do arquivo acesso_ponto.js:

```javascript
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
```

Após inserirmos esse console.log, voltaremos ao terminal e rodaremos novamente o comando node.

```javascript
acesso-ponto.js
```
```git
O nome do cliente é Andre e essa pessoa tem 32 anos.

Os 3 primeiros dígitos do CPF são 112
```

Conseguimos exibir somente os três primeiros dígitos do CPF do cliente!
Assim, aprendemos que conseguimos acessar o valor de uma propriedade de um objeto e manipulá-lo.


### Acessando dados com colchetes
***
```javascript
acesso-colchete.js
```

Na aula anterior, vimos como acessar uma propriedade usando o operador ponto, mas vamos entender que essa não é a única maneira que temos para acessá-las.
Para demonstrar essa outra maneira, podemos selecionar o código inteiro do arquivo acesso_ponto.js e copiá-lo usando "Ctrl + C".
Após copiar, à esquerda em "Explorer", clicaremos no primeiro ícone para criarmos um novo arquivo chamado "acesso_colchete.js" dentro da pasta aula1.
Com isso, ficamos os as seguintes pastas até o momento:

```git
aula1
acesso_colchetes.js
acesso_ponto.js
objeto.js
```

 No arquivo acesso_colchete.js, colaremos o código que copiamos anteriormente.

```javascript
acesso_colchete.js
```
```javascript
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
```
A maneira como podemos acessar as propriedades é usando o operador de colchetes, similar ao que usávamos ao usar arrays.
No template string do primeiro console.log, podemos acessar o nome usando os colchetes: client["nome"] e aplicamos da mesma forma para o campo idade.

```javascript
acesso_colchete.js:
```
```javascript
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
```
Podemos salvar e validar voltando no terminal para executar o comando node.

```javascript
acesso-colchete.js
```
```git
O nome do cliente é Andre e essa pessoa tem 32 anos.

Os 3 primeiros dígitos do CPF são 112
```
Obtivemos o mesmo retorno de quando usamos o operador ponto. Mas qual a diferença entre essas formas?
Às vezes temos um objeto para receber, que não necessariamente sabemos no momento de escrever o código, quais são as propriedades.
Neste exemplo estamos com um caso simples, em que visualizamos o nome das propriedades sem problema nenhum. Porém, nem todos os casos são assim, principalmente se tiver muitas propriedades.
Vamos remover o segundo console.log:

```javascript
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
```

Assim, ficamos com o arquivo acesso_colchete.js da seguinte forma até o momento:

```javascript
const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);
```
Após o console.log vamos escrever um trecho de código assumindo que não sabemos os valores das chaves. Vamos supor que as chaves foram passadas como parâmetro para nós, por isso, no final no arquivo colocaremos uma const chaves = [].
Dentro dela, teremos um array com todos os valores da chave.

```javascript
const chaves = ["nome", "idade", "cpf", "email"];
```

O que podemos fazer com essa informação? Temos uma lista, vimos o método de lista e é possível percorrermos essa lista e capturar cada valor.
Para tal, usaremos chaves.forEach() e dentro passaremos uma função que será chamada para cada valor daquela chave.
A propriedade que vamos ter do array é cada uma das chaves, logo dentro do parêntese incluiremos outro parêntese e digitaremos "chave": chaves.forEach((chave)). Nela, teremos uma arrow function em que listaremos as chaves e seus respectivos valores e exibiremos usando console.log().
No console.log() usaremos uma template string para passarmos uma mensagem customizada, chamando a chave que desejamos exibir.

```javascript
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor`);
});
```

Por estarmos assumindo que não sabemos os nomes das chaves, usamos o operador de colchetes dentro do objeto: ${cliente[chave].

```javascript  
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
```

Ou seja, o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade.

```javascript
acesso-colchete.js
```
```javascript
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
```

Para validarmos, voltaremos ao terminal e executamos novamente o comando node.

```javascript
acesso-colchete.js
```
```git
O nome do cliente é Andre e essa pessoa tem 32 anos.

A chave nome tem valor Andre

A chave idade tem valor 32

A chave cpf nome tem valor 1122233345

A chave email tem valor andre@dominio.com
```

Perceba que exibiu a mensagem do código anterior e agora temos todas as chaves listadas com seus respectivos valores.
Assim, aprendemos que com a sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que estamos escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e dos objetos.
Uma coisa que podemos fazer, também, é analisar o que acontece ao tentarmos acessar uma chave que não existe. Para testarmos, em const chaves incluiremos altura.

```javascript
const chaves = ["nome", "idade", "cpf", "email", "altura"];
```

Após feita essa alteração, salvaremos o arquivo e voltamos ao terminal para executar o comando node aula1/acesso_colchete.js.

```git
O nome do cliente é Andre e essa pessoa tem 32 anos.

A chave nome tem valor Andre

A chave idade tem valor 32

A chave cpf nome tem valor 1122233345

A chave email tem valor andre@dominio.com

A chave altura tem valor undefined
```

A última linha é a chave altura, em que o valor foi devolvido como undefined ("indefinido"). O undefined é um valor reservado do JavaScript (sendo uma palavra especial) devolvido ao tentarmos acessar uma propriedade que não existe.
Não retorna erro e não vai quebrar o código, mas o campo é devolvido com o valor undefined.
Aprendemos que podemos acessar os campos de um objeto, e que temos a notação de ponto e de colchetes. Esta última surgiu para cenários em que, não necessariamente, sabemos quais campos acessaremos. E que ao acessarmos uma propriedade que não existe, o valor devolvido será undefined.


### Acesse os dados
***
No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado. Observe a representação abaixo:

    const pet = {
      nome: "Rex",
      dataDeNascimento: "12/03/2017",
      brinquedoFavorito: "bolinha",
      cor: "cinza",
    };

Ao tentar acessar pet.dataDeNascimento iremos obter a string ”12/03/2017”.

* Podemos usar o operador . para acessar as propriedades que já conhecemos de um objeto.

Ao tentar acessar pet`[“brinquedoFavorito”]` iremos obter a `string` ”bolinha”.

* Podemos utilizar o nome da propriedade como string dentro de colchetes `[“propriedade”]` para acessar as propriedades de um objeto de forma mais dinâmica.


### Adicionando e alterando
***
```javascript
alterar.js
```
Agora que sabemos acessar os valores das propriedades dos objetos, é interessante aprendermos como manipular, alterar ou criar novas propriedades.
No VSCode, clicaremos no ícone "New File" ("Novo arquivo"), para criar um novo arquivo chamado "alterar.js" dentro da pasta aula1.
Dentro do arquivo criado, inserimos um novo objeto const pessoa e atribuímos usando o sinal de igual "=" bloco de chaves. Nele, teremos o nosso objeto.

    alterar.js

    const pessoa = {

    };

Vamos atribuir ao objeto pessoa um atributo chamado nome, em que seu conteúdo será "Luma".

    const pessoa = {
        nome: "Luma", 
    };

Na linha seguinte, incluiremos uma propriedade chamada profissao:

    const pessoa = {
      nome: "Luma",
      profissao: "Engenheira",
    };

Assim, temos um objeto pessoa que contém duas propriedades. Sabemos que podemos aplicar o console.log() para saber o nome, para isso pedimos para exibir pessoa.nome, como parâmetro.

    console.log(pessoa.nome);

Vamos rodar esse código voltando ao terminal e executando o comando node aula1/alterar.js.

    alterar.js
    Luma

Como saída, retornou o nome "Luma". E se quisermos exibir o telefone dessa pessoa? Lembrando que esse campo não existe no nosso objeto.

     console.log(pessoa.telefone);

Vamos salvar o arquivo clicando nas teclas "Ctrl + S" e voltar ao terminal para executar mais uma vez o comando node.

    alterar.js
    Luma
    undefined

Por ser uma propriedade que não existe dentro de um objeto, o retorno para esse cenário é a palavra undefined. Esta palavra representa algo que não foi iniciado ou definido.
Vamos fazer mais algumas inclusões para analisarmos. E se colocarmos pessoa.telefone, que recebe um número?

    pessoa.telefone = "11 2223333444";

Logo após, podemos exibir essa informação usando console log.

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

    alterar.js

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


### Para saber mais: tipos de variáveis e objetos
***
Na última aula, vimos que podemos alterar e manipular as propriedades de um objeto mesmo quando o objeto está armazenado em uma variável do tipo const.
Temos um [artigo](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?_gl=1*4a2um6*_ga*MTIyMzM4MDk5NC4xNjkyNzQ1NDk5*_ga_1EPWSW3PCS*MTY5NDExMzg3MC4xNC4xLjE2OTQxMTU4NDEuMC4wLjA.*_fplc*VFhUem41UndVNFFQRzN2TjB3RWp3dnpwTGdyUGx5WkE1RTJDYlB1VkdXQmg4SDB4Z1NXenNhT2tUNUslMkJiUTZFWDFGZURHVDhqRUQzZDlPNDM2QlFlWGRIWnEzNUEybnE1M3kyRSUyQm8xbjVRQ3NIcjk4Zzh4bTklMkYlMkJETUg2bnclM0QlM0Q.) na plataforma que explica as diferenças entre as variáveis que podemos declarar, mas vale lembrar que as variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.


### Para saber mais: como deletar uma propriedade?
***
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


### Novos campos

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

* Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.


### Faça como eu fiz: criando objetos
***
Nesta aula, começamos a aprender sobre a estrutura de dados chamada de objetos no Javascript, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores.


### O que aprendemos?
***
Nessa aula, você aprendeu:
Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.


## Aula - 02: Manipulação de objetos

    tipos.js

### Tipos de dados e valores

Na aula anterior, vimos algumas coisas que podemos armazenar em um objeto e neste vídeo aprofundaremos como e o que podemos guardar, conhecendo algumas estruturas mais elaboradas.
Voltaremos ao VSCode, e à esquerda clicaremos no segundo ícone que representa o "New folder". Chamaremos este novo arquivo de "aula2", nele seguiremos desenvolvendo o nosso projeto.
Agora, selecionando a pasta aula2, selecionaremos o primeiro ícone "New file" para criarmos uma pasta dentro da aula2 chamada "tipos.js ". Nele, criaremos um objeto cliente que analisamos em aulas passadas.
Vamos criar a const cliente, que vai armazenar um objeto.

    tipos.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: "1155555550",
    };

Por enquanto, nada de novo para nós. Mas podemos armazenar algumas estruturas mais elaboradas!
Por exemplo, em casos em que o usuário possui mais de um telefone. Desse modo, podemos incluir mais uma linha com um telefone2.

    tipos.js

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

    tipos.js

    {
      nome: "Joao",
        idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"]
    };

Após selecionarmos a tecla "Enter", percebemos que este formato é aceito pelo Javascript. Conseguimos armazenar um array no objeto, também, precisamos acessar esse objeto, porque podemos querer alterar o array ou capturar um campo específico.
Para acessar o objeto, voltaremos ao VSCode e no console log do cliente, incluiremos .telefone para acessarmos uma propriedade dentro do objeto.

    console.log(cliente.telefone);

Dessa forma, vamos acessar somente o array que contém os telefones. Podemos salvar essa alteração e voltar ao terminar para executarmos o comando node aula2/tipos.js mais uma vez.

    ["1155555550", "1144444440"]

Note que nos devolveu somente o array com os telefones. Este array está guardado em uma propriedade de um objeto.
Assim, conseguimos armazenar um array, e conseguimos estipular como seriam as operações e o que poderíamos fazer. Mas e se desejarmos guardar outro objeto.


### Selecione os tipos mais adequados

Digamos que você precise criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de uma universidade com os seguintes campos:
Nome: um campo de texto com o nome completo do estudante;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual do estudante;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que o estudante está cursando.

    const estudante = {
      nome: "Adilson Josué de Freitas",
      matricula: 201542290,
      curso: "Engenharia eletrônica",
      materias: [
        "Cálculo 1",
        "Álgebra Linear",
        "Práticas de Laboratório",
        "Metodologia",
      ],
    };


### Objetos em objetos

    aninhado.js

Na aula anterior, vimos que conseguimos salvar um array dentro de um objeto. Nesta aula, vamos entender casos em que desejamos salvar um objeto dentro de outro objeto.
Primeiro, copiaremos a variável de cliente do arquivo tipos.js:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

Logo após, criaremos um arquivo chamado "aninhados.js" na pasta aula2, clicando no primeiro ícone "New file". Desse modo, na pasta aula2, temos dois arquivos: tipos.js e aninhados.js.
A palavra "aninhados" é justamente estar dentro do outro, podendo ser um código ou bloco aninhado.
No arquivo aninhados.js, colaremos a variável cliente.

    aninhados.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

Vamos supor que no cenário da loja em que devemos atender um cliente, precisamos salvar qual o endereço dele. Isso caso seja necessário enviarmos um produto ou fatura.
Sabemos que podemos criar propriedades para os objetos nomeando eles e atribuindo algum valor.
Para isso, podemos adicionar uma propriedade cliente.endereco que vai receber um objeto com todos os campos, como rua, número, apartamento e complemento.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.endereco = {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    };

Assim, temos um cliente que contém uma propriedade chamada endereço, que armazena um objeto.
Logo após, podemos exibir esses valores usando o comando console log.

    aninhados.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.endereco = {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    };

    console.log(cliente);

Podemos salvar o arquivo e voltar ao terminal para rodar o comando node.

    aninhados.js

    {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        endereco: {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934",
        }
    }

Conseguimos visualizar os primeiros campos, que já existiam, como nome, idade, e-mail e telefone. Logo após, temos uma propriedade chamada endereco que dentro armazena outro objeto.
Com isso, confirmamos que podemos guardar um objeto dentro de outro.
Agora, vamos entender como acessar os campos dessa estrutura de forma individual. Solicitamos que fosse feito o console log somente de cliente, se desejamos visualizar o objeto de endereço podemos incluir .endereco.

    console.log(cliente.endereco);

Salvaremos essa alteração e voltaremos ao terminal para executar o comando node novamente para verificarmos.

    {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934",
        }

Perceba que exibiu somente o objeto endereco. A partir disso, todos os acessos que formos fazer, é igual quando fazemos o acesso a um objeto de forma direta. Não há segredo.
Outro detalhe é que podemos usar a outra notação de colchetes para acessar.

    console.log(cliente["endereco"]);

Podemos salvar e voltar ao terminal para executar o comando node aula2/aninhados.js. Note que retornou a mesma informação:

    {
            rua: "R. Joseph Climber",
            numero: 1337,
            apartamento: true,
            complemento: "ap 934",
        }

Após verificarmos isso, podemos voltar ao código e manter a notação de ponto.
Assim como o cliente, o endereço pode ter várias propriedades, atributos ou campos próprios. O endereço em si, é uma unidade lógica que faz sentido dizermos que temos um endereço que possui essas propriedades.
Logo, podemos usar os objetos para armazenar o formato dessas informações de uma maneira que faça sentido. Se comunicarmos que o cliente possui o número 1337, não fica claro. Mas se informamos que o cliente possui um endereço e que o número é 1337, sim.
Como fazemos em casos que desejarmos organizar arrays e objetos dentro de um objeto?


### Listas de objetos

    listaObjetos.js

Aprendemos que conseguimos armazenar um objeto dentro de outro em uma propriedade. Mas podemos querer ter uma lista com vários objetos.
Assim como o telefone, em que guardamos mais de um para um mesmo cliente, pode ser que a pessoa tenha mais de um endereço. Desse modo, seria interessante termos uma lista com vários endereços. Porém, esse endereço é um objeto! Como fazemos isso?
Voltando para o VSCode, criaremos uma cópia do arquivo aninhados.js, dentro da pasta aula2. Vamos renomear o arquivo aninhanos.copy.js para listaObjetos.js.

    listaObjetos.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.endereco = {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    };

    console.log(cliente.endereco);

Ao invés de termos cliente.endereco teremos cliente.enderecos.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    };

    console.log(cliente.endereco);

Para transformarmos em uma lista, incluiremos os colchetes fora do objeto. No console log vamos renomear para cliente.enderecos.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    console.log(cliente.enderecos);

Após realizar essas alterações, vamos ao terminal executar o comando node aula2/listaObjetos.js.

    listaObjetos.js

    [
      {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934',
      },
    ]

Nos devolveu um array, em que na primeira posição há um objeto, sendo o endereço que cadastramos. Porém, precisamos adicionar os outros endereços.
Logo, após declararmos essa propriedade e antes de exibirmos, incluiremos como acessar o array usando o método push: cliente.enderecos.push().
Dentro do parênteses, podemos passar como parâmetro o que desejamos inserir, no caso como temos um array de endereço, gostaríamos de incluir outro endereço. Representamos esse endereço como um objeto, por isso, colocamos as chaves "{}".

    cliente.enderecos.push({

    })

Em cliente.enderecos.push, podemos descrever um novo endereço para o cliente, inserindo rua, número e apartamento.

    listaObjetos.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    cliente.enderecos.push({
      rua: "R. Joseph Ladder",
      numero: 404,
      apartamento: false,
    });

    console.log(cliente.enderecos);

Desse modo, adicionamos uma nova entrada na lista, usando o método push.
Para confirmar, salvamos o arquivo e voltamos ao terminal para executar o comando node aula2/listaObjetos.js.

    [
      {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934',
      },
        {rua: 'R. Joseph Ladder', numero: 404, apartamento: false}
    ]

Como retorno, temos dois objetos na primeira posição. O primeiro é o nosso endereço no número 1137 e agora com o número 404, na nova entrada.
O que ganhamos ao fazer isso? Ganhamos todos os métodos que poderíamos usar com array, e podemos utilizar nesses objetos.
Por exemplo, podemos acrescentar uma nova lista a partir dessa lista que geramos, usando um método do array chamado filter ("filtro"). Este seleciona alguns campos ou entradas de forma específica para colocar na lista.
Para fazer essa chamada, vamos criar uma nova lista const listaApenasApartamentos. Nela, deixamos somente os endereços que são apartamentos do cliente.
Logo, a variável listaApenasApartamentos vai receber cliente.endrecos.filter().

    const listaApenasApartamentos = cliente.enderecos.filter(

    );

Como parâmetro do filtro, passaremos uma função que selecionará o que está dentro do filtro ou não. O parâmetro de cada item é o (endereco) e no retorno "=>" desejamos saber se é um apartamento: (endereco) => endereco.apartamento === true.

    const listaApenasApartamentos = cliente.enderecos.filter(
      (endereco) => endereco.apartamento === true
    );

Em seguida, faremos o console log em listaApenasApartamentos:

    const listaApenasApartamentos = cliente.enderecos.filter(
      (endereco) => endereco.apartamento === true
    );

    console.log(listaApenasApartamentos);

Isso porque se endereco.apartamento for verdadeiro, será atribuído na nova lista listaApenasApartamentos. Podemos salvar e voltar ao terminal, para executar o comando node listaObjetos.js.

    [
      {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934',
      }
    ]

Assim, temos como retorno a lista filtrada. Vamos supor que tenha muito mais endereços ou se fosse uma lista de objetos mais complexos, poderíamos usar esses métodos para montar relatórios.

    listaObjetos.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    cliente.enderecos.push({
      rua: "R. Joseph Ladder",
      numero: 404,
      apartamento: false,
    });

    const listaApenasApartamentos = cliente.enderecos.filter(
      (endereco) => endereco.apartamento === true
    );

    console.log(listaApenasApartamentos);

Nesta aula, aprendemos como manipular uma lista de objetos da mesma forma que fazemos com as listas de valores primitivos, como string, números e boolean.
Precisamos nos atentar ao método filter, já que ele nos retorna uma lista independente do número de entradas. Assim, mesmo tendo filtrado somente uma coisa, notamos que ele não nos devolveu o objeto endereço e sim uma lista com uma entrada do objeto endereço, e de um determinado objeto.
Na próxima aula, vamos entender que além de adicionarmos arrays e objetos, podemos acrescentar funções no nosso objeto.


### Funções

    funcoes.js

Entendemos que além de dados primitivos (boolean e string, por exemplo) podemos armazenar listas e outros objetos dentro do nosso objeto.
Neste vídeo, vamos aprender que podemos guardar funções como propriedade de um objeto. Isso nos possibilita alterar o comportamento de um objeto e a deixar descrito junto com ele, como uma propriedade.
Vamos supor que agora implementaremos uma parte do sistema de compra da loja. Deixaremos que o cliente efetue um pagamento.
Para isso, no VSCode, no arquivo listaObjetos.js copiaremos o objeto cliente.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

Agora, à esquerda, criaremos um arquivo chamado "funcoes.js".
Desse modo, ficamos com as seguintes pastas:

aula2
aninhados.js
funcoes.js
listaObjetos.js
tipos.js

No arquivo funcoes.js, colaremos o objeto cliente.

    funcoes.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

Para simplificar, vamos dizer que o esquema de funcionamento da loja quando a pessoa se torna cliente, ela efetua o cadastro e inicia com determinado saldo.
Para isso, no objeto cliente incluiremos o campo saldo que inicia com duzentos reais.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        saldo: 200,
    };

Mencionei que podemos ter propriedades que guardam funções, seria interessante descrevermos uma função que verifica se o cliente possui saldo suficiente para fazer uma compra.
Isso porque caso contrário, teríamos que fazer essa verificação toda vez que efetuarmos um pagamento e, pode acontecer de errarmos ou fazermos essa verificação de forma inadequada.
Por isso, criaremos uma propriedade chamada efetuaPagamento e o valor passado será uma função. Esta função terá o parâmetro valor, sendo o valor da conta que o cliente irá pagar, por exemplo.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        saldo: 200,
        efetuaPagamento: function (valor) {

        }
    };

No bloco entre chaves "{}", vamos descrever o comportamento da nossa função. Iniciaremos esse comportamento com uma condicional if(), para verificar se o valor da compra foi maior que o saldo armazenado neste objeto.
Para acessarmos o saldo do objeto, usaremos a palavra reservada this ("isso"). Esta palavra representa a instância do objeto atual em que estamos trabalhando, sendo o cliente João com idade de 24 anos. Para acessar o saldo desse cliente, usamos o this.saldo:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        saldo: 200,
        efetuaPagamento: function (valor) {
            if (valor > this.saldo) 
        }
    };

Agora que temos o saldo, se o valor for maior que o saldo atual, exibiremos a mensagem "Saldo insuficiente".

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        saldo: 200,
        efetuaPagamento: function (valor) {
            if (valor > this.saldo) {
                console.log("Saldo insuficiente");
            }
        }
    };

Teremos outro cenário, e para incluí-lo no código usaremos o else, em que a pessoa pode efetuar a compra.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
        saldo: 200,
        efetuaPagamento: function (valor) {
            if (valor > this.saldo) {
                console.log("Saldo insuficiente");
            } else {

            }
        }
    };

No bloco do else, vamos deduzir o valor da compra do saldo. Vamos dizer que this.saldo será menor e igual ("-=") - isto é, o saldo antigo menos o valor da compra.

    else {
    this.saldo -= valor;
    }

Logo após, vamos exibir uma mensagem informando que pagamento foi realizado, usaremos a template string.

    else {
    this.saldo -= valor;
    console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }

Com isso, descrevemos o comportamento. Porém, precisamos chamar esse comportamento para ele ser executado. Por isso, no final do código incluiremos: cliente.efetuaPagamento(). No parênteses, colocaremos o número 250, pois é um valor acima de 200.

    funcoes.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
      saldo: 200,
      efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
          console.log("Saldo insuficiente");
        } else {
          this.saldo -= valor;
          console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
      },
    };

    cliente.efetuaPagamento(250);

Após essas alterações, podemos voltar ao terminal e executar o comando:
    
    node funcoes.js

    Saldo insuficiente

Obtivemos o retorno esperado, inserimos o valor 250 que é maior que 200 do saldo.
Podemos voltar ao código no VSCode e alterar o valor de 250 para 25:

    cliente.efetuaPagamento(25);

Novamente voltaremos ao terminal para rodar a instrução:

    node funcoes.js

    Pagamento realizado. Novo saldo: 175

Conseguimos incluir um comportamento que já foi estabelecido no objeto, em uma propriedade. Vimos uma propriedade que armazena uma função e mais para frente no curso, daremos um nome para isso: método.
Entenderemos o método em orientação a objetos, que chamamos de paradigma de orientação a objetos, como trabalhamos com métodos e propriedades e como criar objetos mais complexos.
Mas, por enquanto, na próxima aula vamos aprender um pouco mais sobre os objetos, as formas de como podemos percorrer eles.


### Para saber mais: objeto literal e referência

Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:

    const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
    }

O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.
Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves{ }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.
Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

    const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
    }

    const objPersonagem2 = objPersonagem

Se alterarmos apenas o objPersonagem2, o resultado é:

    const objPersonagem2 = objPersonagem

    objPersonagem2.nome = "Gandalf, o Cinzento"

    console.log(objPersonagem.nome) //Gandalf, o Cinzento

    console.log(objPersonagem2.nome) //Gandalf, o Cinzento

A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

    let num = 50

    let num2 = num

    num2 = 100

    console.log(num) //50

    console.log(num2) //100

Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

    const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
    }

    const objPersonagem2 = Object.create(objPersonagem)

    objPersonagem2.nome = "Gandalf, o Cinzento"

    console.log(objPersonagem.nome) //Gandalf

    console.log(objPersonagem2.nome) //Gandalf, o Cinzento

O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.
Você pode ver mais exemplos desse método na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

Nas próximas aulas veremos também outra forma de criar objetos ao utilizar funções construtoras.


### Manipulando objetos
***
Trabalhar com objetos no Javascript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, bool) até tipos mais elaborados como arrays ou outros objetos. Observe o código abaixo:

    const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
    }

    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
    }]

    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
    })

Na representação do cliente, o objeto é composto por outras propriedades de diversos tipos e objetos.
O cliente possui uma propriedade chamada animalEstimacao, um array de objetos, o que nos permite usar funções comuns a arrays como filter().

* Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter().


### O que aprendemos

Nessa aula, você aprendeu:
Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.


## Aula - 03: Percorrendo objetos

    repeticao.js

### for...in

Nesta aula, vamos aprender uma maneira de iterar dentro de um objeto. Vamos supor que temos o nosso objeto cliente que possui diversos campos, e desejamos montar um relatório usando essas propriedades (campos). Neste cenário, assumimos que não sabemos todos os campos.
No VSCode, criaremos na raiz do projeto uma pasta chamada aula3, clicando no segundo ícone "New folder". Dentro da pasta aula3, vamos criar um arquivo chamado repeticao.js, clicando no primeiro ícone "New file".
Agora, copiaremos a parte do código do cliente com o endereço do arquivo listaObjetos, da pasta aula2 e colaremos no arquivo repeticao.js.

    repeticao.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

Há uma forma de percorrermos esse objeto, igual fazemos com array? E sabemos que ele não é ordenado, ou seja, o nome ser o primeiro não necessariamente significa que tenha um índice. A chave e o valor é o nome da propriedade (nome, idade, email e telefone);
Como percorremos essa estrutura? Já conhecemos o laço de repetição chamado for, mas há uma palavra reservada que nos permite iterar sobre cada propriedade, que talvez você ainda não conheça.
No final do arquivo, digitaremos for(), dentro do parêntese colocaremos uma variável que vai armazenar o nome de cada propriedade.
Assim, faremos uma variável let que vamos chamar de chave (lembrando na notação chave-valor, sendo chave o nome da propriedade). Logo após, usaremos a palavra reservada in, ela faz com que seja capturado cada uma das chaves no objeto cliente. Isto é, deixar a chave em cliente, em uma tradução livre.

    for (let chave in cliente) {

    }

Agora, podemos mostrar o que está sendo salvo dentro desse valor. Por isso, aplicaremos um console log no arquivo repeticao.js, para visualizarmos as chaves.

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    for (let chave in cliente) {
        console.log(chave);
    }

Lembrando que desejamos montar um relatório com esses campos. Podemos salvar as modificações clicando em `"Ctrl + S"` e depois vamos ao terminal rodar o comando node:

    repeticao.js

    nome
    idade
    email
    telefone
    enderecos

Foi percorrido todos esses campos, sendo as chaves com os nomes das propriedades.
Voltando ao código, se escrevemos desta forma e conseguimos acessar a chave, se tentarmos fazer `(cliente[chave])` obteremos qual o valor salvo dentro dessa propriedade.

    for (let chave in cliente) {
        console.log(cliente[chave]);
    }

Podemos salvar e voltar ao terminal para rodarmos o comando:

    node repeticao.js

    Joao
    24
    joao@firma.com
    ['1155555550', '1144444440']
    [
        {
      rua: 'R. Joseph Climber',
      numero: 1337,
      apartamento: true,
      complemento: 'ap 934',
        }
    ]

O primeiro valor é João, com a idade de 24 anos, um e-mail, os telefones e o endereço, sendo um array com um objeto dentro. Tudo certo.
Voltaremos ao código, e para montarmos o relatório podemos remover o `cliente[chave]` e inserir uma template string para escrever por extenso o que obtivemos.

    for (let chave in cliente) {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }

Podemos salvar e voltar ao terminal para novamente rodar o comando node aula3/repeticao.js:

    A chave nome tem o valor Joao
    A chave idade tem o valor 24
    A chave email tem o valor joao@firma.com
    A chave telefone tem o valor 1155555550,1144444440
    A chave enderecos tem o valor [object Object]

Retornou um problema somente na última chave, sendo a enderecos que o valor retornou object Object. Tem um detalhe que o objeto, quando ele tentou escrever dentro dessa expressão, retornou object Object, isso é um comportamento do Javascript.
Para resolvermos esse problema neste cenário, podemos filtrar os outros campos e aplicar um tratamento diferente para o que é um objeto.
Para incluir um filtro, checamos o tipo do objeto. Para isso, criaremos uma variável let tipo dentro do laço de repetição for e antes do console log, para salvar o tipo: `let tipo = typeof cliente[chave];`.

    for (let chave in cliente) {
        let tipo = typeof cliente[chave];

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }

Na linha seguinte, faremos uma validação para verificar se é um objeto ou função (este último não faz muito sentido para um relatório) e fazer com que ele escreva somente os campos mais simples, como boolean, textos ou números.
Podemos fazer o teste usando a condicional if, perguntando se o tipo é diferente de object e se o tipo diferir de function.

    for (let chave in cliente) {
      let tipo = typeof cliente[chave];
      if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
      }
    }

Vamos salvar e voltar ao terminal, para rodarmos mais uma vez o comando node aula3/repeticao.js.

    A chave nome tem o valor Joao
    A chave idade tem o valor 24
    A chave email tem o valor joao@firma.com

Nos devolveu somente o que não era objeto: nome, idade e e-mail.
Lembrando que o typeof de um array retorna um objeto, e poderíamos adicionar outro tratamento para chamar novamente dentro do objeto endereço e ler os campos ou tratar os arrays, checar se é um array e criar outro método para isso.
Mas para o nosso entendimento, isso que fizemos é satisfatório. Conseguimos compreender como o for...in pega as propriedades e como podemos manipulá-las, fazer validações e entender como funciona esse tipo de laço de repetição.


### Percorrendo objetos

Nas aulas anteriores aprendemos que o JavaScript traz uma série de métodos próprios que nos ajudam a trabalhar com objetos. Um exemplo disso é o método for … In que permite a iteração sobre as propriedades de um objeto como em um array. Sabendo disso, observe o código que define um objeto do tipo paciente:

    const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
    }

Posso utilizar o método for..In como loop e exibir somente as propriedades do objeto que não são classificadas como objetos ou funções, como no código abaixo:

    let dados = "";

    for (let info in paciente) {
    if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
      continue
    } else {
    dados += `${info} ==> ${paciente[info]}
      `}
    };

* O for...in permite iterar sobre as propriedades de um objeto. No caso desse loop, temos a flexibilidade de percorrer o objeto e executar uma série de comparações, uma delas é usar o typeof e verificar o tipo da propriedade.

Para a execução do código:

    for (let info in paciente) {
    console.log(info)
    };

A saída esperada é a listagem do nome das propriedades do objeto paciente.

* O loop definido no for...in irá retornar para a variável info que é o nome da chave do objeto, ou seja, o nome da propriedade do objeto.


### Métodos de objeto

Além da nova maneira de usar o laço de repetição que aprendemos na última aula, o JavaScript nor fornece outras ferramentas que podemos usar para verificar as chaves, campos e valores de um objeto.
No VSCode, copiaremos o trecho de código do cliente e seu endereço do arquivo repeticao.js:
Parte para copiar do arquivo repeticao.js:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

Logo após, à esquerda, criaremos um arquivo chamado chaves.js dentro da pasta aula3. Dessa forma, dentro da pasta aula3 ficamos com os seguintes arquivos:

aula3
chaves.js
repeticao.js

No arquivo chaves.js, colaremos o trecho do código que copiamos anteriormente.

    chaves.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

Agora, validaremos a compra do cliente, e desejamos visualizar se o cliente possui um endereço cadastrado no momento da compra.
Há um método novo que nos retorna um array com todos os nomes das propriedades que foram inicializados. No final do arquivo, criaremos uma variável para salvar as chaves.
Criaremos uma const chavesDoObjeto, depois usaremos uma classe que é um conjunto de várias funções que nos ajudam a lidar com objetos. Vamos chamar o Object.keys() e passaremos como parâmetro o cliente.

    const chavesDoObjeto = Object.keys(cliente);

Essa função nos retorna um array, que contém todas as chaves já inicializadas do cliente. Para visualizar as chaves do objeto, incluiremos o console log.

    const chavesDoObjeto = Object.keys(cliente);

    console.log(chavesDoObjeto);

Salvaremos e logo após voltaremos ao terminal para rodar o comando:
    
    node chaves.js

    ['nome','idade','email','telefone','enderecos']

Assim, obtivemos como retorno um array, em que na primeira posição temos o nome, depois, idade, e-mail, telefone e endereços. Lembrando que não podemos confiar na ordem em que esses campos são exibidos para nós, afinal, o objeto não ordena as propriedades.
Com esse array, podemos fazer uma validação para checar se o endereço existe. Podemos, inclusive, verificar mais de um campo ao mesmo tempo só por ter esse array.
Usaremos a condicional if para fazer um teste, e checar se a chave do objeto cliente inclui (includes()) a chave enderecos.

    if (chavesDoObjeto.includes("enderecos")) {

    };

Podemos dizer que se esse teste for verdadeiro, ele vai entrar caso a chave exista. Mas o que queremos é ao contrário, por isso colocaremos o ponto de exclamação antes de chavesDoObjeto, que significa negação na programação.

    if (!chavesDoObjeto.includes("enderecos")) {

    };

Se entrarmos no bloco dessa condicional, precisamos exibir um erro. Portanto, usaremos o console.error() passando a mensagem "Erro. É necessário ter um endereço cadastrado.".

    if (!chavesDoObjeto.includes("enderecos")) {
      console.error("Erro. É necessário ter um endereço cadastrado.");
    };

Código completo do arquivochaves.js:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    const chavesDoObjeto = Object.keys(cliente);

    console.log(chavesDoObjeto);

    if (!chavesDoObjeto.includes("enderecos")) {
      console.error("Erro. É necessário ter um endereço cadastrado.");
    };

Podemos salvar clicando em "Ctrl + S" e voltar ao terminal para executar o comando node aula3/chaves.js. O esperado é que tudo funcione, já que o cliente possui um endereço cadastrado.

    ['nome','idade','email','telefone','enderecos']

Após confirmar que deu certo, podemos voltar ao código e comentar a parte que adicionamos o endereço:

    chaves.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    // cliente.enderecos = [
    //  {
    //    rua: "R. Joseph Climber",
    //    numero: 1337,
    //    apartamento: true,
    //    complemento: "ap 934",
    //  },
    //];

    const chavesDoObjeto = Object.keys(cliente);

    console.log(chavesDoObjeto);

    if (!chavesDoObjeto.includes("enderecos")) {
      console.error("Erro. É necessário ter um endereço cadastrado.");
    };

Salvaremos novamente o arquivo e voltaremos ao terminal para rodar o comando node aula3/chaves.js.

    ['nome','idade','email','telefone','enderecos']
    Erro. É necessário ter um endereço cadastrado.

Agora, sim, obtivemos um erro. O que é esperado, afinal, comentamos a parte que criamos esse endereço.
Com isso, aprendemos que podemos obter utilizando o object.keys() um array com todas as chaves do objeto.
Além do método keys, a classe nos fornece vários outros métodos que deixaremos em um material extra para você entender melhor.


### Para saber mais: outros métodos de objetos

Para aprofundar seus conhecimentos, que tal conhecer o funcionamento dos objetos em JavaScript?
Acesse a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects), que é uma ótima referência aos nossos estudos e amplie os conhecimentos dos métodos e práticas que realizamos até agora.
Sabemos que o ecossistema JavaScript é bem vasto e sofre diversas mudanças em função do tempo, então vale a pena dedicarmos um tempo para olhar a documentação e dar uma lida com calma.


### Sintaxe de espalhamento
***
```javascript
espalhamento.js
```
Nesta aula, vamos aprender um pouco sobre a sintaxe de espalhamento e como podemos utilizá-la com objetos. Talvez você lembre do curso anterior, em que tivemos que usá-la para compor e decompor arrays.
Voltando ao VSCode, podemos remover o comentário do arquivo chaves.js:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

    const chavesDoObjeto = Object.keys(cliente);

    console.log(chavesDoObjeto);

    if (!chavesDoObjeto.includes("enderecos")) {
      console.error("Erro. É necessário ter um endereço cadastrado.");
    };

E novamente, copiaremos o cliente com o respectivo endereço:

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

Agora, na pasta da aula3, criaremos um arquivo chamado espalhamento.js.
Dessa forma, ficamos com as seguintes pastas na aula 3:

aula3
chaves.js
espalhamento.js
repeticao.js

No arquivo espalhamento.js, colaremos o trecho do código que copiamos do arquivo chaves.js.

    espalhamento.js

    const cliente = {
      nome: "Joao",
      idade: 24,
      email: "joao@firma.com",
      telefone: ["1155555550", "1144444440"],
    };

    cliente.enderecos = [
      {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    ];

Vamos supor que temos uma função externa (ou seja, que não é nossa) e precisamos usá-la em casos que desejarmos ligar ou ter algum tipo de contato com o cliente.
Chamaremos essa função assumindo que ela veio de fora. Usaremos o comando function ligaParaCliente(), que receberá os dois números de telefones do cliente.

    function ligaParaCliente (telefoneComercial, telefoneResidencial) {

    };

Esta função apenas exibirá um console log ligando para o telefone comercial e outro para o residencial, através de template string passando como valor o que está sendo passado como parâmetro na função ligaParaCliente: console.log(Ligando para ${telefoneComercial}).

    function ligaParaCliente(telefoneComercial, telefoneResidencial) {
      console.log(`Ligando para ${telefoneComercial}`);
      console.log(`Ligando para ${telefoneResidencial}`);
    };

Agora, assumimos que não podemos alterar a implementação desta função, porque ela veio de fora. Como poderíamos chamar essa função passando os valores que temos no objeto cliente? Desejamos entrar em contato com o cliente.
Chamaremos ligaParaCliente passando como parâmetro cliente.telefone com o índice zero e um. Porque é um array e temos duas posições, e estamos assumindo que a primeira é comercial e a segunda residencial.

    function ligaParaCliente(telefoneComercial, telefoneResidencial) {
      console.log(`Ligando para ${telefoneComercial}`);
      console.log(`Ligando para ${telefoneResidencial}`);
    }

    ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

Podemos salvar essa alteração e verificar se funciona voltando ao terminal e executando o comando node aula3/espalhamento.js:

    Ligando para 1155555550
    Ligando para 1144444440

Funcionou, ele liga para o primeiro número e depois para o próximo número de telefone.
Mas vimos que podemos aplicar a sintaxe de espalhamento, que ela divide o array e passa cada campo como se fosse um parâmetro diferente.
Para fazer isso, informamos somente o array cliente.telefone e podemos incluir uma reticência antes dessa chamada. Teremos o mesmo comportamento do caso anterior.

    ligaParaCliente(...cliente.telefone);

Podemos salvar e voltar ao terminal para rodar novamente o comando node aula3/espalhamento.js.

    Ligando para 1155555550
    Ligando para 1144444440

Obtivemos o mesmo retorno que anteriormente, ela espalhou o array no momento da chamada e tivemos dois parâmetros sendo passados. Foi uma adaptação que aplicamos para funcionar com a chave antiga.
Será que conseguimos fazer algo parecido com objetos? Vamos supor que precisamos realizar um envio de algum produto para o cliente. Para testar isso, no final do arquivo espalhamento.js, criaremos uma const encomenda que será igual a um objeto, = {}.

    espalhamento.js

    const encomenda = {

    };

Precisamos enviar esse produto por correio ou para o responsável pela logística da loja, para enviar essa encomenda para o cliente. Os campos que precisaremos serão o nome do cliente (destinatário) e o endereço.

    const encomenda = {
      destinatario: cliente.nome,
      endereco: cliente.enderecos[0],
    };

Para visualizarmos esse objeto, colocaremos um console log passando como parâmetro a encomenda.

    const encomenda = {
      destinatario: cliente.nome,
      endereco: cliente.enderecos[0],
    };

    console.log(encomenda);

Novamente vamos salvar essas alterações e voltar ao terminal para executar o comando node aula3/espalhamento.js.

    Ligando para 1155555550
    Ligando para 1144444440

    { destinatario: 'Joao', 
        endereco: {
            rua: 'R. Joseph Climber',
            numero: 1337,
            apartamento: true,
            complemento: 'ap 934'
        }
    };

Este é o nosso objeto de encomenda. Ele possui um destinatário chamado João, e um endereço que contém outro objeto nele, com a rua, número, apartamento e complemento.
Vamos supor que a maneira que devemos enviar esse objeto, não pode ter outro objeto aninhado. Deve ter todos os campos de forma direta, sendo um objeto que contém os campos rua, número, apartamento, complemento e destinatário. Assim como visualizamos em uma carta analógica.
No VSCode, nós poderíamos passar os campos de forma mais bruta, passando os campos e removendo o objeto no final:

    const encomenda = {
      destinatario: cliente.nome,
        rua: cliente.enderecos[0].rua,
        numero:cliente.enderecos[1].numero,
    };

    console.log(encomenda);

Salvaremos e vamos verificar no terminal rodando o comando node.

    Ligando para 1155555550
    Ligando para 1144444440
    { destinatario: 'Joao', rua: 'R. Joseph Climber', numero: 1337 }

Obtivemos o destinatário, a rua e o número. Mas vamos supor que estamos em um cenário em que temos muitos campos!
Voltando ao VSCode, para facilitar, o Javascript adotou a sintaxe de espalhamento em objetos. Como podemos fazer isso de forma mais prática?
Vamos dizer que queremos espalhar o que está dentro do objeto de endereço. Para isso, usaremos o operador de espalhamento reticência e chamaremos o cliente.enderecos[0], no índice zero.

    const encomenda = {
      destinatario: cliente.nome,
      ...cliente.enderecos[0],
    };

    console.log(encomenda);

Salvaremos o arquivo mais uma vez e vamos voltar ao terminal para rodar o comando node aula3/espalhamento.js:

    Ligando para 1155555550
    Ligando para 1144444440

    { 
            destinatario: 'Joao', 
            rua: 'R. Joseph Climber',
            numero: 1337,
            apartamento: true,
            complemento: 'ap 934'
    }

Assim, temos somente um objeto, que contém os campos destinatário, rua, número, apartamento e complemento.


### Para saber mais: spread operator

No aula anterior vimos um exemplo de uso do spread operator, também conhecido como sintaxe de espalhamento ou operador de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Para entender melhor, vamos ver mais alguns exemplos:

    const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
    }

    const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
    }

Ainda usando o exemplo acima, agora vamos tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:

    const guerreiro = { fichaGuerreiro, equipoGuerreiro }

    console.log(guerreiro)

O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados. Porém, agora o nome de cada variável é uma chave e o valor da chave é cada um dos objetos:

    {
      fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
      equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
    }

Aqui é onde vamos utilizar o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, separando-os com uma vírgula:

    const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }

    console.log(guerreiro)

Após usar o spread operator, o console vai mostrar o resultado esperado, que é:

    {
    nome: 'Aragorn',
    classe: 'guerreiro',
    espada: 'Andúril',
    capa: 'capa élfica +2'
    }

Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

    const mago = {
    nome: "Gandalf",
    classe: "mago"
    }

    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
    }

    const ranger = {
    nome: "Legolas",
    classe: "ranger"
    }

Os três objetos acima têm as mesmas propriedades. Mas o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator? Vamos ver:

    const personagens = { ...mago, ...guerreiro, ...ranger }

    console.log(personagens)

Fazendo isso o resultado não será bem o que esperamos:

    { nome: 'Legolas', classe: 'ranger' }

Perceba que o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

Caso queira, temos outra explicação deste processo aqui no [artigo ES6 - Desestruturando objetos presente na nossa plataforma](https://www.alura.com.br/artigos/es6-desestruturando-objetos?_gl=1*1yumh7b*_ga*MTIyMzM4MDk5NC4xNjkyNzQ1NDk5*_ga_1EPWSW3PCS*MTY5NDM1MDY2MS4yLjEuMTY5NDM1Mjc1My4wLjAuMA..*_fplc*V0VxU21icHV1ZXJxa2kwMVpXWmxKNGNFcjVza0JJRjFLY28xdHZVS2tBZldNeWtaS3BqOHozR0FCaWUlMkJ1MWtrZDN5UUZvTms0ZVBwVyUyRmJvTERmcCUyQlA2cHdreFR3WWgwUjcxSmxCVFJGS0FWbWV5d1d2dTBhbEtQM2FDZDBnJTNEJTNE).

[Destructuring em JavaScrip](https://youtu.be/f8a-qwKC5yk)


### O que aprendemos?
***
Nesta aula, você aprendeu:
Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.


## Aula - 04: Conhecendo o JSON

    cliente.js

### O formato JSON

Estamos nos aprofundando no funcionamento e formas de utilizar os objetos do JavaScript. Para continuar esse estudo, é importante conhecer um novo formato com que podemos salvar objetos, chamado JSON.
JSON é uma sigla para JavaScript Object Notation, ou "Notação de Objeto JavaScript" em português. Ou seja, é um formato que permite a escrita de objetos do JavaScript.
Para entender esse formato de notação, tomaremos como exemplo o seguinte trecho do arquivo cliente.js, que já conhecemos:

    const cliente = {
      nome: "Joao",
      email: "joao@firma.com",
      telefone: ["11223344", "11922334453"],
      endereco: {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
      },
    };

Temos a variável const cliente, em que abrimos chaves para a inserção de diversas propriedades. Algumas dessas propriedades, além de poderem ser apenas tipos primitivos como uma string ou um número, também podem ser arrays ou mesmo outros objetos.
Se fôssemos escrever esse mesmo trecho na nova notação, uma versão cliente.json, teríamos algo bastante similar:

    {
      "nome": "Joao",
      "email": "joao@firma.com",
      "telefone": ["11223344", "11922334453"],
      "endereco": {
        "rua": "R. Joseph Climber",
        "numero": 1337,
        "apartamento": true,
        "complemento": "ap 934"
      }
    }

Notamos algumas diferenças na forma de escrita desse mesmo objeto no arquivo .js e no arquivo .json.
Analisando detalhadamente o formato JSON, percebemos algumas particularidades que desconhecemos:
Não existem variáveis
Nessa nova notação, não precisamos dar o nome para onde vamos guardar esse objeto.
Chaves das propriedades têm aspas duplas (" ")
As chaves são escritas de modo parecido com o da string, mas são estritamente aspas duplas, como "nome".
Arrays e objetos aninhados podem existir
Como em "telefone" e "endereco".
Restrição de trailing comma
Nesse formato, é proibido ter vírgula no último item de um bloco, como em "complemento": "ap 934", diferente do JavaScript comum. Precisamos sempre nos atentar a essa limitação e não deixar vírgulas sobrando.
Além dessas diferenças que percebemos no trecho de exemplo, temos algumas outras:
Funções não são permitidas, precisamos omiti-las do nosso objeto;
Comentários não são permitidos;
Suporta apenas tipos primitivos (string, number, boolean, null);
O undefined também não é permitido;
Algumas estruturas mais complexas, como datas ou a escrita em Regex, também podem não ser aceitas.


### Lendo um arquivo JSON

    cliente.json

    leitura.js

Vamos entender melhor a importância de conhecer essa nova ferramenta, assim como aprender a ler esse tipo de arquivo, na prática.
Por que o formato JSON existe?
Esse formato é muito utilizado quando temos um conjunto de configurações ou um padrão que queremos inserir no nosso código, acessando-o em outros lugares.
Além disso, essa notação permite transformar um objeto em uma string e transmitir esses dados de um sistema para outro, no formato em que todas as strings são transmitidas.
Ou seja, uma das maiores funcionalidades desse formato é tornar o objeto em algo mais fácil de manipular por outros sistemas que não apenas um código em JavaScript. É por isso, inclusive, que esse formato tem aquelas restrições sobre as quais comentamos anteriormente.
Como usar esse arquivo?
Para começar, vamos voltar ao Visual Studio e criar um arquivo JSON.
No menu lateral esquerdo, criaremos uma nova pasta chamada "aula4" na raiz do nosso projeto. Nela, criamos um novo arquivo chamado "cliente.json". Vemos que o ícone que surge do lado esquerdo do nome do arquivo são chaves, diferente dos arquivos .js, demonstrando que esse formato tem uma ampla adoção.
Nesse arquivo, colaremos o seguinte código (o mesmo que analisamos na aula anterior):

    cliente.json

    {
      "nome": "Joao",
      "email": "joao@firma.com",
      "telefone": ["11223344", "11922334453"],
      "endereco": {
        "rua": "R. Joseph Climber",
        "numero": 1337,
        "apartamento": true,
        "complemento": "ap 934"
      }
    }

Na pasta "aula4", criaremos um novo arquivo que chamaremos de "leitura.js", em que estabeleceremos uma interação com o nosso arquivo cliente.json.
Para isso, criamos uma nova variável chamada "dados" que vai armazenar o valor daquele objeto escrito em JSON. Ou seja, passaremos o arquivo local "./cliente.json" como parâmetro da função require() recebida por dados.

    leitura.js

    const dados = require("./cliente.json");

Em seguida, pedimos para que o console.log retorne o que recebemos desse arquivo, passando a variável dados como seu parâmetro.

    const dados = require("./cliente.json");

    console.log(dados);

Agora podemos voltar para o terminal e executar node aula4/leitura.js. Com isso, retornamos o objeto que criamos em cliente.json. Ou seja, nós utilizamos esse objeto no nosso código por meio do arquivo JSON.
Para isso, usamos o require(). Basicamente, essa é uma função que o Node.js nos permite usar para, dentre outras finalidades, utilizar o código de outro lugar, assim como acabamos de fazer.

Para aprofundar seus conhecimentos, deixamos algumas fontes de leitura sobre a função require().

### Para saber mais: require

Neste curso utilizamos uma função, chamada require(), que é bem presente no Node.js . Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, iremos ver que essa função também pode ser utilizada para reaproveitar códigos que estão em outros arquivos, também chamados de módulos.
Caso tenha interesse de aprofundar seus conhecimentos, o MDN tem um artigo explicando os módulos em JavaScript e a documentação do Node.js também elabora mais sobre o tema e o uso específico que fizemos durante a aula.

### Artigo -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules

### Documentação -> https://nodejs.org/api/modules.html#modules_modules

### Puxando um arquivo

Digamos que temos um arquivo do tipo JSON e queremos resgatar o conteúdo salvo em uma determinada propriedade a partir do seguinte arquivo:
Arquivo lutador.json:

    {
      "nome": "Leandro Macedo",
      "esporte": "Jiu Jitsu",
      "altura": 1.65,
      "lutas": 12,
      "vitorias": 7,
      "categoria": "Peso pena"
    }

Após analisar o arquivo acima, marque a alternativa correta que contém um código que adquira as informações deste arquivo e quando executado mostre no terminal o valor da propriedade altura. Para isso, considere que o seu código e o arquivo JSON estão no mesmo diretório:

Podemos escrever no arquivo leitura.js o seguinte código:

    const lutador = require("./lutador.json");

    console.log(lutador.altura);

-> Utilizamos o require() para ler os dados,salvamos na variável dados e em seguida mostramos na tela com um console.log().

### Operações com um JSON

    leitura.js

Nós aprendemos a usar a função require() para ler um arquivo .json. Agora vamos aprender outras formas de receber um arquivo desse tipo, além de criar nossos próprios textos nesse formato.
"Stringficação"
Existe uma maneira de escrever um texto no formato JSON a partir de um objeto JavaScript comum.
Para isso, vamos voltar ao arquivo leitura.js no VSCode. Nele, escreveremos uma variável que chamaremos de const clienteEmString. Faremos com que ela receba uma forma de transformar um objeto em string, uma função que podemos chamar de "stringficação", em tradução livre.
Ou seja, essa variável receberá um objeto chamado JSON, um global no ambiente do Node. Nesse objeto, acessaremos a função stringify, que transforma o objeto em string. Passaremos dados, o arquivo contendo as informações de um cliente, como parâmetro dessa função.
Por fim, faremos o console.log(), passando clienteEmString, para verificar o que essa função nos retorna na tela. Conforme os nomes indicam, deveria ser uma string.
Teremos, então:

    leitura.js

    const dados = require("./cliente.json");

    console.log(dados);
    console.log(typeof dados);

    const clienteEmString = JSON.stringify(dados);

    console.log(clienteEmString);

Agora, vamos ao terminal executar o código. O retorno é o seguinte:

node aula4/leitura.js

    {
      "nome": 'Joao',
      "email": 'joao@firma.com',
      "telefone": ['11223344', '11922334453'],
      "endereco": {
        "rua": 'R. Joseph Climber',
        "numero": 404,
        "apartamento": true,
        "complemento": 'ap 934'
      }
    }
    object
    {"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}

Ou seja, temos os dois primeiros console.log() do arquivo leitura.js, retornando um objeto e o tipo do que foi salvo na variável, um objeto.
Em seguida, temos o console.log() que codamos agora, que retorna uma string com as mesmas informações daquele objeto, organizadas em uma linha só e sem a interatividade dos objetos. Ou seja, é apenas um conjunto de letras que não tem os comportamentos que um objeto teria.
Para não restarem dúvidas sobre isso, podemos inserir em leitura.js um novo console.log() pedindo o tipo de clienteEmString, assim como fizemos anteriormente:

    console.log(typeof clienteEmString);

Vamos executar o código novamente no terminal, o que nos retornará:

node aula4/leitura.js

    {"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}
    string

Ou seja, na última linha do retorno, temos o indicativo de que realmente estamos lidando com uma string. Sendo assim, não conseguimos interagir com ela da mesma forma que conseguimos com os objetos.
Por exemplo, as propriedades nela não estão marcadas. Para testar isso, podemos fazer mais um console.log() tentando extrair o valor da propriedade "nome":

    console.log(clienteEmString.nome)

Vamos executar o código novamente:

node aula4/leitura.js

    {"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}
    string
    undefined

Se fosse um objeto, receberíamos "Joao" no retorno. Mas como é uma string que não tem acesso às propriedades do objeto, recebemos "undefined". Ou seja, realmente temos um comportamento de string.
Mas, qual a utilidade de transformar um objeto, com todas aquelas funcionalidades, em uma string?
Reiteramos que a grande função do JSON é salvar e transmitir informações em texto, de modo simples, algo bastante necessário para a infraestrutura da tecnologia.
Um objeto JavaScript comum é feito para operar dentro de um código JavaScript; já um código em JSON compartilha os dados de forma mais genérica e adaptável.
Mas e se nós tivéssemos recebido essas informações em forma de texto, ou como uma string, e quiséssemos transformar esse código de volta em objeto, para operar com ele? É possível?
"Traduzir" a string para objeto
Para transformar clienteEmString em um objeto novamente, usaremos a função .parse do objeto JSON que usamos no passo anterior.
Em português, essa função significaria algo como "traduzir" ou "adequar". Ou seja, ela lerá uma string e tentará montar o objeto a partir dela. Então teremos JSON.parse().
Como parâmetro dessa função, passaremos clienteEmString e declararemos seu resultado como const objetoCliente:

    const objetoCliente = JSON.parse(clienteEmString);

Em tese, o que receberemos disso será igual ao que recebemos em dados, quando lemos o arquivo cliente.json. Para verificar isso, chamaremos:

    console.log(objetoCliente);

Agora, ao executar o código novamente no terminal, recebemos:

node aula4/leitura.js

    {
      "nome": 'Joao',
      "email": 'joao@firma.com',
      "telefone": ['11223344', '11922334453'],
      "endereco": {
        "rua": 'R. Joseph Climber',
        "numero": 404,
        "apartamento": true,
        "complemento": 'ap 934'
      }
    }

Conforme o esperado, temos o mesmo objeto que tinha sido salvo na leitura do arquivo JSON em dados.
Conclusões
Conseguimos percorrer todo o caminho:
-> Ler um arquivo .json;
-> Transformá-lo em uma string para podermos salvá-lo, transmiti-lo ou usá-lo em alguma outra operação que é comumente realizada com strings;
-> Por fim, transformamos essa string de volta em um objeto para podermos alterar as propriedades e realizar operações comuns do JavaScript.

### Para saber mais: copiando objetos

A forma como os objetos são armazenados e como fazer cópias de seus valores é também um conhecimento importante já que existem diversos detalhes da forma como o JavaScript lida com isso. Você pode se deparar com alguns problemas caso não leve esses fatores em consideração.
Pensando nisso, separamos para você um artigo sobre clonagem profunda com imutabilidade. Ele está presente na nossa plataforma e é uma leitura interessante agora que você já teve um bom contato com os objetos em JavaScript.

### Artigo -> https://www.alura.com.br/artigos/implementar-funcao-clonagem-profunda-imutabilidade-js?_gl=1*3uz1ta*_ga*MTIyMzM4MDk5NC4xNjkyNzQ1NDk5*_ga_1EPWSW3PCS*MTY5NDkwNzk5MS41LjEuMTY5NDkxMTU2Ni4wLjAuMA..*_fplc*b2JkdXd1cU42JTJCbjVLd0dobUJPbHdLTVNzalJ0QmxWeE5CM0dQZmhKZlhZMHFwdmVRdE9ibkY5MGpkNUdDeDdseWwxOEpFaXpHS3c3WU5kJTJGbEtoNXZMb1NVY3BWWDJWYyUyRkZXc29qR0Y0Rzk2OFF3QyUyQmMlMkJiY0tZdiUyRllqM05nJTNEJTNE

### Trabalhando com JSON

Nesta aula aprendemos sobre o formato JSON. Vimos o que motivou sua existência, como é sua sintaxe e de que modo podemos utilizar esse formato, como por exemplo, armazenando um objeto em um arquivo.
Primeiramente recebemos um arquivo no formato JSON com algumas informações sobre um cliente:
Arquivo cliente.json:

    {
      "nome": "Joao",
      "email": "joao@firma.com",
      "telefone": ["11223344", "11922334453"],
      "endereco": {
        "rua": "R. Joseph Climber",
        "numero": 404,
        "apartamento": true,
        "complemento": "ap 934"
      }
    }

Em seguida, fizemos a leitura deste arquivo e testamos alguns métodos que o próprio Node nos fornece para utilizar o formato JSON, como por exemplo, transformando um objeto em uma string e retomando um objeto à partir dessas strings, como podemos observar no código abaixo:

Arquivo leitura.js:

    const dados = require("./cliente.json");

    console.log(dados);
    console.log(typeof dados);

    const clienteEmString = JSON.stringify(dados);

    console.log(clienteEmString);
    console.log(typeof clienteEmString);

    console.log(clienteEmString.nome);

    const objetoCliente = JSON.parse(clienteEmString);

    console.log(objetoCliente);

### O que aprendemos?

Nessa aula, você aprendeu:
-> O que é o formato JSON e por qual motivo o utilizamos, como por exemplo a transmissão de dados ou armazenamento de configurações;
-> Qual a sintaxe do JSON e suas limitações, como não ter variáveis ou comentários;
-> Como ler um arquivo .json no Node.js;
-> Como utilizar as funções nativas do Node.js para manipular um JSON.


## Aula - 05: Exercitando os conhecimentos

### Exercitando o aprendizado

Para continuar nossos estudos, vamos fazer alguns testes mais elaborados com os objetos.
Para isso, vamos na barra lateral esquerda "Explorer" e clicamos no ícone "New Folder" para criar uma nova pasta na raiz do nosso projeto, chamada aula5.
Na atividade "Preparando o ambiente", você pode copiar um texto para o arquivo do projeto.
Para salvar essa atividade dentro da pasta aula5, selecione a pasta e clique no ícone "New File" em "Explorer". Assim, criamos um arquivo que chamamos de clientes.json.
Logo, vamos copiar o conteúdo da atividade - que é uma lista com informações de vários clientes - e colar dentro do novo arquivo clientes.json.
Vamos ver quais elementos estão contidos dentro dessa lista que copiamos?
O bloco mais externo do novo arquivo é um array, por isso, começa e termina com colchetes "[]".
Esse array contém 20 objetos entre chaves "{}" que correspondem as entradas dos clientes.
Cada entrada contém informações fictícias desses vários clientes. E esses dados de cada clientes são representados por pares chave-valor.
Um par chave-valor consiste em um campo de chave (entre aspas), seguido por dois pontos (:) e depois seu valor (entre aspas)
Então, dentro das chaves de cada cliente, temos os campos de nome, email, telefone e seus respectivos valores. Note que a chavetelefone tem como seu valor um array.
O último dado de cada cliente é um objeto endereço, entre chaves, que tem pares chave-valor de logradouro, numero, cep, apartamento e complemento. Perceba que apartamento é um booleano.

    clientes.json

    [
      {
        "nome":"Olva",
        "email":"olippini0@deviantart.com",
        "telefone":[
          "4733865848",
          "47933865848"
        ],
        "endereco":{
          "logradouro":"Rua Transport",
          "numero":"05",
          "cep":"46140",
          "apartamento":true,
          "complemento":"ap 102"
        }
      },
      {
        "nome":"Oralle",
        "email":"orajchert1@clickbank.net",
        "telefone":[
          "5896279799",
          "58996279799"
        ],
        "endereco":{
          "logradouro":"Rua Kedzie",
          "numero":"89",
          "cep":"613840",
          "apartamento":false
        }
      },

    //...código omitido dos demais objetos com dados dos clientes

    ]

Nas próximas aulas, vamos fazer exercícios de manipulações comumente feitas em objetos.
Por exemplo, faremos uma função para encontrar um determinado objeto conforme uma chave ou valor procurado.
Além disso, vamos filtrar os valores dos objetos desse array de acordo com um parâmetro que queiramos testar.
Também vamos aprender a ordenar esses valores, dado algum critério (por exemplo, chave ou ordem específica).

### Para saber mais: métodos de arrays

Para simplificar nossa vida, é muito comum utilizarmos os métodos já prontos de arrays durante o desenvolvimento. Já que nos próximos vídeos vamos usar de diversas funções, e para refrescar nossa memória quanto a esse assunto, é importante ter por perto alguma referência da linguagem.
Então, caso tenha alguma dúvida, não hesite em pausar o vídeo e conferir a documentação do MDN sobre arrays.

### Documentação -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

### Encontrando um objeto

    encontrar.js

Nosso primeiro passo é fazer um exercício de encontrar um determinado objeto dentro da nossa lista de objetos.
Primeiramente, na pasta aula5 dentro do Visual Studio Code, vamos criar um arquivo (ícone "New File") chamado encontrar.js
Dentro desse arquivo, devemos ler aquele array com objetos que correspondem aos clientes.
Para isso, chamamos uma variável const clientes recebendo a função require(). Como parâmetro da função usaremos o caminho do arquivo local JSON de clientes.
    
    encontrar.js

    const clientes = require("./clientes.json");

Vamos confirmar se conseguimos carregar essa lista de clientes? Na próxima linha, peça para mostrar a variável clientes em console.log().

    console.log(clientes);

No terminal, vamos executar o comando node, seguido do nome do arquivo a ser executado.

node aula5/encontrar.js

Quando apertamos a tecla "Enter", podemos ver uma grande lista dos clientes fictícios - o que significa que conseguimos carregar o que queríamos.
Voltando arquivo encontrar.js no Visual Code Studio, podemos apagar a linha do método console.log para poder começar a escrever a nossa solução.
Assim, vamos fazer uma função encontrar() com alguns parâmetros necessários para encontrar um determinado objeto.
A primeira coisa que precisamos passar como parâmetro da função é qual a informação que vamos buscar, uma lista de clientes. Por isso, chamamos o primeiro parâmetro de lista.
Agora, devemos especificar onde vamos buscar dentro dessa lista. Vamos buscar pelo nome? Rua? Número da casa? Esses campos citados são todos nomes de chaves, assim, nomearemos o parâmetro chave.
Depois de especificar o parâmetro de chave, devemos dar o valor que queremos buscar. Diante disso, vamos nomear o último parâmetro como valor.

    function encontrar(lista, chave, valor) {

    }

A nossa lista de clientes é um array com vários objetos. Por isso, podemos utilizar os métodos de array para nosso benefício.
Pois, existe um método de array, chamado find, que faz uma busca e nos retorna a primeira instância correspondente ao que foi buscado.
Portanto, na próxima linha entre as chaves "{}", vamos instruir a função encontrar a retornar um item da lista usando essa função find, ou seja, return lista.find().
O que esse método vai fazer? Vamos dar um item da lista para ele e, se aquela chamada sair verdadeira, o método nos retorna aquele item.
Para que o método saiba o que buscar dentro da lista, vamos passar um item para uma função flecha (=>) que vai comparar se o item dentro da chave é igual ao valor que buscamos.

    function encontrar(lista, chave, valor) {
      return lista.find((item) => item[chave] === valor);
    }

Para testar o funcionamento da função, vamos criar uma variável const encontrado para receber uma chamada da função encontrar com os parâmetros que buscamos.
Queremos encontrar uma pessoa chamada Kirby da nossa lista de clientes. Assim, os parâmetros de encontrar serão: a lista clientes, a chave "nome" e o valor dessa chave,"Kirby".

    const encontrado = encontrar(clientes, "nome", "Kirby");

Agora, podemos ver se alguém foi encontrado. Novamente, vamos usar console.log para mostrar a variável encontrado.
Esse é o código completo após salvá-lo:

    const clientes = require("./clientes.json");

    function encontrar(lista, chave, valor) {
      return lista.find((item) => item[chave] === valor);
    }

    const encontrado = encontrar(clientes, "nome", "Kirby");

    console.log(encontrado);

Assim, podemos executar node aula5/encontrar.js no terminal para verificar se o código funciona.
No terminal, podemos ver que a função encontrar usou o método de array e nos retornou o objeto inteiro para a propriedade "nome" sendo igual a "Kirby".
terminal :

    {
        "nome":"Kirby",
        "email":"kcoard8@squidoo.com",
        "telefone":[
          "9291767581",
          "92991767581"
        ],
        "endereco":{
          "logradouro":"Rua Valley Edge",
          "numero":"5",
          "cep":"20195",
          "apartamento":false,
          "complemento":"Venda da tia Zezé"
        }
      }

Será que esse código que criamos no Visual Studio Code vai funcionar para encontrar quaisquer dados em uma lista de objetos?Afinal, não queremos que ele funcione somente para o campo "nome".
Para verificar, podemos fazer uma variação utilizando outros objetos e campos presente em nossa lista.
Vamos copiar do nosso arquivo clientes.json um número específico de telefone, por exemplo, o primeiro número de telefone da Amye. Então, vamos mandá-lo procurar a chave "telefone" com o valor copiado em string.

    encontrar.json

    const encontrado2 = encontrar(clientes, "telefone", "1918820860");

    console.log(encontrado2);

No terminal, executamos novamente node aula5/encontrar.js. Contudo, não conseguimos encontrar nenhuma equivalência para o telefone da Amye.
Isso porque, dentro da nossa função encontrar, estamos utilizando uma igualdade estrita (===).
Lembre-se que o telefone da Amye está dentro de um array com duas strings diferentes de números de telefone. Um array com dois números de telefone é diferente do valor copiado - que tinha somente um número de telefone específico.
Por isso, a comparação de uma string com um array que contém duas strings vai retornar falso e o método não encontrará a Amye.
Para resolver o problema, podemos trocar essa comparação. Ao invés de uma igualdade estrita, vamos utilizar o método includes com o parâmetro valor.

    function encontrar(lista, chave, valor) {
      return lista.find((item) => item[chave].includes(valor));
    }

Agora, estamos utilizando um método de array, mas que também funciona para strings.
Dessa maneira, se damos o valor de um telefone que está em um array, por exemplo, o método vai procurar se o telefone pesquisado está incluído naquela lista. E se o valor for uma string, também vai procurar o valor que contém a informação dada.
Para nossa busca, é uma maneira mais flexível e pode funcionar.
Testamos a nossa troca no terminal, executando node aula5/encontrar.js. E agora, sim, conseguimos encontrar tanto o Kirby quanto a Amye.
Essa é uma forma simples de buscar um objeto específico dentre uma lista de objetos.

### Filtrando objetos

    filtrar.js

Vamos mostrar de forma prática um possível problema e como solucioná-lo utilizando filtros.
Imagine que estamos lidando com nossa loja, como na problemática abordada enquanto construíamos os objetos.
E pedimos aos nossos clientes que fizessem um cadastro com suas informações de endereço para, por exemplo, poder enviar boletos ou encomendas.
Se o cliente vive em uma casa, somente o número da casa já é suficiente para realizar a entrega. Contudo, se for um apartamento é vantajoso ter também o campo "complemento" preenchido.
No arquivo clientes.json no Visual Studio Code, existem algumas entradas de clientes onde o booleano do campo de apartamento é verdadeiro e possuem um campo de complemento preenchido com mais detalhes.
Contudo, também existem algumas entradas onde o campo apartamento é verdadeiro, mas não há mais complementos. Como, por exemplo, na entrada de uma pessoa chamada Blakeley.
O ideal seria ter uma forma de validar a informação no momento do preenchimento dos dados.
Mas agora que já adquirimos todos os endereços, uma solução é tentar contactar cada uma dessas pessoas com informações incompletas e pedi-las para fazer o recadastramento.
Porém, como saber quais são essas pessoas que necessitam se recadastrar?
Para não precisar procurar manualmente em cada uma das entradas, podemos filtrar todas as pessoas que moram em apartamento, mas não tem o campo complemento inicializado ou satisfatório.
Com esse propósito, vamos criar um novo arquivo (ícone "New File") chamado filtrar.js dentro da pasta aula5.
Vamos criar uma função para tentar resolver nosso problema, filtrando somente as pessoas que marcaram que vivem em apartamento, mas não forneceram um complemento.
Para isso, primeiro criamos uma variável const clientes e recebemos a função require() para o arquivo local de clientes.

    filtrar.js

    const clientes = require("./clientes.json");

Depois, criamos uma função filtrarApartamentosSemComplemento() que tem a lista clientes como parâmetro.

    function filtrarApartamentoSemComplemento(clientes) {

    }

Os métodos de array nos fornecem uma forma de filtrar dados, chamado filter.
Assim, na próxima linha entre as chaves "{}", vamos retornar a lista clientes chamando a função filter().
Essa função filter vai receber uma função flecha (=>), passando por cada campo de cliente. Por isso, o parâmetro da função filter é cliente no singular.
Se essa função flecha for verdadeira, o método seleciona e retorna essa entrada. Se for falsa, a instrução vai ser ignorada.


    function filtrarApartamentoSemComplemento(clientes) {
      return clientes.filter((cliente) => {

      });
    }

Para testar se a pessoa tem um apartamento e não tem a propriedade complemento, vamos escrever o comportamento da função flecha entre as chaves "{}" contidas nos parênteses "()" da função filter.
Primeiramente, a função flecha deve retornar o resultado do teste cliente.endereco.apartamento === true para saber se há pessoa tem apartamento.
Contudo, o campo apartamento já é um booleano. Se esse campo for verdadeiro, já vai ser igual a "True" (verdadeiro). Por isso, podemos omitir === true.
Após essa verificação, também devemos analisar se o campo complemento está preenchido.
Para isso, acrescentaremos o operador && depois da primeira instrução para executar ambas sequencialmente.
E, na próxima linha, verificaremos se cliente.endereco tem uma propriedade, utilizando um método de objeto chamado hasOwnProperty().
Essa função hasOwnProperty vai verificar se o endereço do cliente tem complemento, por isso, seu parâmetro é "complemento".
Mas, lembre-se que queremos o nome das pessoas que não tem um complemento preenchido. Por isso, acrescentamos um sinal de exclamação ! no começo da linha para contrariar a expressão contendo hasOwnProperty.

    function filtrarApartamentoSemComplemento(clientes) {
      return clientes.filter((cliente) => {
        return (
          cliente.endereco.apartamento &&
          !cliente.endereco.hasOwnProperty("complemento")
        );
      });
    }

Agora, podemos criar uma nova lista para saber quais clientes foram filtrados e verificar quem tem o campo apartamento verdadeiro, mas sem complementos.
Então, vamos criar uma variável const filtrados para receber a chamada da função filtrarApartamentoSemComplemento, passando a nossa lista de clientes.

    const filtrados = filtrarApartamentoSemComplemento(clientes);

Como nas aulas anteriores, vamos usar console.log para mostrar a variável filtrados.
Observe como ficou o código completo depois de salvá-lo:

    const clientes = require("./clientes.json");

    function filtrarApartamentoSemComplemento(clientes) {
      return clientes.filter((cliente) => {
        return (
          cliente.endereco.apartamento &&
          !cliente.endereco.hasOwnProperty("complemento")
        );
      });
    }

    const filtrados = filtrarApartamentoSemComplemento(clientes);

    console.log(filtrados);

Para visualizar nossa lista de filtragem, vamos abrir o terminal e executar o comando node aula5/filtrar.js
Ao apertar a tecla "Enter", podemos encontrar três entradas de pessoas que seguem os quesitos estabelecidos no filtro (apartamento como "true" e sem complemento).
Esse é um problema muito comum que você pode encontrar. Nessa aula, vimos apenas uma das inúmeras formas de resolvê-lo, utilizando uma lista de objetos.

### Ordenando objetos

    ordenar.js

Nessa aula, vamos aprender a como podemos ordenar uma lista de objetos.
Com essa finalidade, vamos criar um novo arquivo (ícone "New File") chamado ordenar.js dentro da pasta aula5 no Visual Studio Code.
Vamos escolher algum parâmetro, propriedade ou chave da nossa lista clientes.json para ordenar a lista de acordo com essa escolha.
Por exemplo, como ordenar a lista de clientes em ordem alfabética.
Primeiramente, devemos importar a lista para o arquivo ordenar.js.
Para isso, criamos uma variável const clientes para receber a função require() com o caminho do arquivo local da lista.
    
    ordenar.js

    const clientes = require("./clientes.json");

Depois, escrevemos uma função genérica para lista de objetos, chamada ordenar. Seus parâmetros serão a lista a ser ordenada e a propriedade de ordenação.

    function ordenar(lista, propriedade) {

    }

Como vimos anteriormente, os arrays implementam métodos para ajudar a resolver situações comuns. Para nosso caso, com a função sort() podemos ordenar uma lista com base na comparação de dois objetos.
Assim, na próxima linha entre as chaves "{}", vamos dizer que uma variável const resultado vai receber a lista chamando a função sort().
Devemos passar para essa função como comparar dois elementos, por exemplo, como sabemos quea é maior ou menor que b.
Por isso, os parâmetros de sort() são a e b. Seguido por uma função flecha (=> é conhecida em inglês como arrow function) e as chaves "{}" correspondentes.

    function ordenar(lista, propriedade) {
      const resultado = lista.sort((a, b) => {

      });

    }

No nosso caso, a e b são objetos e queremos acessar a propriedade dentro daqueles objetos para compará-los.
A função sort pede que implementemos o comando if para fazer essa comparação. E também devemos retornar valores diferentes para cada situação (se a maior, se a menor ou se a e b são iguais).
Então, em uma nova linha - ainda entre as chaves "{}" da função flecha - vamos testar se a propriedade de a é menor do que a mesma propriedade de b. Ou seja, if (a[propriedade] < b[propriedade]).
Se a expressão for verdadeira, deve-se retornar um valor negativo, devido a ordem dos parâmetros.
Se a propriedade de a for menor do que a mesma propriedade de b, devemos retornar um valor positivo.
E se as duas propriedades forem iguais, retornaremos 0. Pois, se não entrou em nenhuma das expressões anteriores, as propriedades de ambos são iguais e não precisamos do else.
Essa é a nossa função de ordenação. O que significa que a variável resultado tem uma nova lista ordenada.
Por isso, entre as chaves "{}" da função ordenar, podemos retornar resultado para mostrar o que obtivemos nessa função.

    function ordenar(lista, propriedade) {
      const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
          return 1;
        }
        return 0;
      });

      return resultado;
    }

Agora, vamos criar uma variável para receber uma lista com os valores ordenados, por exemplos, os nomes em ordem alfabética.
Com essa finalidade, criamos a variável const ordenadoNome que recebe a função ordenar com dois parâmetros: a nossa lista clientes e o nome da propriedade que é "nome".

    const ordenadoNome = ordenar(clientes, "nome");

Vamos pedir para mostrar na tela essa nova lista ordenadoNome.

    console.log(ordenadoNome);

Depois de salvar, o código completo ficou assim:

    const clientes = require("./clientes.json");

    function ordenar(lista, propriedade) {
      const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
          return 1;
        }
        return 0;
      });

      return resultado;
    }

    const ordenadoNome = ordenar(clientes, "nome");

    console.log(ordenadoNome);

No terminal, podemos executar node aula5/ordenar.js para visualizar a lista ordenadoNome. E conseguimos alcançar o planejado, a lista agora está ordenada em ordem alfabética.
Nessa aula, vimos como ordenar uma lista de objetos utilizando um método de array, enquanto acessamos os parâmetros dentro do nosso objeto em específico e conhecemos mais de seu funcionamento.

### Ordenando ao contrário

Na aula anterior utilizamos o método sort() para ordenar uma lista de valores passando uma função de comparação:

const clientes = require("./clientes.json");

    function ordenar(lista, propriedade) {
      const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
          return 1;
        }
        return 0;
      });

      return resultado;
    }

    const ordenadoNome = ordenar(clientes, "nome");

    console.log(ordenadoNome);

Porém, digamos que agora queremos reordenar as listas na ordem inversa. Como podemos realizar essa tarefa? Marque as alternativas que contém soluções possíveis. Para resolver essa questão, você pode utilizar dessa referência, caso necessário.

Após a ordenação da lista, podemos chamar o método reverse() na nova lista e obter uma lista que foi reorganizada de trás pra frente, com a seguinte implementação:

    const ordenadoNome = ordenar(clientes, "nome");
    const ordenadoInverso = ordenadoNome.reverse();

-> Apesar de não ter alterado o método de ordenação que criamos e ter adicionado uma funcionalidade, obtivemos o resultado desejado fazendo uma manipulação com a lista.

Podemos adicionar um parâmetro opcional na função ordenar(),com a preferência de ordenação, e conseguimos criar uma condicional após a ordenação que verifica esse parâmetro e usa o método reverse(). Ao fazer isso, o código ficaria dessa forma:

    function ordenar(lista, propriedade, ordem = "crescente") {
      const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
          return 1;
        }
        return 0;
      });

      if (ordem !== "crescente") {
        resultado.reverse();
      }

      return resultado;
    }

-> Essa é uma das formas que podemos cumprir com o objetivo que foi proposto.

### Faça como eu fiz

Nesta aula usamos diversos métodos de arrays para criar listas de objetos e realizar operações que são muito comuns no nosso cotidiano de desenvolvimento. Utilizamos um arquivo JSON para armazenar diversas entradas com informações agregadas, criamos funções para buscar, filtrar e ordenar essas listas e exercitamos o que aprendemos até o momento.

Primeiramente, salvamos as informações de clientes fornecidos em um arquivo clientes.json, e seu conteúdo pode ser encontrado no projeto do GitHub.

Em seguida criamos uma função para buscar um determinado objeto dados um par de chave e valor:

Arquivo encontrar.js:

    const clientes = require("./clientes.json");

    function encontrar(lista, chave, valor) {
      return lista.find((item) => item[chave].includes(valor));
    }

    const encontrado = encontrar(clientes, "nome", "Kirby");

    const encontrado2 = encontrar(clientes, "telefone", "1918820860");

    console.log(encontrado);

Depois decidimos filtrar aqueles clientes que inseriram a informação que moram em apartamento, mas não forneceram um valor no campo complemento. Então seria interessante ter uma lista com todos objetos que satisfizesse essa condição, o que nos fez chegar até:

Arquivo filtrar.js:

    const clientes = require("./clientes.json");

    function filtrarApartamentoSemComplemento(clientes) {
      return clientes.filter((cliente) => {
        return (
          cliente.endereco.apartamento &&
          !cliente.endereco.hasOwnProperty("complemento")
        );
      });
    }

    const filtrados = filtrarApartamentoSemComplemento(clientes);

    console.log(filtrados);

Por último, tivemos o exercício de ordenar uma lista de objetos dada uma determinada chave:

Arquivo ordenar.js:

    const clientes = require("./clientes.json");

    function ordenar(lista, propriedade) {
      const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
          return -1;
        }
        if (a[propriedade] > b[propriedade]) {
          return 1;
        }
        return 0;
      });

      return resultado;
    }

    const ordenadoNome = ordenar(clientes, "nome");

    console.log(ordenadoNome);

### O que aprendemos?

Nessa aula, você aprendeu:
-> Que podemos utilizar os métodos de listas em conjunto com objetos;
-> Como passamos os parâmetros e propriedades dos objetos para alguns métodos de listas;
-> Vimos exemplos de como encontrar, filtrar e ordenar uma lista de objetos.

### Conclusão

O que aprendemos nesse curso?
Nesse curso, aprofundamos nossos conhecimentos nos objetos de JavaScript. Também trabalhamos diversas formas de acessar e manipular as propriedades de um objeto específico.
Além disso, aprendemos sobre a estrutura dos objetos - como cada propriedade era nomeada e acessada, como combinar essas propriedades, criar novos objetos, usar o spread operator e várias outras manipulações.
Também conhecemos um novo formato, chamado JSON, entendemos sua sintaxe, como funciona esse formato, como guardá-lo e quais são seus usos em nosso cotidiano.
Fizemos vários exercícios operando listas de objetos - filtramos, buscamos e ordenamos objetos dados os critérios, enquanto estudávamos cada método.
Lembre-se que esse conteúdo é essencial para continuar o seu desenvolvimento na jornada de JavaScript e prosseguir com seus estudos. Principalmente, para o conteúdo sobre Orientação a Objetos, um paradigma muito famoso e com uma grande importância e utilidade nos dias de hoje.
Qualquer que seja seu foco, é muito bom saber que seu conhecimento cresceu com esse curso. Estamos orgulhosos de fazer parte desse processo.
Esperamos que tenha gostado desse conteúdo e que tenha atingido suas expectativas. Não deixe de avaliar e preencher o formulário de conclusão do curso para nos dizer como podemos melhorar sua experiência.