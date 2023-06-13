'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////

const displayCountry = function (data, className = '') {
  const currencies = Object.values(data.currencies)[0].name;
  console.log(currencies);
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👨‍👩‍👧‍👦</span>${Intl.NumberFormat(
              'ru'
            ).format(data.population)} миллионов</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${currencies}</p>
          </div>
        </article>
  `;
  countriesContainer.style.opacity = '1';
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryAndBorderCountries = function (country) {
  // Вызов AJAX для получения данных о стране
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();

  request1.addEventListener('load', function () {
    const [data1] = JSON.parse(this.responseText);
    console.log(data1);

    // Отображение страны
    displayCountry(data1);
    // получаем первую соседнюю страну
    const [firstNeighbour] = data1.borders;
    if (!firstNeighbour) return;
    // Вызов AJAX для получения данных о первой соседней стране
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
    );
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      displayCountry(data2, 'neighbour');
    });
  });
};

getCountryAndBorderCountries('usa');
