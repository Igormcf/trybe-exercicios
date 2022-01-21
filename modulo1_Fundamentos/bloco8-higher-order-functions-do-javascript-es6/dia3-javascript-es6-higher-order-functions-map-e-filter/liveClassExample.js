/* This example was made by the teacher during the live class.
Attention: only to review the logic used in the resolution */

const states = [
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "AM", name: "Amazonas" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// 1. Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:

// b) "A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}"
console.log("Formato: A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}");

// const cityAndState = cities.map( (city) => { // Iteração 1 - city = { state: "AM", name: "Manaus" , region: "N" }
//   return `A cidade de ${city.name}`;
// } );

// const findState = states.find( (state) => { // findState = { short: 'AM', name: 'Amazonas' }
//   return state.short === "AM";
// } );

// const cityAndState = cities.map( (city) => { // Iteração 1 - city = { state: "AM", name: "Manaus" , region: "N" }
//   const findState = states.find( (state) => { // findState = { short: 'AM', name: 'Amazonas' }
//     return state.short === city.state;
//   } );
//   return `A cidade de ${city.name} fica no estado de ${findState.name}`;
// } );

const cityAndState = cities.map( (city) => { // Iteração 1 - city = { state: "AM", name: "Manaus" , region: "N" }
  const findState = states.find( (state) => state.short === city.state);
  return `A cidade de ${city.name} fica no estado de ${findState.name}`;
} );


// console.log(findState);
console.log(cityAndState);