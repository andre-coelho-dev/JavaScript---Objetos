const cliente = {
  nome: "joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

// cliente.enderecos = [
//   {
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934"
//   }
// ];

const chavesObjeto = Object.keys(cliente);

console.log(chavesObjeto);

if (!chavesObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
};