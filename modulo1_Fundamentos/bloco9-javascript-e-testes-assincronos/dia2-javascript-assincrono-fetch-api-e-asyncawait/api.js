
const fetchMoeda = async () => {
  const API_URL = `https://api.coincap.io/v2/assets`;

  const moeda = await fetch(API_URL)
    .then(response => response.json())
    .then(data => data.data)
    .catch((error) => error.toString());

  return moeda;
}

const findMoeda = async () => {
  const moeda = await fetchMoeda();

  const lista = document.querySelector('#list');

  moeda
  .filter ((_, index) => index < 10)
  .forEach((item) => {
    const liList = document.createElement('li');
    const num = Number(item.priceUsd);
    liList.innerHTML = `${item.name} (${item.symbol}): ${num.toFixed(2)}`;
    lista.appendChild(liList);
  })
}


window.onload = () => findMoeda();